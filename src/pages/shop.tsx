import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import type { itemType } from "../types/shop";
import Image from "next/image";

export default function Shop({ items }: { items: itemType[] }) {
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

  const itemComponents = items.map((item, index) => {
    return (
      <div key={index} className="w-32 h-48 sm:w-48 sm:h-72">
        <div className="w-32 h-32 sm:h-48 sm:w-48 bg-slate-200 rounded-lg">
          <Image
            height="125"
            layout="responsive"
            width="125"
            src={item.image}
          />
        </div>
        <div className="overflow-visible flex flex-col justify-start items-center h-12 sm:h-16 mt-2">
          <h5 className="inter m-0 w-full ml-2">{item.name}</h5>
          <h6 className="inter m-0 w-full ml-2">
            ${(item.suggestedPrice / 100).toFixed(2)}
          </h6>
        </div>
      </div>
    );
  });

  return (
    <Layout mobile={mobile}>
      <div className="min-h-screen w-screen">
        <div className="flex w-screen flex-row flex-wrap mt-20 gap-12 items-center justify-center">
          {itemComponents}
        </div>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const items: itemType[] = [
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
      suggestedPrice: 1199,
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
