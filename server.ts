const isProd = process.env.NODE_ENV === "production";
export default isProd
	? "https://www.mygreenearth.org"
	: "http://localhost:3000";
