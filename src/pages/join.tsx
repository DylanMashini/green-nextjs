import Hero from "../components/RightTextHero";
import Layout from "../components/Layout";
import Form from "../components/form";
import { useState, useEffect } from "react";
import styles from "../styles/Join.module.css";

export default function Join() {
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
  const pStyle = mobile
    ? {
        width: "90vw",
        marginLeft: "0",
      }
    : {};
  return (
    <Layout mobile={mobile}>
      <div className={styles["wrapper"]}>
        <Hero
          ImageSrc="/content/join.jpeg"
          mobile={mobile}
          className={`join-image${mobile ? " mobile" : ""}`}
          height={mobile ? "200vh" : "100vh"}
        >
          <Form
            mobile={mobile}
            header="Join Us"
            text={
              <div
                style={{
                  maxWidth: "90vw",
                }}
              >
                <p style={pStyle}>
                  Interested in making an impact for sustainability in Cobb
                  County? Sign up here to receive emails from us.
                </p>
                <p style={pStyle}>
                  If you are interested in being more involved, let us know!  Do you love books or movies?  Host a book or movie club!  Are you creative?  Design our swag, design our booths, help amplify our message on social media, write content and grant proposals.  Are you a connector?  Help us find and build relationships with mission-aligned organizations or become a Green Ambassador for your neighborhood, business, or place of worship.  Do you love data and research?  Help us measure our impact potential.  Other ideas? Let us know!
                </p>
                <p style={pStyle}>
                  Please email{" "}
                  <a href="mailto:info@mygreenearth.org">
                    info@mygreenearth.org
                  </a>{" "}
                  with any questions.
                </p>
              </div>
            }
          />
        </Hero>
      </div>
    </Layout>
  );
}
