import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Hero from "../components/RightTextHero";
import { Button } from "@nextui-org/react";
import styles from "../styles/approach.module.css";

export default function Approach() {
	const router = useRouter();
	const [mobile, setMobile] = useState(false);
	const [width, setWidth] = useState(764);
	const [height, setHeight] = useState(440);
	const [divHeight, setDivHeight] = useState("130vh");
	const isProd = process.env.NODE_ENV === "production";
	const getMobile = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
		if (window.innerWidth < 905) {
			setMobile(true);
			setDivHeight("250vh");
		} else {
			setMobile(false);
			setDivHeight("130vh");
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
			<Hero
				ImageSrc="/content/roots.jpeg"
				mobile={mobile}
				height={divHeight}
			>
				<div
					style={{
						display: "flex",
						marginLeft: "10%",
						flexDirection: "column",
						height: divHeight,
						top: "10%",
						position: "absolute",
					}}
					className="Raleway"
				>
					<h2
						style={{
							maxWidth: "50vw",
							marginBottom: "2rem",
							marginLeft: "20vw",
							fontSize: "2em",
							color: "#fff",
						}}
					>
						In order to achieve our mission, we have defined{" "}
						<span
							style={{
								fontWeight: "bold",
							}}
						>
							5 Pillars for a Sustainable Community
						</span>{" "}
						and 4 Strategies to make it happen.
					</h2>
					<Button
						css={{
							backgroundColor: "#ffc916ff",
							color: "black",
							width: mobile ? "60vw" : "20vw",
							marginLeft: "20vw !important",
						}}
					>
						Learn About How You Can Help
					</Button>
					<div
						className={`${styles["content"]} ${
							mobile ? styles["mobile"] : ""
						}`}
					>
						<div>
							<p
								style={{
									marginLeft: "1em",
									fontSize: "16px",
								}}
							>
								Our 5 pillars for a sustainable community are:
							</p>
							<div className={styles["content-item"]}>
								<h2>EMPOWERED PEOPLE</h2>
								<p>
									People feel empowered and energized in
									making sustainable choices.
								</p>
								<h2>AVAILABLE INFRASTRUCTURE</h2>
								<p>
									Sustainable living choices are possible
									through the availability of infrastructure
									and services.
								</p>
								<h2>ENVIRONMENTAL VALUES</h2>
								<p>
									Environmental impact is prioritized in
									decision-making by companies, governments
									and individuals.
								</p>
								<h2>ETHOS OF SUSTAINABILITY</h2>
								<p>
									Sustainable habits are the societal norm.
									Actions that harm the planet are frowned
									upon, inconvenient, unavailable, or costly.
								</p>
								<h2>ENVIRONMENTAL JUSTICE</h2>
								<p>
									Meaningful involvement and fair treatment is
									provided to everyone in our communities.
								</p>
							</div>
						</div>
						<div>
							<p
								style={{
									marginLeft: "1em",
									fontSize: "16px",
								}}
							>
								Here's how we will accomplish our mission:
							</p>
							<div className={styles["content-item"]}>
								<h2>PARTNERSHIPS</h2>
								<p>
									Partner with local mission-aligned companies
									to establish and communicate sustainable
									living opportunities.
								</p>
								<h2>EVENT IMMERSION</h2>
								<p>
									Leverage local entertainment, sporting and
									cultural venues to support sustainable
									habits.
								</p>
								<h2>AWARENESS</h2>
								<p>
									Empower the community with the knowledge of
									how to make an impact and the magnitude of
									individual action.
								</p>
								<h2>COMMUNITY ENGAGEMENT</h2>
								<p>
									Engage with community to generate excitement
									toward the mission, establish inclusive
									organizational culture, and provide
									opportunities to make collective impact.
								</p>
							</div>
						</div>
					</div>
					{/* <Button
						className="rightButton"
						css={{
							margin: "0 auto",
							color: "black",
							backgroundColor: "#ffc916ff",
						}}
						onClick={() => {
							router.push("/programs/#");
						}}
					>
						Help us Meet This Goal
					</Button> */}
				</div>
			</Hero>
		</Layout>
	);
}
