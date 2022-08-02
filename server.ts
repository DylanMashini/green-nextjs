let server;

if (process.env.NODE_ENV === "development") {
	server = "http://localhost:3000";
} else if (process.env.IS_PROD === "TRUE") {
	server = `https://www.mygreenearth.org`
} else if (process.env.VERCEL_URL) {
	server = `https://${process.env.VERCEL_URL}`;
} else if (typeof window !== "undefined") {
	server = `https://${window.location.host}`;
}

export default server;
