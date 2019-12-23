import React from "react";

import { withRouter } from "react-router-dom";

import "./menu-item.style.scss";

const MenuItems = ({ title, imageurl, size, history, match, linkurl }) => (
  <div
    className={`${size}  menu-item`}
    onClick={() => history.push(`${match.url}${linkurl}`)}
  >
    <div
      className="background"
      style={{
        backgroundImage: `url(${imageurl})`
      }}
    ></div>
    <div className="content">
      <h1 className="title"> {title} </h1>
      <span className="sub-title">Shop Now</span>
    </div>
  </div>
);

export default withRouter(MenuItems);
