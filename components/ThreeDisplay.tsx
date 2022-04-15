import Image from "next/image";
import styles from "../styles/ThreeDisplay.module.css";
import { Button } from "@nextui-org/react";

export default function ThreeDisplay({ headers, text, images, mobile }) {
	return (
		<div>
			<div
				className={`${styles["three-partition"]} ${
					styles["wrapper"]
				}  ${mobile ? styles["mobile"] : ""}`}
			>
				<div
					className={`${styles.item} ${mobile ? styles.mobile : ""}`}
				>
					<div
						className={`${styles["picture"]} ${
							mobile ? styles["mobile"] : ""
						}`}
					>
						<Image
							src={images[0]}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div
						className={`${styles["item-content"]} ${
							mobile ? styles["mobile"] : ""
						}`}
					>
						<h3>{headers[0]}</h3>
						<h4>{text[0]}</h4>
						<Button>Learn More</Button>
					</div>
				</div>
				<div
					className={`${styles.item} ${mobile ? styles.mobile : ""}`}
				>
					<div
						className={`${styles["picture"]} ${
							mobile ? styles["mobile"] : ""
						}`}
					>
						<Image
							src={images[0]}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div
						className={`${styles["item-content"]} ${
							mobile ? styles["mobile"] : ""
						}`}
					>
						<h3>{headers[0]}</h3>
						<h4>{text[0]}</h4>
						<Button>Learn More</Button>
					</div>
				</div>
				<div
					className={`${styles.item} ${mobile ? styles.mobile : ""}`}
				>
					<div
						className={`${styles["picture"]} ${
							mobile ? styles["mobile"] : ""
						}`}
					>
						<Image
							src={images[0]}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div
						className={`${styles["item-content"]} ${
							mobile ? styles["mobile"] : ""
						}`}
					>
						<h3>{headers[0]}</h3>
						<h4>{text[0]}</h4>
						<Button>Learn More</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
