import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import { MongoClient } from "mongodb";
export default async function Contact(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method != "POST") {
		res.status(405).send("Method not allowed");
		return;
	}
	const { firstName, lastName, email, message, source } = req.body;
	if (!firstName || !lastName || !email || !message) {
		res.status(400).send("Missing Parameters");
		return;
	}
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
		to: "info@mygreenearth.org",
		from: "contact@mygreenearth.org",
		subject: `New message from ${firstName + " " + lastName}`,
		text: `${message}`,
		html: `
            <p>${source ? `new message from ${source}` : "new message"}</p>
            <br></br>
            <p>${message}</p>
            <br></br>
            <h2>Sent from ${email}</h2>
        `,
	};
	await sgMail.send(msg);
	console.log("sent email");
	const client = new MongoClient(process.env.MONGO_URI);
	try {
		await client.connect();
		console.log("here");
		const db = client.db("mygreenearth");
		const collection = db.collection("users");
		const user = await collection.findOne({ email: email });
		if (user) {
			await collection.updateOne(
				{ email: email },
				{ $push: { messages: message } }
			);
			if (source) {
				await collection.updateOne(
					{ email: email },
					{ $set: { source: source } }
				);
			}
		} else {
			await collection
				.insertOne({
					email: email,
					firstName: firstName,
					lastName: lastName,
					messages: [message],
					source: source,
				})
				.then(res => {
					console.log(res);
				})
				.catch(err => {
					console.error(err);
				});
		}
	} finally {
		client.close();
	}
	res.status(200).end();
}
