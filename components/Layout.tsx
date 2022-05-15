import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Layout({
	mobile,
	title = "My Green Earth",
	children,
	prefetch,
}: {
	mobile: boolean;
	title?: string;
	children: any;
	prefetch?: string[];
}) {
	const router = useRouter();
	useEffect(() => {
		if (prefetch) {
			prefetch.forEach(path => {
				router.prefetch(path);
			});
		}
	});
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
