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
			<Hero ImageSrc="/content/dropsOnLeaf.jpeg" mobile={mobile}>
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
