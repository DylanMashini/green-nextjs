import Hero from "../components/RightTextHero";
import Layout from "../components/Layout";
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
	const pStyle = mobile
		? {
				width: "90vw",
				marginLeft: "0",
		  }
		: {};
	return (
		<Layout mobile={mobile}>
			<Hero
				ImageSrc="/content/partner.jpg"
				mobile={mobile}
				className={`join-image${mobile ? " mobile" : ""}`}
				height={mobile ? "200vh" : "100vh"}
			>
				<Form
					mobile={mobile}
					header="Partner With Us"
					text={
						<div
							style={{
								maxWidth: "90vw",
							}}
						>
							<p style={pStyle}>
								If you are a company or post-secondary institution looking for ways to make an impact in our community and for the planet, complete the form below or email{" "}
								<a href="mailto:info@mygreenearth.org">
									info@mygreenearth.org
								</a>{" "}
								with any questions.
							</p>
						</div>
					}
				/>
			</Hero>
		</Layout>
	);
}
