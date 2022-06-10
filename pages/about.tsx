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
							fontSize: !mobile ? "2.0rem" : "1.5rem",
							marginBottom: mobile ? "6.5em" : "",
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
					height: mobile ? "100vh" : "50vh",
				}}
			>
				<div
					style={{
						marginLeft: "1.5em",
						width: "45vw",
						maxWidth: "50vw",
					}}
				>
					<h3>
						Our team is comprised of Cobb County residents and
						business owners who have a passion for the environment
						and recognize that sustainable solutions are already
						being addressed by existing organizations, and that we
						can can all collaborate to expedite results.
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
							height: mobile ? "50%" : "100%",
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
							height: mobile ? "50%" : "100%",
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
								Chair, Board of Directors
							</h5>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							width: "150px",
							height: mobile ? "50%" : "100%",
							marginRight: "1em",
							justifyContent: "center",
						}}
					>
						<div>
							<Image
								src="/content/Keith.jpg"
								width="150"
								height="187.5"
								objectFit="cover"
							/>
							<h3
								style={{
									marginBottom: "0",
								}}
							>
								Keith McNulty
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
