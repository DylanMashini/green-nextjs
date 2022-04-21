import { MongoClient } from "mongodb";

export default async function newsletter(req, res) {
	if (req.method != "POST") {
		res.statusCode = 405;
		res.end("Method not allowed");
		return;
	}
	if (
		!req.body.email ||
		!req.body.firstName ||
		!req.body.lastName ||
		!req.body.body
	) {
		res.statusCode = 400;
		res.end("Missing parameters");
		return;
	}
	const email = req.body.email;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const body = req.body.body;
	const client = await MongoClient.connect(process.env.MONGO_URI);
	try {
		await client.connect();
		const db = client.db("my-green-earth");
		const collection = db.collection("users");
		const user = await collection.findOne({ email });
		if (user) {
			//still email ??
			res.statusCode = 400;
			res.end("User already exists");
			return;
		}
		await collection.insertOne({
			email: email,
			firstName: firstName,
			lastName: lastName,
			body: body,
		});
		//send email with sendgrid
	} finally {
		client.close();
	}
}
