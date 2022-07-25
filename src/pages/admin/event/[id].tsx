import { MongoClient } from "mongodb";
import { useState } from "react";
import server from "../../../../server";
import styles from "../../../styles/admin.module.css";
import { Input, Textarea, Card, Text, Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Event({ event }) {
	const router = useRouter();
	const [title, setTitle] = useState(event.title);
	const [location, setLocation] = useState(event.location);
	const [address, setAddress] = useState(event.address);
	const [date, setDate] = useState(event.date);
	const [description, setDescription] = useState(event.description);
	const [url, setUrl] = useState(event.url);

	const Submit = () => {
		fetch(`${server}/api/updateEvent`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: event.id,
				title,
				location,
				address,
				date,
				description,
				url,
			}),
		}).then(res => {
			if (res.status == 200) {
				alert("Event updated successfully");
				router.push("/admin");
			}
		});
	};
	return (
		<div className={`${styles["form-container"]} ${styles["container"]}`}>
			<h1>Create a New Event</h1>
			<Input
				labelPlaceholder="Title"
				required
				css={{
					marginTop: "2.5rem",
				}}
				size="lg"
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<Input
				labelPlaceholder="Location"
				css={{
					marginTop: "2.5rem",
				}}
				size="lg"
				value={location}
				onChange={e => setLocation(e.target.value)}
			/>
			<Input
				labelPlaceholder="Address"
				css={{
					marginTop: "2.5rem",
				}}
				size="lg"
				value={address}
				onChange={e => setAddress(e.target.value)}
			/>
			<Input
				labelPlaceholder="Date"
				css={{
					marginTop: "2.5rem",
				}}
				size="lg"
				value={date}
				onChange={e => setDate(e.target.value)}
			/>
			<Input
				labelPlaceholder="url"
				css={{
					marginTop: "2.5rem",
				}}
				size="lg"
				value={url}
				onChange={e => setUrl(e.target.value)}
			/>
			<Textarea
				labelPlaceholder="Description"
				css={{
					marginTop: "2.5rem",
				}}
				size="lg"
				value={description}
				onChange={e => setDescription(e.target.value)}
			/>
			<Button
				css={{
					marginTop: "2.5rem",
				}}
				onPress={Submit}
			>
				Submit
			</Button>
			{title && description ? (
				<>
					<h3>Preview: </h3>
					<Card
						isHoverable
						isPressable={url ? true : false}
						key="id"
						variant="bordered"
						onPress={url ? () => window.open(url, "_blank") : null}
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
							<Text h2>{title}</Text>
							<Text
								css={{
									textAlign: "center",
								}}
								h4
							>
								{location}
							</Text>
							<Text
								css={{
									textAlign: "center",
								}}
								h4
							>
								{date}
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
								}}
							>
								{description}
							</Text>
						</Card.Body>
					</Card>
				</>
			) : null}
		</div>
	);
}

export async function getStaticProps({ params }) {
	const id = params.id;
	const client = new MongoClient(process.env.MONGO_URI);
	try {
		await client.connect();
		const db = client.db("my-green-earth");
		const collection = db.collection("events");
		const event = await collection.findOne({ id: id });
		return {
			props: {
				event: {
					title: event.title,
					location: event.location,
					date: event.date,
					description: event.description,
					url: event.url ? event.url : null,
					address: event.address ? event.address : null,
					id: id,
				},
			},
		};
	} finally {
		client.close();
	}
}

export async function getStaticPaths() {
	const client = new MongoClient(process.env.MONGO_URI);
	try {
		await client.connect();
		const db = client.db("my-green-earth");
		const collection = db.collection("events");
		const events = await collection.find({}).toArray();
		const paths = events.map(event => {
			return { params: { id: event.id } };
		});
		return { paths, fallback: false };
	} finally {
		client.close();
	}
}
