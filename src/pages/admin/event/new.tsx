import { Input, Textarea, Card, Text, Button } from "@nextui-org/react";
import styles from "../../../styles/admin.module.css";
import { useState } from "react";
import server from "../../../../server";
import { useRouter } from "next/router";

export default function NewEvent() {
	const [title, setTitle] = useState("");
	const [location, setLocation] = useState("");
	const [address, setAddress] = useState("");
	const [date, setDate] = useState("");
	const [description, setDescription] = useState("");
	const [url, setUrl] = useState("");
	const router = useRouter();

	const Submit = () => {
		if (!(title && location && date && description)) {
			alert("All fields are required except for the URL");
			return;
		}
		fetch(`${server}/api/newEvent`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title,
				location,
				date,
				description,
				url,
				address,
			}),
		}).then(res => {
			if (res.status === 200) {
				alert(
					"Event added successfully, it may take up to five minutes to show up on the website"
				);
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
				// onKeyDown={e => {
				// 	if (e.key === "Enter") {
				// 		e.preventDefault();
				// 		setDescription(description + "\n");
				// 	}
				// }}
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
