import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
export default function Hero({
	Header,
	Text,
	ImageSrc,
	ButtonText,
	ButtonLink,
}) {
	const router = useRouter();
	return (
		<div className="hero">
			<Image
				src={ImageSrc}
				layout="fill"
				objectFit="cover"
				style={{ zIndex: -1, width: "100vw" }}
			/>
			<div>
				<h1>{Header}</h1>
				<p>{Text}</p>
				<Button
					css={{
						margin: "0 auto",
						color: "black",
						backgroundColor: "#ffc916ff",
					}}
					onClick={() => {
						router.push(ButtonLink);
					}}
				>
					{ButtonText}
				</Button>
			</div>
			{/* <p className="caption">
					{" "}
					<i className="bx bxs-map"></i> Augusta, Georgia{" "}
				</p>{" "} */}
		</div>
	);
}
