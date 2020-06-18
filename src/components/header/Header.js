import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ExtendedMenu from "../extendedMenu/ExtendedMenu";
import css from "./header.module.css";

const Header = () => {
  const [active, setActive] = useState(false);

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
                <NavLink to="/shit" className={css.menuItem}>
                  Портфолио
                </NavLink>
              </li>
              <li className={css.menuListItem}>
                <NavLink to="/shit" className={css.menuItem}>
                  Услуги
                </NavLink>
              </li>
              <li className={css.menuListItem}>
                <NavLink to="/shit" className={css.menuItem}>
                  О нас
                </NavLink>
              </li>
            </ul>
            <div className={css.langWrapper}>
              <p className={css.lang} onClick={langSwitch}>
                RU
              </p>
            </div>
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
          </div>
        </div>
      </section>
      <ExtendedMenu activeMenu={active} />
    </>
  );
};

export default Header;
