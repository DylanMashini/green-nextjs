import styles from "../styles/footer.module.css";
import Image from "next/image";
import mobileStyles from "../styles/footer.mobile.module.css";
export default function Footer({ mobile }) {
  if (mobile) {
    return (
      <div className={`footer`}>
        <div className={mobileStyles["content"]}>
          <div className={styles["line"]} />
          <div className={mobileStyles["flex"]}>
            <div className={mobileStyles["column"]}>
              <div
                style={{
                  marginLeft: "2.5rem",
                }}
              >
                {/* <Image
									src="/logo2.png"
									width="38"
									height={"31"}
								/> */}
                <p>
                  Copyright &copy; 2022 My Green Earth, Inc. All Rights Reserved
                </p>
              </div>
            </div>
            <div className={mobileStyles["column"]}>
              <a
                href="https://www.dylanmashini.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website Made By Dylan Mashini
              </a>
            </div>
            <div className={mobileStyles["column"]}>
              <p>My Green Earth, Inc. is a registered 501(c)3</p>
            </div>
            <div className={mobileStyles["column"]}>
              <a
                href="https://www.facebook.com/MyGreenEarthInc/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "1rem",
                }}
              >
                <Image
                  src="/facebook.png"
                  width="30"
                  height="30"
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/mygreenearth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linkedin.png"
                  width="36"
                  height="30"
                  alt="linkedin"
                />
              </a>
            </div>
            <div className={styles["column"]}>
              <a href="/terms-of-use" target="_blank" rel="noopener noreferer">
                Terms of Use
              </a>
              <p> </p>
              <a
                href="/privacy-policy"
                target={"_blank"}
                rel="noopener noreferer"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`footer`}>
      <div className={`${styles["content"]}`}>
        <div className={styles["line"]} />
        <div className={styles["flex"]}>
          <div className={styles["half"]}>
            <div className={styles["row"]}>
              <div
                style={{
                  marginLeft: "0rem",
                }}
              >
                <Image src="/logo2.png" width="38" height={"31"} alt="logo" />
              </div>
              <p>
                Copyright &copy; 2022 My Green Earth, Inc. All Rights Reserved
              </p>
            </div>
            <div className={styles["row"]}>
              <a
                style={{
                  marginLeft: "calc(2.5rem + 38px)",
                }}
                className="link"
                href="https://www.dylanmashini.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website made by Dylan Mashini
              </a>
            </div>
          </div>
          <div className={styles["half"]}>
            <div className={styles["row-right"]}>
              <a
                href="https://www.facebook.com/MyGreenEarthInc/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "1.5rem",
                }}
              >
                <Image
                  src="/facebook.png"
                  width="40"
                  height="40"
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/mygreenearth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linkedin.png"
                  width="47"
                  height="40"
                  alt="linkedin"
                />
              </a>
              <p
                style={{
                  marginRight: "2.5rem",
                }}
              >
                My Green Earth, Inc. is a registered 501(c)3
              </p>
            </div>
            <div className={styles["row-right"]}>
              <a
                style={{
                  marginRight: "2.5rem",
                }}
                href="terms-of-use"
              >
                Terms of Use
              </a>
              <a
                style={{
                  marginRight: "2.5rem",
                }}
                href="/privacy-policy/"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//
