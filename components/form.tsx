import { Input, Textarea, Button } from "@nextui-org/react";
import { useState } from "react";
import styles from "../styles/form.module.css";
import server from "../server";

export default function Form({
	source = undefined,
	header = "Contact Us!",
	text = null,
	mobile,
}) {
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [message, setMessage] = useState("");
	const submitForm = () => {
		fetch(`${server}/api/contact`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				message: message,
				source: source,
			}),
		})
			.then(res => res.json())
			.then(res => {
				console.log(res);
			});
	};
	return (
		<div
			className={`${styles["wrapper"]} ${mobile ? styles["mobile"] : ""}`}
		>
			<h1
				style={{
					color: "white",
					textAlign: "left",
					width: "100%",
					marginLeft: "20vw",
				}}
			>
				{header}
			</h1>
			{text}
			<div className={styles["form"]}>
				<Input
					className={styles["item"]}
					clearable
					placeholder="Email*"
					value={email}
					onChange={e => setEmail(e.target.value)}
					fullWidth
				/>
				<Input
					className={styles["item"]}
					clearable
					placeholder="First Name*"
					value={firstName}
					onChange={e => setFirstName(e.target.value)}
					fullWidth
				/>
				<Input
					className={styles["item"]}
					clearable
					placeholder="Last Name*"
					value={lastName}
					onChange={e => setLastName(e.target.value)}
					fullWidth
				/>
				<Textarea
					placeholder="Specific Interests"
					css={{
						fontFamily: "var(--nextui-fonts-sans)",
					}}
					fullWidth
					value={message}
					onChange={e => {
						setMessage(e.target.value);
					}}
				/>
				<Button
					css={{
						marginLeft: "0 !important",
						marginTop: "1em",
						backgroundColor: "#ffc916ff",
						color: "#000000",
					}}
					onClick={() => {
						submitForm();
					}}
				>
					Submit
				</Button>
			</div>
		</div>
	);
}
