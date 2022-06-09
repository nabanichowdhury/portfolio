import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logotitle from "../../assets/images/logo-n.png";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["a", "b", "a", "n", "i"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];
  //   useEffect(() => {
  //     return setTimeout(() => {
  //       setLetterClass("text-animate-hover");
  //     }, 4000);
  //   }, []);
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>

          <img src={logotitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={20}
          />
        </h1>
        <h2>Frontend Developer/Coder</h2>
        <a
          href="https://drive.google.com/file/d/1_WCNcT3_teusReJ7b6LyhpkdNoZHgb-i/view?usp=sharing"
          target="_blank"
          className="flat-button"
        >
          See resume
        </a>
      </div>
    </div>
  );
};

export default Home;
