import { Input, Textarea, Button } from "@nextui-org/react";
import { useState } from "react";
import styles from "../styles/form.module.css";
import server from "../server";

export default function Form({
  source = undefined,
  header = "Contact Us!",
  text = null,
  mobile,
  textColor = "white",
}) {
  const [buttonText, setButtonText] = useState("Submit");
  const [buttonColor, setButtonColor] = useState("#ffc916ff");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const submitForm = () => {
    fetch(`${server}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
        source: source,
      }),
    });
  };
  const updateColors = async () => {
    setTimeout(() => {
      setButtonText("Submit");
      setButtonColor("#ffc916ff");
    }, 3000);
  };
  return (
    <div className={`${styles["wrapper"]} ${mobile ? styles["mobile"] : ""}`}>
      <div>
        <h1
          style={{
            color: textColor,
            textAlign: "left",
            maxWidth: "90vw",
            marginLeft: "0",
          }}
        >
          {header}
        </h1>
      </div>

      {text}

      <div className={styles["form"]}>
        <Input
          className={styles["item"]}
          clearable
          placeholder="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <Input
          className={styles["item"]}
          clearable
          placeholder="First Name*"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
        />
        <Input
          className={styles["item"]}
          clearable
          placeholder="Last Name*"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
        />
        <Textarea
          placeholder="Specific Interests"
          css={{
            fontFamily: "var(--nextui-fonts-sans)",
          }}
          fullWidth
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <Button
          css={{
            marginLeft: "0 !important",
            marginTop: "1em",
            backgroundColor: buttonColor,
            color: "#000000",
          }}
          onClick={() => {
            submitForm();
            setButtonText("Sent");
            setButtonColor("#17C964");
            setEmail("");
            setFirstName("");
            setLastName("");
            setMessage("");
            updateColors();
          }}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
