import type { NextFetchEvent, NextRequest } from "next/server";
import server from "../server";

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
	if (server == "http://localhost:3000") {
		// return null;
	}
	const allowed = ["/api/hash", "/api/compare", "/favicon.png", "/login"];
	if (req.cookies.auth || allowed.includes(req.page.name)) {
		const pw = req.cookies.auth;
		const correctPw =
			"$2a$12$Nh7EiRjbujfmVmrrAtRsKOnNf/bpEsl..Pwzlh4lSYvxSq7eudpZW";
		if (
			(await fetch(`${server}/api/compare`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ a: pw, b: correctPw }),
			})) ||
			allowed.includes(req.page.name)
		) {
			return null;
		} else {
			const response = Response.redirect(`${server}/login`, 307);
			return response;
		}
	} else {
		const response = Response.redirect(`${server}/login`, 307);
		return response;
	}
}
