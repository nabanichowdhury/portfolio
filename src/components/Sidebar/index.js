import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo-n.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faLinkedin,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img src={LogoSubtitle} alt="logo-sub"></img>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="project-link"
          to="/project"
        >
          <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nabanichowdhury"
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/nabanichowdhury/"
          >
            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
