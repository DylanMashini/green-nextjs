import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero";
import Image from "next/image";
import styles from "../../styles/solarize.module.css";
import Link from "next/link";

export default function Solarize() {
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
			<Navbar mobile={mobile} />
			<Hero
				Header="Solarize Cobb"
				Text="My Green Earth has partnered with Solar Crowdsource to make going solar more affordable for Cobb County homes and businesses."
				ButtonText={"Learn More"}
				ImageSrc="/content/solar1.jpeg"
				ButtonLink={"/solarize"}
			/>
			<div className="content">
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-evenly",
						position: "absolute",
						left: "0",
						right: "0",
					}}
				>
					<Link href="#FAQ">
						<div className={styles["content-item"]}>
							<>
								<Image
									src="/content/solarize/content1.png"
									width="100"
									height="100"
								/>
								<h4>Questions?</h4>
							</>
						</div>
					</Link>
					<Link href="#impact">
						<div className={styles["content-item"]}>
							<Image
								src="/content/solarize/content2.png"
								width="100"
								height="100"
							/>
							<h4>Potential Impact</h4>
						</div>
					</Link>
					<Link href="#pricing">
						<div className={styles["content-item"]}>
							<Image
								src="/content/solarize/content3.png"
								width="100"
								height="100"
							/>
							<h4>Pricing</h4>
						</div>
					</Link>
					<Link href="#panels">
						<div className={styles["content-item"]}>
							<Image
								src="/content/solarize/content4.png"
								width="100"
								height="100"
							/>
							<h4>Panels and Materials</h4>
						</div>
					</Link>
					<Link href="#other">
						<div className={styles["content-item"]}>
							<Image
								src="/content/solarize/content5.png"
								width="100"
								height="100"
							/>
							<h4>Other Solar Programs</h4>
						</div>
					</Link>
				</div>
			</div>
			<div className={styles["section-1"]}>
				<h1
					style={{
						textAlign: "center",
					}}
				>
					How Crowdsourcing Works
				</h1>
				<p
					style={{
						marginLeft: "4vw",
						marginRight: "4vw",
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
			</div>
			<div>
				<h1
					style={{
						textAlign: "center",
					}}
				>
					Pricing
				</h1>
				<p
					style={{
						marginLeft: "4vw",
						marginRight: "4vw",
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
			</div>
			<div>
				<h1
					style={{
						textAlign: "center",
					}}
					id="impact"
				>
					Impacts
				</h1>
				<p
					style={{
						marginLeft: "4vw",
						marginRight: "4vw",
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	);
}
