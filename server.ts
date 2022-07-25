let server;
if (process.env.NODE_ENV === "production") {
	server = "https://www.mygreenearth.org";
} else if (process.env.NODE_ENV === "development") {
	server = "http://localhost:3000";
} else {
	server = `https://${process.env.VERCEL_URL}`;
}

export default server;
