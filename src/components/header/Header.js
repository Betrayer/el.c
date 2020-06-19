import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ExtendedMenu from "../extendedMenu/ExtendedMenu";
import css from "./header.module.css";

const Header = () => {
  const [active, setActive] = useState(false);
  const [russian, setRussian] = useState(false);
  const [ukrainian, setUkrainian] = useState(false);
  const [english, setEnglish] = useState(false);
  const [langSwitcher, setLangSwitcher] = useState(false);

  useEffect(() => {
    setRussian(true);
  }, []);

  const langSwitch = () => {
    setLangSwitcher(!langSwitcher);
  };

  const changeToRussian = () => {
    setRussian(true);
    setUkrainian(false);
    setEnglish(false);
    setLangSwitcher(!langSwitcher);
  };

  const changeToUkrainian = () => {
    setUkrainian(true);
    setRussian(false);
    setEnglish(false);
    setLangSwitcher(!langSwitcher);
  };

  const changeToEnglish = () => {
    setEnglish(true);
    setRussian(false);
    setUkrainian(false);
    setLangSwitcher(!langSwitcher);
  };

  return (
    <>
      <section className={css.header}>
        <div className={css.navWrapper}>
          <div className={css.logoWrapper}>
            <img
              className={css.logo}
              src={require("../../assets/logo/logo_4.png")}
              width="90"
              height="auto"
              alt="logo"
            />
          </div>
          <div className={css.menuWrapper}>
            <ul className={css.menuList}>
              <li className={css.menuListItem}>
                <NavLink to="/portfolio" className={css.menuItem}>
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
              {russian ? (
                <p className={css.lang} onClick={langSwitch}>
                  RU
                </p>
              ) : (
                <></>
              )}
              {ukrainian ? (
                <p className={css.lang} onClick={langSwitch}>
                  UKR
                </p>
              ) : (
                <></>
              )}
              {english ? (
                <p className={css.lang} onClick={langSwitch}>
                  EN
                </p>
              ) : (
                <></>
              )}
              {langSwitcher ? (
                <div className={css.langs}>
                  <span className={css.langSpan} onClick={changeToRussian}>
                    RU
                  </span>
                  <span className={css.langSpan} onClick={changeToUkrainian}>
                    UKR
                  </span>
                  <span className={css.langSpan} onClick={changeToEnglish}>
                    EN
                  </span>
                </div>
              ) : (
                <></>
              )}
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
