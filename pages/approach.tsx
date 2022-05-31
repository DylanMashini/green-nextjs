import Navbar from "../components/Navbar";
import Hero from "../components/RightTextHero";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import styles from "../styles/approach.module.css";
import Layout from "../components/Layout";

export default function Programs() {
  const router = useRouter();
  const [mobile, setMobile] = useState(false);
  const [width, setWidth] = useState(764);
  const [height, setHeight] = useState(440);
  const isProd = process.env.NODE_ENV === "production";
  const getMobile = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    if (window.innerWidth < 905) {
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
      <Hero ImageSrc="/content/grass.jpeg" mobile={mobile}>
        <div
          className={`${styles["hero-text"]} Raleway ${
            mobile ? styles["mobile"] : ""
          }`}
          style={{
            display: "flex",
            width: "60%",
            marginLeft: "40%",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "50vw",
            }}
          >
            <div
              style={{
                marginTop: "2em",
                width: "8px",
                height: "14vh",
                backgroundColor: "#1A5B92",
                marginRight: "10px",
                borderRadius: "1px",
              }}
            />
            {!mobile ? (
              <h2>
                Our Electricity, Recycling, and Food & Agriculture Programs
                combined have the potential to reduce over 550,000 metric tons
                of CO2 equivalent by 2030. That is equal to removing 118,508
                gasoline-powered cars from the road for an entire year.
              </h2>
            ) : (
              <h2
                style={{
                  fontSize: "1em",
                }}
              >
                Our Electricity, Recycling, and Food & Agriculture Programs
                combined have the potential to reduce over 550,000 metric tons
                of CO2 equivalent by 2030. That is equal to removing 118,508
                gasoline-powered cars from the road for an entire year.
              </h2>
            )}
          </div>
          <Button
            className="rightButton"
            css={{
              margin: "0 auto",
              color: "black",
              backgroundColor: "#ffc916ff",
            }}
            onClick={() => {
              router.push("/join/");
            }}
          >
            Help us Meet This Goal
          </Button>
        </div>
      </Hero>
      <div className={`${styles["content"]} ${mobile ? styles["mobile"] : ""}`}>
        <div
          className={`${styles["three-col"]} ${mobile ? styles["mobile"] : ""}`}
        >
          <div className={styles["item"]}>
            <p
              style={{
                color: "white",
              }}
            >
              Our 5 pillars for a sustainable community are:
            </p>
            <h1
              style={{
                color: "white",
              }}
            >
              EMPOWERED PEOPLE
            </h1>
            <p
              style={{
                color: "white",
              }}
            >
              People feel empowered and energized in making sustainable choices.
            </p>
            <h1 style={{ color: "white" }}>AVAILABLE INFRASTRUCTURE</h1>
            <p
              style={{
                color: "white",
              }}
            >
              Sustainable living choices are possible through the availability
              of infrastructure and services.
            </p>
            <h1 style={{ color: "white" }}>ENVIRONMENTAL VALUES</h1>
            <p
              style={{
                color: "white",
              }}
            >
              Environmental impact is prioritized in decision-making by
              companies, governments and individuals.
            </p>
            <h1 style={{ color: "white" }}>ETHOS OF SUSTAINABILITY</h1>
            <p style={{ color: "white" }}>
              Sustainable habits are the societal norm. Actions that harm the
              planet are frowned upon, inconvenient, unavailable, or costly.
            </p>
            <p style={{ color: "white" }}>
              <h1 style={{ color: "white" }}>ENVIRONMENTAL EQUITY</h1>
              Sustainable solutions are accessible to everyone in our community.
            </p>
          </div>
          <div className={styles["item"]}>
            <p>Here's how we will accomplish our mission:</p>
            <h1
              style={{
                color: "white",
              }}
            >
              PARTNERSHIPS
            </h1>
            <h3
              style={{
                color: "white",
                fontSize: "1rem",
              }}
            >
              Our goal is to reduce over 150,000 metric tons CO2 equivalent by
              2030 through programs enabling composting, food waste reduction,
              and access to lower-carbon emitting diets.
            </h3>
          </div>
        </div>
      </div>
    </Layout>
  );
}
