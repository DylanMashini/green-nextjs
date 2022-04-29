import Navbar from "../../components/Navbar";
import Hero from "../../components/RightTextHero";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import styles from "../../styles/programs.module.css";

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
		<div>
			<Navbar mobile={mobile} />
			<Hero
				ImageSrc="/content/dropsOnLeaf.jpeg"
				mobile={mobile}
				blurDataURL="data:image/png;base64,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"
			>
				<div
					className={`${styles["hero-text"]} Raleway ${
						mobile ? styles.mobile : ""
					}`}
					style={{
						display: "flex",
						width: "60%",
						marginLeft: "40%",
						flexDirection: "column",
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
							style={{
								marginTop: "2em",
								width: "8px",
								height: "14vh",
								backgroundColor: "#1A5B92",
								marginRight: "10px",
								borderRadius: "1px",
							}}
						/>
						{!mobile ? (
							<h2>
								Our Electricity, Recycling, and Food &
								Agriculture Programs combined have the potential
								to{"\n"}
								<span
									style={{
										fontSize: "1.8em",
									}}
								>
									reduce over 550,000 metric tons of CO2
									equivalent
								</span>
								{"\n"}
								by 2030. That is equal to removing 118,508
								gasoline-powered cars from the road for an
								entire year.​
							</h2>
						) : (
							<h2
								style={{
									fontSize: "1em",
								}}
							>
								Our Electricity, Recycling, and Food &
								Agriculture Programs combined have the potential
								to{" "}
								<span
									style={{
										fontSize: "1.3em",
									}}
								>
									reduce over 550,000 metric tons of CO2
									equivalent
								</span>{" "}
								by 2030. That is equal to removing 118,508
								gasoline-powered cars from the road for an
								entire year.​
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
							router.push("/programs/#");
						}}
					>
						Help us Meet This Goal
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
							Electricity
						</h1>
						<h3
							style={{
								color: "white",
								fontSize: "1rem",
							}}
						>
							Our goal is to reduce over 100,000 metric tons of
							CO2 equivalent by 2030 through empowering Cobb
							County to install smart thermostats, rooftop solar,
							and shifting energy use to off-peak times.
						</h3>
					</div>
					<div className={styles["item"]}>
						<h1
							style={{
								color: "white",
							}}
						>
							Recycling
						</h1>
						<h3
							style={{
								color: "white",
								fontSize: "1rem",
							}}
						>
							Our goal is to reduce over 300,000 metric tons CO2
							equivalent by 2030 through increased access to
							recycling infrastructure in Cobb County businesses,
							sporting and entertainment venues.{" "}
						</h3>
					</div>
					<div className={styles["item"]}>
						<h1
							style={{
								color: "white",
							}}
						>
							Food & Agriculture
						</h1>
						<h3
							style={{
								color: "white",
								fontSize: "1rem",
							}}
						>
							Our goal is to reduce over 150,000 metric tons CO2
							equivalent by 2030 through programs enabling
							composting, food waste reduction, and access to
							lower-carbon emitting diets.
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
