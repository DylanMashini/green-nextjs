let server;
if (process.env.NODE_ENV === "production") {
	server = "https://www.mygreenearth.org";
} else if (process.env.NODE_ENV === "development") {
	server = "http://localhost:3000";
} else if (typeof window !== "undefined") {
	server = window.location.origin;
}

export default server;
