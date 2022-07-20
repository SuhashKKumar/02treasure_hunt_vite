import React from "react";
import "../styles/Footer.css";
import { useState } from "react";
import Cookies from "./Cookies";
import Buttons from "./Buttons";

const Footer = () => {
  const [cookies, setCookies] = useState(false);
  const CookiesHandler = () => {
    setCookies(!cookies);
  };

  return (
    <div className="homepage_child2">
      <Cookies cookies={cookies} setCookies={setCookies} />
      <footer>
        <p>
          Our site uses cookies, by continuing to our website you agree to our
          privacy policy
        </p>
        <Buttons
          className={"outlined"}
          CookiesHandler={CookiesHandler}
          name={"Accept Cookies"}
        />
      </footer>
      <h6 className="homepage_footer">
        © 2022 Suhash K Kumar, All Rights Reserved
      </h6>
    </div>
  );
};

export default Footer;
