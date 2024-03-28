import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            ></AnimatedLetters>
          </h1>

          <p>
            I am Nabani Chowdhury, a third-year student pursuing a Bachelor's
            degree in Computer Science at NSUT Delhi. My journey in computer
            science encompasses a fervent exploration not only in mastering data
            structures, algorithms, and MERN stack web development but also
            extends into the realm of machine learning.
          </p>
          <p>
            Driven by an insatiable curiosity, I am actively delving into the
            fascinating field of machine learning, seeking to understand its
            principles and applications. As I continue to expand my horizons, I
            am eager to integrate the insights gained from this exploration into
            my academic pursuits and projects.
          </p>
          <p>
            Dedicated to continual growth and learning, I look forward to the
            challenges and opportunities that lie ahead in my journey through
            the diverse landscapes of computer science.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4"></FontAwesomeIcon>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529"></FontAwesomeIcon>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9"></FontAwesomeIcon>
            </div>
            <div className="face4">
              <FontAwesomeIcon
                icon={faJsSquare}
                color="#EFD81D"
              ></FontAwesomeIcon>
            </div>
            <div className="face5">
              <FontAwesomeIcon
                icon={faGitAlt}
                color="#EC4D28"
              ></FontAwesomeIcon>
            </div>
            <div className="face6">
              <FontAwesomeIcon
                icon={faNodeJs}
                color="#3C873A"
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
      <Loader className="loader-active" type="pacman"></Loader>
    </>
  );
};

export default About;
