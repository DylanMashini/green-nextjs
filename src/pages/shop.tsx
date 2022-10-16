import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import type { items } from "../types/shop";

export default function Shop({ items }: { items: items[] }) {
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

  return (
    <Layout mobile={mobile}>
      <div className="min-h-screen w-screen"></div>
    </Layout>
  );
}

export function getStaticProps() {
  const items: items[] = [
    {
      name: "Power Consumption Moniter",
      image: "/items/power",
      suggestedPrice: 1200,
      description:
        "A device that moniters the power consumption of electrionics plugged into it",
      slug: "power",
      stockCount: 2,
    },
    {
      name: "Power Consumption Moniter",
      image: "/items/power",
      suggestedPrice: 1200,
      description:
        "A device that moniters the power consumption of electrionics plugged into it",
      slug: "power22",
      stockCount: 2,
    },
  ];
  return {
    props: {
      items,
    },
  };
}
