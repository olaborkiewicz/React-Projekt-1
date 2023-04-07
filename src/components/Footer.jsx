import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container container-row">
        <div className="text3">
          moja firma - wszelkie prawa zastrzeżone, 2023
        </div>
        <div className="icons">
          <span className="instagram">
            <i className="fa-brands fa-instagram">
              <FaInstagram />
            </i>
          </span>
          <span className="facebook">
            <i className="fa-brands fa-square-facebook">
              <FaFacebook />
            </i>
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
