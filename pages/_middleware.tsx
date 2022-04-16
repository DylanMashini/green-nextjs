import type { NextFetchEvent, NextRequest } from "next/server";
import server from "../server";

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
	if (req.url.includes("localhost")) {
		// return null;
	}
	const allowed = [
		"/api/hash",
		"/api/compare",
		"/favicon.png",
		"/login",
		"/api/hash/",
		"/api/compare/",
	];
	if (req.cookies.auth || allowed.includes(req.nextUrl.pathname)) {
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
			allowed.includes(req.nextUrl.pathname)
		) {
			return null;
		} else {
			const response = Response.redirect(`${server}/login`, 307);
			return response;
		}
	} else {
		console.log(req.page);
		const response = Response.redirect(`${server}/login`, 307);
		return response;
	}
}
