import React from "react";

import shoeWeb from "../../assets/images/shoeweb.png";
import donate from "../../assets/images/donationweb.png";
import bookCollection from "../../assets/images/bookCollection.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "Shoe Management Website",
      img: shoeWeb,
      desc: "This website is made up using Google firebase authentication system,MongoDB and nodejs to add and create data",
      live: "https://shoe-front-gilt.vercel.app/",
      code: "https://github.com/nabanichowdhury/shoe-management-frontend",
    },
    {
      id: 2,
      name: "Donation Website",
      img: donate,
      desc: "This website is made up using Google firebase authentication system,MongoDB and nodejs to add and create data",
      live: "https://donation-client-side.vercel.app/",
      code: "https://github.com/nabanichowdhury/donation-client-side",
    },
    {
      id: 3,
      name: "Book Collection Website",
      img: bookCollection,
      desc: "This website is made up using Google firebase authentication system,MongoDB and nodejs to add and create data",
      live: "https://book-collect-client.vercel.app/",
      code: "https://github.com/nabanichowdhury/book-collect-client",
    },
  ];
  return (
    <div
      className="projects"
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "10%",
        marginTop: "10%",
      }}
    >
      {projects.map((project) => (
        <div
          className="each-project"
          style={{ marginLeft: "10px", width: "300px" }}
        >
          <img width="300px" src={project.img} alt="" />
          <div>
            <h1 style={{ color: "white" }}>{project.name}</h1>
            <p style={{ color: "lightgrey" }}>{project.desc}</p>
            <a
              style={{
                color: "#f10a91",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "4px",
                fontFamily: "sans-serif",
                textDecoration: "none",
                padding: " 10px 18px",
                border: "1px solid #f10a91",
                marginTop: "25px",
                marginRight: "5px",
                float: "left",
                animation: " fadeIn 1s 1.8s backwards",
                whiteSpace: "nowrap",
              }}
              target="_blank"
              href={project.live}
            >
              Live code
            </a>
            <a
              style={{
                color: "#f10a91",
                fontSize: "13px",
                fontWeight: "400",
                letterSpacing: "4px",
                fontFamily: "sans-serif",
                textDecoration: "none",
                padding: " 10px 18px",
                border: "1px solid #f10a91",
                marginTop: "25px",
                float: "left",
                animation: " fadeIn 1s 1.8s backwards",
                whiteSpace: "nowrap",
              }}
              target="_blank"
              href={project.code}
            >
              {" "}
              Code{" "}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
