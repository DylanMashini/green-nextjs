import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { MongoClient } from "mongodb";
import server from "../../server";

export async function middleware(request: NextRequest) {
	if (
		request.page.name == "/admin/login" ||
		request.page.name == "/admin/register"
	) {
		return null;
	}
	if (request.cookies.user) {
		const cookie = JSON.parse(request.cookies.user);
		if (!cookie.session || !cookie.email) {
			return NextResponse.redirect(`${server}/admin/login`);
		}
		const res = await (
			await fetch(`${server}/api/auth/verifySession`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: cookie.email,
					session: cookie.session,
				}),
			})
		).json();
		if (res.status === "OK") {
			// user is valid
			return null;
		} else {
			return NextResponse.redirect(`${server}/admin/login`);
		}
	} else {
		return NextResponse.redirect(`${server}/admin/login`);
	}
}
