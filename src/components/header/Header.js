import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ExtendedMenu from "../extendedMenu/ExtendedMenu";
import css from "./header.module.css";

const Header = () => {
  const [active, setActive] = useState(false);
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
    <>
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
            {/* <div className={css.burger}> */}
            <button
              onClick={() => setActive(!active)}
              className={active ? css.menuActive : css.menu}
            >
              <svg className={css.menuSvg} viewBox="0 0 64 48">
                <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
              </svg>
            </button>
            {/* </div> */}
          </div>
        </div>
      </section>
      <ExtendedMenu activeMenu={active} />
    </>
  );
};

export default Header;
