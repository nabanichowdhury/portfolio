import React, { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_4c3540n",
        refForm.current,
        "rWglRqvQX5QBrXCnd"
      )
      .then(
        () => {
          alert("Message sent successfully");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            ></AnimatedLetters>
          </h1>
          <p>
            I can help you to build your project.I am interested to learn many
            new things by cordinating with people.If you have any task for me
            feel free to contact me.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    type="text"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" value="SEND" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Dwarka Sector:3,New Delhi
          <br />
          India
          <br />
          Netaji Subhas University Of technology
          <br />
          <span>nabanichowdhury@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[28.6078, 77.0406]} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.6078, 77.0406]}>
              <Popup>Hey , this is my place!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman"></Loader>
    </>
  );
};

export default Contact;
