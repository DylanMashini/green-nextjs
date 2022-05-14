import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ mobile, title = "My Green Earth", children }) {
	return (
		<div className={`page-container${mobile ? " mobile" : ""}`}>
			<Head>
				<title>{title}</title>
			</Head>
			<div className={`wrapper${mobile ? " mobile" : ""}`}>
				<Navbar mobile={mobile} />
				{children}
			</div>
			<Footer mobile={mobile} />
		</div>
	);
}
