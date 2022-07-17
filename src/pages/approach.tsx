import Navbar from "../components/Navbar";
import Hero from "../components/RightTextHero";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import styles from "../styles/approach.module.css";
import Layout from "../components/Layout";

export default function Programs() {
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
		<Layout mobile={mobile} prefetch={["/join"]}>
			<Hero
				ImageSrc="/content/grass.jpeg"
				mobile={mobile}
				height="calc(100vh + 20em)"
			>
				<div
					className={`${styles["hero-text"]} Raleway ${
						mobile ? styles["mobile"] : ""
					}`}
					style={{
						display: "flex",
						width: "60%",
						marginLeft: "40%",
						flexDirection: "column",
						marginTop: "20vh",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							width: "50vw",
						}}
					>
						<div
							className={"blue-line"}
							// style={{
							//   marginTop: "2em",
							//   width: "8px",
							//   height: "14vh",
							//   backgroundColor: "#1A5B92",
							//   marginRight: "10px",
							//   borderRadius: "1px",
							// }}
						/>
						{!mobile ? (
							<h2>
								What does it mean to be a Sustainable Community?
								In order to achieve our mission of providing
								sustainable living choices for our community, we
								have defined our vision for a Sustainable
								Community. Our approach includes four strategies
								to achieving this mission: Partnerships, Event
								Immersion, Awareness, and Community Engagement.
							</h2>
						) : (
							<h2
								style={{
									fontSize: "1em",
								}}
							>
								What does it mean to be a Sustainable Community?
								In order to achieve our mission of providing
								sustainable living choices for our community, we
								have defined our vision for a Sustainable
								Community. Our approach includes four strategies
								to achieving this mission: Partnerships, Event
								Immersion, Awareness, and Community Engagement.
							</h2>
						)}
					</div>
					<Button
						className="rightButton"
						css={{
							margin: "0 auto",
							color: "black",
							backgroundColor: "#ffc916ff",
						}}
						onClick={() => {
							router.push("/join/");
						}}
					>
						Learn About How You Can Help
					</Button>
				</div>
			</Hero>
			<div
				className={`${styles["content"]} ${
					mobile ? styles["mobile"] : ""
				}`}
			>
				<div
					className={`${styles["three-col"]} ${
						mobile ? styles["mobile"] : ""
					}`}
				>
					<div className={styles["item"]}>
						<h1
							style={{
								color: "white",
							}}
						>
							We envision a sustainible community that has:
						</h1>
						<p
							style={{
								color: "white",
							}}
						>
							Empowered People: People feel empowered and
							energized in making sustainable choices.
						</p>
						<p
							style={{
								color: "white",
							}}
						>
							Available Infrastructure: Sustainable living choices
							are possible through the availability of
							infrastructure and services.
						</p>
						<p
							style={{
								color: "white",
							}}
						>
							Environmental Values: Environmental impact is
							prioritized in decision-making by companies,
							governments and individuals.
						</p>
						<p style={{ color: "white" }}>
							Ethos of Sustainability: Sustainable habits are the
							societal norm. Actions that harm the planet are
							frowned upon, inconvenient, unavailable, or costly.
						</p>
						<p style={{ color: "white" }}>
							Environmental Equity: Sustainable solutions are
							accessible to everyone in our community.
						</p>
					</div>
					<div className={styles["item"]}>
						<h1>Here's how we will accomplish our mission:</h1>
						<p
							style={{
								color: "white",
							}}
						>
							Partnerships: Partner with local mission-aligned
							companies to establish and communicate sustainable
							living opportunities.
						</p>
						<p>
							Event Immersion: Leverage local entertainment,
							sporting and cultural venues to support sustainable
							habits.
						</p>
						<p>
							Awareness: Empower the community with the knowledge
							of how to make an impact and the magnitude of
							individual action.
						</p>
						<p>
							Community Engagement: Engage with community to
							generate excitement toward the mission, establish
							inclusive organizational culture, and provide
							opportunities to make collective impact.
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}