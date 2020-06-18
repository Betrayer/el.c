import React from "react";
import css from "./footer.module.css";

const Footer = () => {
  return (
    <section className={css.footer}>
      <span className={css.socialsHeader}>Мы в соцсетях</span>
      <ul className={css.socialsList}>
        <li className={css.socialsListItem}>
          <a href="#" className={css.iconLink}>
            <div className={css.socialIconWrapperTwitter}></div>
          </a>
        </li>
        <li className={css.socialsListItem}>
          <a href="#" className={css.iconLink}>
            <div className={css.socialIconWrapperFacebook}></div>
          </a>
        </li>
        <li className={css.socialsListItem}>
          <a href="#" className={css.iconLink}>
            <div className={css.socialIconWrapperInstagram}></div>
          </a>
        </li>
      </ul>
      <span className={css.socialsCopyright}>
        © 2020 ELC | All rights reserved
      </span>
    </section>
  );
};

export default Footer;
