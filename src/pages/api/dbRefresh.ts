import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export default async function dbRefresh(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const client = await MongoClient.connect(process.env.MONGO_URI);
	try {
		await client.connect();
		const db = client.db("my-green-earth");
		console.log("Database connected Date: " + new Date());
		res.status(200).send("Sucssessfull");
		return;
	} finally {
		client.close();
	}
}
