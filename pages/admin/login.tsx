import styles from "../../styles/login.module.css";
import { Input, Button, Spacer } from "@nextui-org/react";
import server from "../../server";
import { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const signIn = async () => {
		const { session } = await (
			await fetch(`${server}/api/auth/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			})
		).json();
		if (!session) {
			setError("Invalid email or password");
		}
		//save session in cookies
	};
	return (
		<div className={styles["container"]}>
			<h1>Login</h1>
			<Input
				bordered
				labelPlaceholder="email"
				type="email"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<Spacer y={1.6} />
			<Input
				bordered
				labelPlaceholder="password"
				type="password"
				onChange={e => setPassword(e.target.value)}
				value={password}
			/>
			<Spacer y={1.6} />

			<Button onClick={e => signIn()}>Submit</Button>
		</div>
	);
}
