import bcrypt from "bcrypt";
import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import server from "../server";
import { Router, useRouter } from "next/router";
export default function Login() {
	const [password, setPassword] = useState("");
	const router = useRouter();
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				width: "100vw",
			}}
		>
			<Input
				label="passcode"
				type="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<Button
				css={{
					marginTop: "1rem",
				}}
				onClick={() => {
					fetch(`${server}/api/hash`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ pass: password }),
					})
						.then(res => res.json())
						.then(res => {
							const hash = res.hash;
							console.log(hash);
							document.cookie = `auth=${hash}; path=/;`;
							router.push("/");
						});
				}}
			>
				Login
			</Button>
		</div>
	);
}
