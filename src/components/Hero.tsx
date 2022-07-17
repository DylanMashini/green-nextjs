import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
export default function Hero({
  Header,
  Text,
  ImageSrc,
  ButtonText,
  ButtonLink,
  mobile,
  h2 = false,
}) {
  const router = useRouter();
  return (
    <div className="hero">
      <Image
        src={ImageSrc}
        layout="fill"
        objectFit="cover"
        style={{ zIndex: -1, width: "100vw" }}
        quality="50"
        priority={true}
      />
      <div
        style={{
          zIndex: "998",
        }}
      >
        <h1
          style={{
            color: "black",
          }}
        >
          {Header}
        </h1>
        {!h2 ? (
          <p
            style={{
              color: "black",
              height: "100%",
              wordBreak: "break-word",
            }}
            className={mobile ? "hero-mobile-text" : ""}
          >
            {Text}
          </p>
        ) : (
          <h2
            style={{
              fontSize: "2em",
              maxWidth: "40vw",
              marginLeft: "8vw",
            }}
            className={mobile ? "hero-mobile-text-h2" : ""}
          >
            {Text}
          </h2>
        )}

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
