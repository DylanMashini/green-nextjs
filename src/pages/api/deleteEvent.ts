import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import server from "../../../server";

export default async function deleteEvent(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		res.status(405).end("Method not allowed");
		return;
	}

	const { id } = req.body;
	if (!(id && session)) {
		res.status(400).end("Missing required fields");
		return;
	}

	const client = new MongoClient(process.env.MONGO_URI);
	try {
		await client.connect();
		const db = client.db("my-green-earth");
		const collection = db.collection("events");
		await collection.deleteOne({ id });
		await fetch(`${server}/api/revalidateEvents`);
		res.status(200).end("Event deleted");
	} finally {
		client.close();
	}
}
