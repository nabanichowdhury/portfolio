import React from "react";
import conventional from "../../assets/images/CONVENTIONAL .png";
import PhoneKhojo from "../../assets/images/PHONE KHOJO.png";
import wareHouse from "../../assets/images/WAREHOUSE WEBSITE.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "Conventional Center",
      img: conventional,
      desc: "This website is made up of css framework bootstrap",
      live: "https://stupefied-ptolemy-d45e77.netlify.app/",
      code: "https://github.com/Porgramming-Hero-web-course/convention-center-nabanichowdhury",
    },
    {
      id: 2,
      name: "Phone Hunter Website",
      img: PhoneKhojo,
      desc: "This website is made up using Java script api",
      live: "https://stoic-hawking-63aa18.netlify.app/",
      code: "https://github.com/programming-hero-web-course2/phone-hunter-nabanichowdhury",
    },
    {
      id: 3,
      name: "Ware House Website",
      img: wareHouse,
      desc: "This website is made up using Google firebase authentication system,MongoDB and nodejs to add and create data",
      live: "https://full-stack-warehouse-react.web.app/",
      code: "https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-nabanichowdhury",
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
