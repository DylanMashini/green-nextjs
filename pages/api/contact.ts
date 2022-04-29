import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import { MongoClient } from "mongodb";

export default function Contact(req: NextApiRequest, res: NextApiResponse) {
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
		to: "bmashini@gmail.com",
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
	sgMail.send(msg).then(async res => {
		console.log("sent email");
		const client = new MongoClient(process.env.MONGO_URI);
		try {
			await client.connect();
			const db = client.db("mygreenearth");
			const collection = db.collection("emails");
			if (!(await collection.findOne({ email: email }))) {
				await collection.insertOne({
					email: email,
					firstName: firstName,
					lastName: lastName,
					messages: [message],
					source: source,
				});
			} else {
				//user already exists
				await collection.updateOne(
					{ email: email },
					{ $push: { messages: message } }
				);
			}
		} finally {
			client.close();
		}
	});
	res.status(200).end();
}
