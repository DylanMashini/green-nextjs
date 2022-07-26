import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log(req);
	if (req.method !== "POST") {
		res.status(405).send("Method not allowed");
		return;
	}
	if (!req.body.email || !req.body.session) {
		res.status(400).send("Missing parameters");
		return;
	}

	const client = new MongoClient(process.env.MONGO_URI);
	try {
		await client.connect();
		const db = client.db("my-green-earth");
		const collection = db.collection("admin");
		const user = await collection.findOne({ email: req.body.email });
		if (!user) {
			res.status(401).send("User not found");
			return;
		}
		if (user.session == req.body.session) {
			res.status(200).json({
				status: "OK",
			});
			return;
		} else {
			res.status(401).send("Session invalid");
			return;
		}
	} finally {
		client.close();
	}
}
