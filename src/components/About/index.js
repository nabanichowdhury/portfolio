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
            I am a Frontend Web developer,At my learning state and want to
            aquire more knowledge and want to become more efficient in this
            field.I am Have done some of the projects using mongodb and nodejs.
          </p>
          <p>
            I am a Computer science specialization undergrad student of Netaji
            Subhas University of technology.I am in my 1st year of the college
            and I love to learn and explore new things.
          </p>
          <p>
            I have done some of the projects using HTML,CSS,JS,REACTJS,Nodejs
            and some other projects.
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
