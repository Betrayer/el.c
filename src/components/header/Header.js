import React from "react";
import { useHistory } from "react-router-dom";
import css from "./header.module.css";

const Header = () => {
  const history = useHistory();

  const hello = () => {
    alert("HELLO THERE");
  };

  const toPortfolio = () => {
    alert("I am portfolio");
  };

  const toServices = () => {
    alert("I am services");
    // history.push("/services");
  };

  const toAboutUs = () => {
    alert("I am about us");
  };

  const langSwitch = () => {
    alert("langSwitch");
  };

  return (
    <section className={css.header}>
      <div className={css.navWrapper}>
        <div className={css.logoWrapper}>
          <p className={css.logo}>Logo</p>
        </div>
        <div className={css.menuWrapper}>
          <ul className={css.menuList}>
            <li className={css.menuListItem}>
              <p className={css.menuItem} onClick={toPortfolio}>
                Портфолио
              </p>
            </li>
            <li className={css.menuListItem}>
              <p className={css.menuItem} onClick={toServices}>
                Услуги
              </p>
            </li>
            <li className={css.menuListItem}>
              <p className={css.menuItem} onClick={toAboutUs}>
                О нас
              </p>
            </li>
          </ul>
          <div className={css.langWrapper}>
            <p className={css.lang} onClick={langSwitch}>
              RU
            </p>
          </div>
          <div className={css.burger} onClick={hello}></div>
        </div>
      </div>
    </section>
  );
};

export default Header;
