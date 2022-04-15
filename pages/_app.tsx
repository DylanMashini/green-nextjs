import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link
					rel="shortcut icon"
					type="image/png"
					href="/favicon.png"
				/>
				<link
					href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
					rel="stylesheet"
				/>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
