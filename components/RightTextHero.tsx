import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import useNextBlurhash from "use-next-blurhash";

export default function Hero({
	ImageSrc,
	mobile,
	children,
	blurHash = "",
	blurDataURL = "",
	className = "",
	height = "100vh",
}) {
	const router = useRouter();
	let blurDataUrl = blurDataURL;
	if (blurHash) {
		[blurDataUrl] = useNextBlurhash(blurHash);
	}
	console.log(blurDataUrl);
	return (
		<div
			className="hero"
			style={{
				height: height,
			}}
		>
			{blurDataURL ? (
				<Image
					src={ImageSrc}
					layout="fill"
					objectFit="cover"
					style={{ zIndex: -1, width: "100vw" }}
					placeholder="blur"
					blurDataURL={blurDataUrl}
					className={className}
				/>
			) : (
				<Image
					src={ImageSrc}
					layout="fill"
					objectFit="cover"
					style={{ zIndex: -1, width: "100vw" }}
					className={className}
				/>
			)}
			<div
				style={{
					width: "100vw",
					overflow: "visible",
					marginTop: height == "100vh" ? "" : "20vh",
					height: height == "100vh" ? "" : height,
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
