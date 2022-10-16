import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import type { itemType } from "../types/shop";
import Image from "next/image";
import { createClient } from "next-sanity";
import { useNextSanityImage } from "next-sanity-image";

const client = createClient({
  projectId: "x68be079",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-09-19",
});

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
    const imageProps = useNextSanityImage(client, item.image);
    return (
      <div key={index} className="w-32 h-48 sm:w-48 sm:h-72">
        <div className="overflow-clip w-32 h-32 relative sm:h-48 sm:w-48 bg-slate-200 rounded-lg">
          <Image height="125" layout="fill" width="125" {...imageProps} />
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

export async function getStaticProps() {
  const items: itemType[] = (await client.fetch(`*[_type == "product"]`)).map(
    (item) => {
      return {
        name: item.name,
        suggestedPrice: item.suggestedPrice * 100,
        description: item.description,
        slug: item.name.replaceAll(" ", "-"),
        stockCount: item.stockCount,
        image: item.image,
      };
    }
  );
  console.log(items);
  const items2: itemType[] = [
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
