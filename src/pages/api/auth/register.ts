import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import * as bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";

export default async function register(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method != "POST") {
		res.status(405).send("Method not allowed");
	}
	if (!req.body.email || !req.body.password) {
		res.status(400).send("Missing parameters");
	}
	const client = new MongoClient(process.env.MONGO_URI);
	try {
		await client.connect();
		const db = client.db("my-green-earth");
		const collection = db.collection("admin");
		const user = await collection.findOne({ email: req.body.email });
		if (user) {
			res.status(400).send("User already exists");
			return;
		}
		const hash = bcrypt.hashSync(req.body.password, 12);
		const session = uuid();
		await collection.insertOne({
			email: req.body.email,
			password: hash,
			session: session,
		});
		res.status(200).send({ session: session });
	} finally {
		client.close();
	}
}
