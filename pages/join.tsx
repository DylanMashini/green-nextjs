import Hero from "../components/RightTextHero";
import Navbar from "../components/Navbar";
import Form from "../components/form";
import { useState, useEffect } from "react";

export default function Join() {
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
				ImageSrc="/content/join.jpeg"
				mobile={mobile}
				className={`join-image${mobile ? " mobile" : ""}`}
				height="200vh"
			>
				<Form
					mobile={mobile}
					header="Join Us"
					text={
						<div
							style={{
								maxWidth: "90vw",
							}}
						>
							<p
								style={{
									width: "90vw",
									marginLeft: "0",
								}}
							>
								Interested in making an impact for
								sustainability in Cobb County? We would love to
								have you join us! We are looking for individual
								members, civic organizations and schools to
								volunteer with us. Whatever your interests and
								skills are, there is a place for you!
							</p>
							<p
								style={{
									width: "90vw",
									marginLeft: "0",
								}}
							>
								We are also seeking ambassadors to help with
								efforts in the following cities: Acworth,
								Austell, Kennesaw, Marietta, Powder Springs and
								Smyrna.
							</p>
							<p
								style={{
									width: "90vw",
									marginLeft: "0",
								}}
							>
								Complete the form below or email{" "}
								<a href="mailto:info@mygreenearth.org">
									info@mygreenearth.org
								</a>{" "}
								with any questions.
							</p>
						</div>
					}
				/>
			</Hero>
		</div>
	);
}
