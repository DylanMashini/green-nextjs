import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import server from "../server";

export async function middleware(request: NextRequest) {
	if (request.nextUrl.pathname.startsWith("/admin")) {
		if (
			request.nextUrl.pathname == "/admin/login" ||
			request.nextUrl.pathname == "/admin/register"
		) {
			return null;
		}
		if (request.cookies.get("user")) {
			const cookie = JSON.parse(request.cookies.get("user"));
			if (!cookie.session || !cookie.email) {
				console.log("Invalid cookie");
				return NextResponse.redirect(`${server}/admin/login`);
			}
			try {
				console.log(server);
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
					console.log("User invalid");
					return NextResponse.redirect(`${server}/admin/login`);
				}
			} catch (e) {
				console.log(e);
				return NextResponse.redirect(`${server}/admin/login`);
			}
		} else {
			return NextResponse.redirect(`${server}/admin/login`);
		}
	}
}
