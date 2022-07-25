import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export default async function deleteEvent(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		res.status(405).end("Method not allowed");
		return;
	}

	const { id, session } = req.body;
	if (!(id && session)) {
		res.status(400).end("Missing required fields");
		return;
	}

	const client = new MongoClient(process.env.MONGO_URI);
	try {
		await client.connect();
		const db = client.db("my-green-earth");
		const user = await (await db.collection("admin")).findOne({ session });
		if (!user) {
			res.status(401).end("Unauthorized");
			return;
		}
		const collection = db.collection("events");
		await collection.deleteOne({ id });
		res.status(200).end("Event deleted");
	} finally {
		client.close();
	}
}
