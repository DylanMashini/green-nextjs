import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import ThreeDisplay from "../components/ThreeDisplay";
import Hero from "../components/Hero";
const Home: NextPage = () => {
  type ColorType =
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "gradient"
    | "white";
  const router = useRouter();
  const [mobile, setMobile] = useState(false);
  const [width, setWidth] = useState(764);
  const [height, setHeight] = useState(440);
  const isProd = process.env.NODE_ENV === "production";
  const getMobile = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    if (window.innerWidth < 1079) {
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
  const pagesToPrefetch = ["/solarize"];
  useEffect(() => {
    pagesToPrefetch.forEach((page) => {
      router.prefetch(page);
    });
  });
  return (
    <Layout mobile={mobile}>
      <Head>
        <title>Home</title>
      </Head>

      <Hero
        ImageSrc={"/header1.jpeg"}
        Header=""
        Text="Enabling sustainable living choices for local communities in and around Cobb County, GA​"
        ButtonText="Learn More"
        ButtonLink="/programs"
        h2
      />
      <div className={`content`}>
        <div>
          <div
            style={{
              width: "80vw",
            }}
          >
            <h2
              style={{
                fontFamily: "News Cycle, sans-serif",
              }}
            >
              “We don't need a handful of people doing zero waste perfectly. We
              need millions of people doing it imperfectly.”
            </h2>
            <h2
              style={{
                fontFamily: "News Cycle, sans-serif",
              }}
            >
              - Anne Marie Bonneau
            </h2>
          </div>
        </div>
      </div>
      <ThreeDisplay
        headers={[
          "A Sustainable Cobb",
          "Collective Action",
          "Community Partnerships",
        ]}
        text={[
          "We are on a mission to make Cobb County the most sustainable county in Georgia.  As the 3rd largest county, we have the potential to make a significant impact.  We need your help!",
          "Our Electricity, Recycling, and Food & Agriculture Programs combined have the potential to reduce over 550,000 metric tons of CO2 equivalent by 2030, all from the small sustainable actions from individual community members like you.",
          "There are four strategies to achieving our mission: partnerships, events,  community engagement, and awareness.  Through these we hope to inspire sustainable choices throughout our community.  Partner with us and together we can make an impact!",
        ]}
        images={[
          "/content/TextileRecycling.jpeg",
          "/content/picture1.jpeg",
          "/content/TeamVolunteering.jpeg",
        ]}
        buttonLinks={["/join", "/programs", "/partner"]}
        buttonText={[
          "Learn how you can help",
          "Learn about our programs",
          "Partner with us",
        ]}
      />
    </Layout>
  );
};

export default Home;
