import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
            idx={15}
          ></AnimatedLetters>
        </h1>
      </div>
    </div>
  );
};

export default Contact;
