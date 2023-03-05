import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="waves">
          <div className="wave" id="wave1" />
          <div className="wave" id="wave2" />
          <div className="wave" id="wave3" />
          <div className="wave" id="wave4" />
        </div>
        <div className="Menu">
          <ul className="menu">
            <li className="item">
              <a className="link" href="#">
                Home
              </a>
            </li>
            <li className="item">
              <a className="link" href="#">
                About
              </a>
            </li>
            <li className="item">
              <a className="link" href="#">
                Services
              </a>
            </li>
            <li className="item">
              <a className="link" href="#">
                Team
              </a>
            </li>
            <li className="item">
              <a className="link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <p>©2023 La Casa | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
