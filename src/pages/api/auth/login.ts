import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import * as bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
	if (req.method != "POST") {
		res.status(405).send("Method not allowed");
		return;
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
			//user exists, do bcrypt check
			const result = bcrypt.compareSync(req.body.password, user.password);
			if (result) {
				const session = uuid();
				await collection.updateOne(
					{ email: req.body.email },
					{ $set: { session: session } }
				);
				res.status(200).send({ session: session });
			} else {
				return res.status(401).send("Invalid email or password");
			}
		} else {
			// user does not exist
			return res.status(401).send("Invalid email or password");
		}
	} finally {
		client.close();
	}
}
