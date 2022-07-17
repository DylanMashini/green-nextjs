import styles from "../../styles/login.module.css";
import { Input, Button, Spacer } from "@nextui-org/react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import server from "../../../server";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [cookie, setCookie] = useCookies(["user"]);

	const register = async () => {
		const { session } = await (
			await fetch(`${server}/api/auth/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					password: password,
				}),
			})
		).json();
		if (!session) {
			setError("Invalid email or password");
			return;
		}
		//save session in cookies
		setCookie(
			"user",
			JSON.stringify({
				email: email,
				session: session,
			}),
			{
				path: "/",
				maxAge: 86400,
				sameSite: true,
			}
		);
	};
	return (
		<div className={styles["container"]}>
			<h1>Register</h1>
			<Input
				label="email"
				value={email}
				size="md"
				width="20em"
				onChange={e => setEmail(e.target.value)}
				css={{
					height: "4em",
				}}
			/>

			<Input
				type="password"
				label="password"
				value={password}
				size="md"
				width="20em"
				onChange={e => setPassword(e.target.value)}
				css={{
					height: "4em",
				}}
			/>
			<Spacer y={1.6} />

			<Button onClick={e => register()}>Submit</Button>
		</div>
	);
}
