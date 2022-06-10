import React, { useRef } from "react";
import Loader from "react-loaders";
import LogoN from "../../../assets/images/trima3.png";
import "./index.scss";

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  return (
    <>
      <div className="logo-container">
        <img className="img" src={LogoN} alt="" />
      </div>
      <Loader type="pacman"></Loader>
    </>
  );
};

export default Logo;
