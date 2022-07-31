import Layout from "../components/Layout";
import { useState, useEffect } from "react";

export default function TOS() {
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
	return (
		<Layout mobile={mobile}>
			<div
				style={{
					width: "80vw",
					marginTop: "9vh",
					marginLeft: "2vw",
				}}
			>
				<h2>TERMS OF USE</h2>
				<p>
					Use of the My Green Earth website constitutes agreement to
					our terms of use. We encourage you to review the following
					information carefully.
				</p>
				<h3>Protecting your account</h3>
				<p>
					Some portions of this website permit username and passwords
					to be used. You are responsible for protecting your unique
					username and password and you agree to be responsible for
					all activities performed under your user account.
				</p>
				<h3>License and site access</h3>
				<p>
					My Green Earth grants you (the user) a limited license to
					access and make personal use of this website. This website
					or any portion of this website may not be reproduced,
					duplicated, copied, sold, visited, or otherwise exploited
					for any commercial purpose without express written
					permission of My Green Earth. Any unauthorized use of this
					websites voids the limited license granted by My Green
					Earth.
				</p>
				<h3>Content submitted by site users</h3>
				<p>
					If you do post content to this site or otherwise submit
					material (including, but not limited to, photographs and
					testimonials), you grant My Green Earth and its affiliates a
					nonexclusive, royalty-free, perpetual, irrevocable right to
					use, reproduce, modify, adapt, publish, translate, create
					derivative works from, distribute, and display such content
					in any media. By your submission you represent and warrant
					that you own or otherwise control all of the rights to the
					content that you post; that the content is accurate; that
					use of the content you supply does not violate this policy
					and will not cause injury to any person or entity; and that
					you will indemnify My Green Earth or its affiliates for all
					claims resulting from content you supply. My Green Earth
					reserves the right to remove any content at our sole
					discretion.
				</p>
				<h3>Limitation of liability</h3>
				<p>
					This site is provided by My Green Earth on an "as is" and
					"as available" basis. My Green Earth makes no warranties,
					either expressed or implied, as to the operation of the site
					or the content contained therein. You expressly agree that
					your use of the My Green Earth website is at your own risk.
					My Green Earth cannot warrant that this site, our servers,
					or email communications affiliated with the use of this
					website, are free from viruses. My Green Earth will not be
					responsible for any damages of any kind resulting from use
					of this website, including but not limited to direct,
					indirect, incidental, punitive, and consequential damages.
				</p>
				<h3>Applicable law</h3>
				<p>
					By visiting the My Green Earth website, you agree that the
					laws of the state of GEORGIA, without regard to principles
					of conflict of laws, will govern these conditions of use and
					any dispute of any sort that might arise between you and My
					Green Earth.
				</p>
				<h3>Refunds</h3>
				<p>
					All financial transactions submitted through the My Green
					Earth website are non-refundable.
				</p>
				<h3>Changes in policy</h3>
				<p>
					My Green Earth reserves the right to modify, alter, delete
					and update these policies at any time we see fit. Such
					alterations do not nullify our rights if infringements or
					breaches occurred under a previous version of these
					conditions.
				</p>
			</div>
		</Layout>
	);
}
