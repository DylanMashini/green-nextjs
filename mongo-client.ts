import { MongoClient } from "mongodb";
const uri = process.env.MONGO_URI;
let client;
let clientPromise;

client = new MongoClient(uri);
clientPromise = client.connect();
module.exports = clientPromise;
