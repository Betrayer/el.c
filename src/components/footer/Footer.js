import React from "react";
import css from "./footer.module.css";

const Footer = () => {
  return (
    <section className={css.footer}>
      <span className={css.socialsHeader}>Мы в соцсетях</span>
      <ul className={css.socialsList}>
        <li className={css.menuSocialsLink}>
          <a
            className={css.menuSocialsCircle}
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/AnteBadzim"
          ></a>
        </li>
        <li className={css.menuSocialsLink}>
          <a
            rel="noopener noreferrer"
            className={css.menuSocialsCircle}
            target="_blank"
            href="https://www.facebook.com/favouriteprimark/"
          ></a>
        </li>
        <li className={css.menuSocialsLink}>
          <a
            rel="noopener noreferrer"
            className={css.menuSocialsCircle}
            target="_blank"
            href="http://instagram.com/ante"
          ></a>
        </li>
      </ul>
      <span className={css.socialsCopyright}>
        © 2020 ELC | All rights reserved
      </span>
    </section>
  );
};

export default Footer;
