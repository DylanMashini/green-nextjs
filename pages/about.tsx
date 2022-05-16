import Layout from "../components/Layout";
import Hero from "../components/RightTextHero";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
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
		<Layout mobile={mobile}>
			<Hero mobile={mobile} ImageSrc="/about.jpg" height="90vh">
				<div
					style={{
						display: "flex",
						marginLeft: "0",
						flexDirection: "column",
						justifyContent: "center",
						height: "70vh",
					}}
				>
					<h2
						style={{
							maxWidth: "40vw",
							marginLeft: "3vw",
							fontSize: "2.0rem",
						}}
					>
						We are on a mission to make Cobb County the #1 Most
						Sustainable County in all of Georgia
					</h2>
				</div>
			</Hero>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
				}}
			>
				<div
					style={{
						height: "50vh",
						marginLeft: "1.5em",
						width: "50vw",
					}}
				>
					<h3>
						My Green earth is a grassroots nonprofit founded in 2022
						by the collective sustainability passions of Bethany
						Mashini and Jamey Moran
					</h3>
					<h2>Find Us on Social Media</h2>

					<a
						href="https://www.facebook.com/MyGreenEarthInc/"
						target="_blank"
						rel="noopener noreferer"
						style={{
							marginRight: "1.5em",
						}}
					>
						<Image src="/facebook.png" height={30} width={30} />
					</a>
					<a href="https://www.linkedin.com/company/mygreenearth/">
						<Image src="/linkedin.png" width="36" height="30" />
					</a>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "flex-end",
						width: "50vw",
						flexWrap: "wrap",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							width: "150px",
							height: "100%",
							marginRight: "1em",
							justifyContent: "center",
						}}
					>
						<div>
							<Image
								src="/content/Bethany.jpeg"
								width="150"
								height="187.5"
								objectFit="cover"
							/>
							<h3
								style={{
									marginBottom: "0",
								}}
							>
								Bethany Mashini
							</h3>
							<h5
								style={{
									marginTop: "0.5em",
								}}
							>
								Executive Director
							</h5>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							width: "150px",
							height: "100%",
							marginRight: "1em",
							justifyContent: "center",
						}}
					>
						<div>
							<Image
								src="/content/Jamey.jpeg"
								width="150"
								height="187.5"
								objectFit="cover"
							/>
							<h3
								style={{
									marginBottom: "0",
								}}
							>
								Jamey Moran
							</h3>
							<h5
								style={{
									marginTop: "0.5em",
								}}
							>
								Board of Directors
							</h5>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}