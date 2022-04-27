import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Hero({ ImageSrc, mobile, children }) {
	const router = useRouter();
	return (
		<div className="hero">
			<Image
				src={ImageSrc}
				layout="fill"
				objectFit="cover"
				style={{ zIndex: -1, width: "100vw" }}
			/>
			<div
				style={{
					width: "100vw;",
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
