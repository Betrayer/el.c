import React, { useState, useEffect } from "react";
import css from "./footer.module.css";

const Footer = () => {
  const [defLangState] = useState(localStorage.getItem("lang"));

  useEffect(() => {}, [defLangState]);

  return (
    <footer className={css.footer}>
      {/* <span className={css.socialsHeader}>
        {defLangState === "rus" ? "Мы в соцсетях" : ""}
        {defLangState === "ukr" ? "Ми в соцмережах" : ""}
        {defLangState === "en" ? "We are in social networks" : ""}
      </span> */}
      {/* 
      <ul className={css.socialsList}>
        <li className={css.menuSocialsLink}>
          <a
            className={css.menuSocialsCircle}
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/AnteBadzim"
          >
            <span className={css.linkContent}>twitter link</span>
          </a>
        </li>
        <li className={css.menuSocialsLink}>
          <a
            rel="noopener noreferrer"
            className={css.menuSocialsCircle}
            target="_blank"
            href="https://www.facebook.com/favouriteprimark/"
          >
            <span className={css.linkContent}>facebook link</span>
          </a>
        </li>
        <li className={css.menuSocialsLink}>
          <a
            rel="noopener noreferrer"
            className={css.menuSocialsCircle}
            target="_blank"
            href="http://instagram.com/ante"
          >
            <span className={css.linkContent}>instagram link</span>
          </a>
        </li>
      </ul> */}
      <span className={css.socialsCopyright}>
        © 2020 ELC | All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
