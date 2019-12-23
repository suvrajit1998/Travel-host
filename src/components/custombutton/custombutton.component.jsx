import React from "react";

import "./custombutton.style.scss";

const Custombutton = ({
  children,
  isgoogleSingIn,
  inverted,
  ...otherprops
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isgoogleSingIn ? "google-sing-in" : ""
    }  custom-button`}
    {...otherprops}
  >
    {children}
  </button>
);

export default Custombutton;
