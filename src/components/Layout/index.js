import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./index.scss";

const Layout = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet></Outlet>
        <span className="tags bottom-tags">
          &lt;body&gt;
          <br />
          <span className="bottoms-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
