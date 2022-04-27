import Navbar from "../../components/Navbar";
import Hero from "../../components/RightTextHero";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

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
				ButtonLink=""
				ButtonText=""
				mobile={mobile}
			>
				<div
					style={{
						display: "flex",
						width: "60%",
						marginLeft: "40%",
						flexDirection: "column",
					}}
					className="Raleway"
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
						<h2>
							Our Electricity, Recycling, and Food & Agriculture
							Programs combined have the potential to{"\n"}
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
							gasoline-powered cars from the road for an entire
							year.​
						</h2>
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
		</div>
	);
}
