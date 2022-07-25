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
		// @ts-ignore
		if (request.cookies.user) {
			// @ts-ignore
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
}
