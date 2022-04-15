import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import ThreeDisplay from "../components/ThreeDisplay";
import Hero from "../components/Hero";
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
	const pagesToPrefetch = ["/solarize"];
	useEffect(() => {
		pagesToPrefetch.forEach(page => {
			router.prefetch(page);
		});
	});
	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<Navbar mobile={mobile} />
			<Hero
				ImageSrc={"/header1.jpeg"}
				Header="A Sustainable Cobb"
				Text="Each one of us can live comfortably with habits that help
					our planet . Join us in creating opportunities to make Cobb
					County the most sustainable county in Georgia, all through
					small habit changes!"
				ButtonText="Learn More"
				ButtonLink="#learn"
			/>
			<div className={`content${mobile ? " mobile" : ""}`}>
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
					"/content/picture1.png",
					"/content/solar1.jpeg",
					"/content/river.jpeg",
				]}
				buttonLinks={["/#", "/solarize", "/#"]}
				mobile={mobile}
			/>
		</div>
	);
};

export default Home;
