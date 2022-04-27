import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Hero from "../components/RightTextHero";
import { Button } from "@nextui-org/react";

export default function Approach() {
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
			<Hero ImageSrc="/content/mountian.jpg" mobile={mobile}>
				<div
					style={{
						display: "flex",
						width: "60%",
						marginLeft: "10%",
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
								width: "80vw",
								backgroundColor: "#1A5B92",
								marginRight: "2em",
							}}
						>
							Test
						</div>
						<div
							style={{
								width: "80vw",
								backgroundColor: "#1A5B92",
							}}
						>
							Test
						</div>
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
