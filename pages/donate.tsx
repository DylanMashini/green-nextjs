import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Donate() {
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
		<Layout mobile={mobile}>
			<script
				src="https://donorbox.org/widget.js"
				// @ts-ignore
				paypalExpress="false"
			></script>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "flex-start",
					height: "200vh",
				}}
				id="flex-container"
			>
				<Image
					src="/content/DropsOnLeafTall.jpeg"
					layout="fill"
					objectFit="cover"
				/>
				<iframe
					src="https://donorbox.org/embed/online-donation-33"
					name="donorbox"
					allowpaymentrequest="allowpaymentrequest"
					// @ts-ignore
					seamless="seamless"
					frameborder="0"
					scrolling="no"
					height="900px"
					width="100%"
					style={{
						maxWidth: "500px",
						minWidth: "250px",
						maxHeight: "none !important",
						marginTop: "10vh",
						zIndex: "998",
					}}
				></iframe>
			</div>
		</Layout>
	);
}
