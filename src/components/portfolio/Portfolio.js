import React from "react";
import css from "./portfolio.module.css";

const portfolio = () => {
  return (
    <section className={css.portfolioContainer}>
      <div className={css.portfolioWrapper}>
        <h2 className={css.portfolioHeader}>Портфолио</h2>
        <ul className={css.portfolioList}>
          <li className={css.portfolioListItem}>
            <img
              src={require("../../assets/photos/portfolio/LovePRIM.jpg")}
              width="210"
              height="150"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default portfolio;
