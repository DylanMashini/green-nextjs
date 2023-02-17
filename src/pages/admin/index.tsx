import styles from "../../styles/admin.module.css";
import { Card, Text, Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import server from "../../../server";

export default function AdminHome({ events }) {
	console.log("HERE");
	const router = useRouter();
	const deleteEvent = id => {
		if (!confirm("Are you sure you want to delete this event?")) {
			return;
		}
		fetch(`${server}/api/deleteEvent`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id,
			}),
		}).then(() => window.location.reload());
	};

	const cards = events.map(event => {
		return (
			<Card
				key={event.id}
				variant="bordered"
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
					}}
				>
					<Text h2>{event.title}</Text>
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
				<Card.Divider />
				<Card.Footer>
					<div className={styles["card-footer"]}>
						<Button
							css={{
								marginRight: "1.5rem",
							}}
							color="error"
							onPress={() => deleteEvent(event.id)}
						>
							Delete
						</Button>
						<Button
							onPress={() =>
								router.push(`/admin/event/${event.id}`)
							}
						>
							Edit
						</Button>
					</div>
				</Card.Footer>
			</Card>
		);
	});
	return (
		<div className={styles["container"]}>
			<div className={styles["events-container"]}>
				<h1>Admin Home</h1>

				<Card
					variant="bordered"
					css={{
						mw: "70%",
						marginBottom: "2rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					isHoverable
					isPressable
					onPress={() => router.push("/admin/event/new")}
				>
					<i
						style={{
							fontSize: "4rem",
							marginTop: "1rem",
							marginBottom: "1rem",
							color: "#0072F5",
						}}
						className="bx bxs-calendar-plus"
					></i>
					<h3>Add Event</h3>
				</Card>
				{cards}
			</div>
		</div>
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
		console.log(events[0]);
		return {
			props: {
				events: events.map(event => {
					return {
						title: event.title,
						location: event.location,
						date: event.date,
						description: event.description,
						url: event.url ? event.url : null,
						id: event.id,
					};
				}),
			},
		};
	} finally {
		client.close();
	}
}
