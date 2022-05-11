import styles from "../styles/footer.module.css";
import Image from "next/image";

export default function Footer() {
	return (
		<div className="footer">
			<div className={styles["content"]}>
				<div className={styles["line"]} />
				<div className={styles["flex"]}>
					<div className={styles["half"]}>
						<div className={styles["row"]}>
							<div
								style={{
									marginLeft: "2.5rem",
								}}
							>
								<Image
									src="/logo2.png"
									width="38"
									height={"31"}
								/>
							</div>
							<p>
								Copyright &Copy 2022 My Green Earth, Inc. All
								Rights Reserved
							</p>
						</div>
						<div className={styles["row"]}>
							<a
								style={{
									marginLeft: "calc(2.5rem + 38px)",
								}}
								className="link"
								href="https://www.dylanmashini.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Website made by Dylan Mashini
							</a>
						</div>
					</div>
					<div className={styles["half"]}>
						<div className={styles["row-right"]}>
							<a
								href="https://www.facebook.com/MyGreenEarthInc/"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									marginRight: "1.5rem",
								}}
							>
								<Image
									src="/facebook.png"
									width="212"
									height="40"
								/>
							</a>
							<a
								href="https://www.linkedin.com/company/mygreenearth"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src="/linkedin.png"
									width="47"
									height="40"
								/>
							</a>
							<p
								style={{
									marginRight: "2.5rem",
								}}
							>
								My Green Earth, Inc. is a registered 501(c)3
							</p>
						</div>
						<div className={styles["row-right"]}>
							<a
								style={{
									marginRight: "2.5rem",
								}}
								href="terms-of-use"
							>
								Terms of Use
							</a>
							<a
								style={{
									marginRight: "2.5rem",
								}}
								href="/privacy-policy/"
							>
								Privacy Policy
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
