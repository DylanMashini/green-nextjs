import styles from "../../styles/login.module.css";
import { Input, Button, Spacer, Text } from "@nextui-org/react";
import server from "../../../server";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [cookie, setCookie] = useCookies(["user"]);
	const [auth, setAuth] = useState(false);
	const router = useRouter();

	if (!auth) {
		setCookie("user", null, { path: "/", maxAge: -1, sameSite: true });
	}
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
			return;
		}
		//save session in cookies
		setError("");
		setAuth(true);
		await setCookie(
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
		setTimeout(() => router.push("/admin"), 100);
	};
	return (
		<div className={styles["container"]}>
			<h1>Login</h1>
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

			<Button onClick={e => signIn()}>Submit</Button>
			{error && <Text color="error">{error}</Text>}
			<Link
				style={{
					marginTop: "2.5em",
					textDecoration: "underline",
				}}
				href="/admin/register"
			>
				<a>Click Here to Register</a>
			</Link>
		</div>
	);
}
