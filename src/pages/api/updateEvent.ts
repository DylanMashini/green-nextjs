import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import server from "../../../server";

export default async function updateEvent(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		res.status(405).end("Method not allowed");
		return;
	}
	const { title, description, location, date, url, address, id } = req.body;
	if (!(title && description && location && date)) {
		res.status(400).end("Missing required fields");
		return;
	}
	const client = new MongoClient(process.env.MONGO_URI);
	try {
		await client.connect();
		const db = client.db("my-green-earth");
		const collection = db.collection("events");
		const result = await collection.updateOne(
			{ id: id },
			{
				$set: {
					title,
					description,
					location,
					date,
					url,
					address,
				},
			}
		);
		if (result) {
			await fetch(`${server}/api/revalidateEvents`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id }),
			});
			res.status(200).end("Event updated");
			return;
		} else {
			res.status(400).end("Error");
			return;
		}
	} finally {
		client.close();
	}
}
