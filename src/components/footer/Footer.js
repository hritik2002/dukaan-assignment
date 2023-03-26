import React from "react";
import "./Footer.css";
import footer_logo from "../../images/footer_logo.png";
const footerArr = [
  {
    title: "Contact",
  },
  {
    title: "Tutorials",
  },
  {
    title: "Privacy",
  },
  {
    title: "About",
  },
  {
    title: "Facebook",
  },
  {
    title: "FAQ's",
  },
  {
    title: "Blog",
  },
  {
    title: "Banned Items",
  },
  {
    title: "Jobs",
    label: "3",
  },
  {
    title: "Twitter",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "Linkedin",
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_top_left">
          <img src={footer_logo} alt="footer_logo" />
        </div>
        <div className="footer_top_right">
          {footerArr.map((value, index) => (
            <div key={value.title + index}>
              <p>{value.title}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="footer_bottom">
        <p>Dukaan 2020, All rights reserved</p>
        <p>Made in <span>🇮🇳</span></p>
      </div>
    </div>
  );
}

export default Footer;
