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
		if (window.innerWidth < 1079) {
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
				ImageSrc="/content/join.jpeg"
				mobile={mobile}
				className={`join-image${mobile ? " mobile" : ""}`}
				height={mobile ? "200vh" : "100vh"}
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
							<p style={pStyle}>
								Interested in making an impact for
								sustainability in Cobb County? Sign up here to receive emails from us.
							</p>
							<p style={pStyle}>
								If you are interested in volunteering with My Green Earth to impact sustainability throughout our communities, please indicate so on this form and we will be in contact.
							</p>
							<p style={pStyle}>
								Please email{" "}
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
