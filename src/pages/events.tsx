import { Card, Text, Button } from "@nextui-org/react";
import Layout from "../components/Layout";
import styles from "../styles/events.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MongoClient } from "mongodb";

export default function Events({ events }) {
	const [mobile, setMobile] = useState(false);
	const [width, setWidth] = useState(764);
	const [height, setHeight] = useState(440);
	const isProd = process.env.NODE_ENV === "production";
	const getMobile = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
		if (window.innerWidth < 905) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	};
	if (!isProd) {
		useEffect(() => {
			getMobile();
			window.addEventListener("resize", getMobile);
		});
	} else {
		useEffect(() => {
			getMobile();
		});
	}
	const cards = events.map(event => {
		return (
			<Card
				isHoverable
				isPressable={event.url ? true : false}
				key="id"
				variant="bordered"
				onPress={
					event.url ? () => window.open(event.url, "_blank") : null
				}
				css={{
					mw: "70%",
					marginBottom: "2rem",
				}}
			>
				<Card.Header
					css={{
						display: "flex",
						justifyContent: "center",
						width: "100%",
						flexDirection: "column",
					}}
				>
					<Text h2>{event.title}</Text>
					<Text
						css={{
							textAlign: "center",
						}}
						h4
					>
						{event.location}
					</Text>
					<Text
						css={{
							textAlign: "center",
						}}
						h4
					>
						{event.address}
					</Text>
					<Text
						css={{
							textAlign: "center",
						}}
						h4
					>
						{event.date}
					</Text>
				</Card.Header>
				<Card.Body
					css={{
						display: "flex",
						justifyContent: "center",
						width: "100%",
					}}
				>
					<Text
						css={{
							textAlign: "center",
							whiteSpace: "pre-line",
						}}
					>
						{event.description}
					</Text>
				</Card.Body>
			</Card>
		);
	});
	return (
		<Layout mobile={mobile}>
			<Image
				src="/content/ocean.jpg"
				style={{
					zIndex: -1,
				}}
				layout="fill"
				objectFit="cover"
			/>
			<div className={styles["container"]}>
				<h1>Upcoming Events</h1>
				{cards}
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	// ISR with webhook
	const client = new MongoClient(process.env.MONGO_URI);
	try {
		await client.connect();
		const db = client.db("my-green-earth");
		const collection = db.collection("events");
		const events = await collection.find({}).toArray();
		console.log(events);
		return {
			props: {
				events: events.map(event => {
					return {
						title: event.title,
						location: event.location,
						date: event.date,
						description: event.description,
						url: event.url ? event.url : null,
						address: event.address ? event.address : null,
					};
				}),
			},
		};
	} finally {
		client.close();
	}
}
