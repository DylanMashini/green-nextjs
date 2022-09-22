import Image from "next/image";
import styles from "../styles/ThreeDisplay.module.css";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
export default function ThreeDisplay({
  headers,
  text,
  images,
  buttonLinks,
  buttonText = ["Learn More", "Learn More", "Learn More"],
}) {
  const router = useRouter();
  return (
    <div>
      <div className={`${styles["three-partition"]} ${styles["wrapper"]}`}>
        <div className={`${styles["item"]}`}>
          <div className={`${styles["picture"]}`}>
            <Image
              src={images[0]}
              layout="fill"
              objectFit="cover"
              alt="my green earth"
            />
          </div>
          <div className={`${styles["item-content"]}`}>
            <h3>{headers[0]}</h3>
            <p>{text[0]}</p>
            <Button
              css={{
                backgroundColor: "#1A5B92",
              }}
              onClick={() => {
                router.push(buttonLinks[0]);
              }}
            >
              {buttonText[0]}
            </Button>
          </div>
        </div>
        <div className={`${styles.item}`}>
          <div className={`${styles["picture"]}`}>
            <Image
              src={images[1]}
              layout="fill"
              objectFit="cover"
              alt="my green earth 2"
            />
          </div>
          <div className={`${styles["item-content"]}`}>
            <h3>{headers[1]}</h3>
            <p>{text[1]}</p>
            <Button
              css={{
                backgroundColor: "#1A5B92",
              }}
              onClick={() => {
                router.push(buttonLinks[1]);
              }}
            >
              {buttonText[1]}
            </Button>
          </div>
        </div>
        <div className={`${styles.item}`}>
          <div className={`${styles["picture"]}`}>
            <Image
              src={images[2]}
              layout="fill"
              objectFit="cover"
              alt="my green earth 3"
            />
          </div>
          <div className={`${styles["item-content"]}`}>
            <h3>{headers[2]}</h3>
            <p>{text[2]}</p>
            <Button
              css={{
                backgroundColor: "#1A5B92",
              }}
              onClick={() => {
                router.push(buttonLinks[2]);
              }}
            >
              {buttonText[2]}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
