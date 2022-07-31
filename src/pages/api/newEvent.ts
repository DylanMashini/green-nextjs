import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuid } from "uuid";
import server from "../../../server";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		res.status(405).end("Method not allowed");
		return;
	}

	const { title, description, location, date, url, address } = req.body;

	if (!(title && description && location && date)) {
		res.status(400).end("Missing required fields");
		return;
	}
	const client = new MongoClient(process.env.MONGO_URI);
	try {
		await client.connect();
		const db = client.db("my-green-earth");
		const collection = db.collection("events");
		await collection.insertOne({
			title,
			description,
			location,
			date,
			url,
			address,
			id: uuid(),
		});
		await fetch(`${server}/api/revalidateEvents`);
		res.status(200).end("Event created");
		return;
	} finally {
		await client.close();
	}
}
