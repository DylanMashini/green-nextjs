import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Hero({
	ImageSrc,
	mobile,
	children,
	className = "",
	height = "100vh",
}) {
	const router = useRouter();
	return (
		<div
			className="hero"
			style={{
				height: height,
			}}
		>
			<Image
				src={ImageSrc}
				layout="fill"
				objectFit="cover"
				style={{ zIndex: -1, width: "100vw" }}
				className={className}
				priority={true}
				alt="my green earth"
			/>

			<div
				style={{
					width: "100vw",
					overflow: "visible",
					marginTop: height == "100vh" ? "" : "20vh",
					height: height == "100vh" ? "" : height,
					zIndex: "998",
				}}
			>
				{children}
			</div>
			{/* <p className="caption">
					{" "}
					<i className="bx bxs-map"></i> Augusta, Georgia{" "}
				</p>{" "} */}
		</div>
	);
}
