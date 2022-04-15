import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import { Grid, Button } from "@nextui-org/react";
import { useState, useEffect } from "react";
import ThreeDisplay from "../components/ThreeDisplay";
const Home: NextPage = () => {
	type ColorType =
		| "default"
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "error"
		| "gradient"
		| "white";
	const router = useRouter();
	const [mobile, setMobile] = useState(false);
	const [width, setWidth] = useState(764);
	const [height, setHeight] = useState(440);
	const isProd = process.env.NODE_ENV === "production";
	const getMobile = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
		if (window.innerWidth < 905) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	};
	if (!isProd) {
		useEffect(() => {
			getMobile();
			window.addEventListener("resize", getMobile);
		});
	} else {
		useEffect(() => {
			getMobile();
		});
	}
	return (
		<div>
			<Head>
				<title>Home</title>
				<link
					href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
					rel="stylesheet"
				/>
			</Head>
			<Navbar mobile={mobile} />
			<div className="hero">
				<Image
					src="/header1.jpeg"
					layout="fill"
					objectFit="cover"
					style={{ zIndex: -1 }}
				/>
				<div>
					<h1>A Sustainable Cobb</h1>
					<p>
						Each one of us can live comfortably with habits that
						help our planet . Join us in creating opportunities to
						make Cobb County the most sustainable county in Georgia,
						all through small habit changes!
					</p>
					<Button
						css={{
							margin: "0 auto",
							color: "black",
							backgroundColor: "#ffc916ff",
						}}
						onClick={() => {
							router.push("/#learn");
						}}
					>
						Learn More
					</Button>
				</div>
				{/* <p className="caption">
					{" "}
					<i className="bx bxs-map"></i> Augusta, Georgia{" "}
				</p>{" "} */}
			</div>
			<div className="content">
				<div>
					<div
						style={{
							width: "80vw",
						}}
					>
						<h2>
							“We don't need a handful of people doing zero waste
							perfectly. We need millions of people doing it
							imperfectly.”
						</h2>
						<h2>– Anne Marie Bonneau</h2>
					</div>
				</div>
			</div>
			<ThreeDisplay
				headers={["We are on a mission", "Our Programs", "Our Impact"]}
				text={[
					"to provide sustainable living choices to residents of Cobb County, Georgia.",
					"to provide sustainable living choices to residents of Cobb County, Georgia.",
					"Using the framework developed by Drawdown Georgia, we show how each person in Cobb can make an impact.",
				]}
				images={[
					"/greenForest.jpeg",
					"/greenForest.jpeg",
					"/greenForest.jpeg",
				]}
			/>
		</div>
	);
};

export default Home;
