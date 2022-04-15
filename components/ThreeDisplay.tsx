import Image from "next/image";
import styles from "../styles/ThreeDisplay.module.css";
import { Button } from "@nextui-org/react";

export default function ThreeDisplay({ headers, text, images }) {
	return (
		<div>
			<div
				className={`${styles["three-partition"]} ${styles["wrapper"]}`}
			>
				<div className={styles.item}>
					<div className={styles["picture"]}>
						<Image
							src={images[0]}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className={styles["item-content"]}>
						<h3>{headers[0]}</h3>
						<h4>{text[0]}</h4>
						<Button>Learn More</Button>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles["picture"]}>
						<Image
							src={images[1]}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className={styles["item-content"]}>
						<h3>{headers[1]}</h3>
						<h4>{text[1]}</h4>
						<Button css={{}}>Learn More</Button>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles["picture"]}>
						<Image
							src={images[2]}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className={styles["item-content"]}>
						<h3>{headers[2]}</h3>
						<h4>{text[2]}</h4>
						<Button css={{}}>Learn More</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
