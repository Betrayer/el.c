import React from "react";
import css from "./footer.module.css";

const Footer = () => {
  return (
    <section className={css.footer}>
      <span className={css.socialsHeader}>Social media</span>
      <ul className={css.socialsList}>
        <li className={css.socialsListItem}>
          <div className={css.socialIconWrapper}></div>
        </li>
        <li className={css.socialsListItem}>
          <div className={css.socialIconWrapper}></div>
        </li>
        <li className={css.socialsListItem}>
          <div className={css.socialIconWrapper}></div>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
