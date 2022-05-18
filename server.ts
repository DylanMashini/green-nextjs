const isProd = process.env.NODE_ENV === "production";
export default isProd
	? "https://www.mge-dylanmashini.vercel.app"
	: "http://localhost:3000";
