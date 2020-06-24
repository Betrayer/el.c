import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import ExtendedMenu from "../extendedMenu/ExtendedMenu";
import css from "./header.module.css";

const Header = () => {
  const [active, setActive] = useState(false);
  const [defLangState, setDefLangState] = useState(
    localStorage.getItem("lang")
  );
  const [langSwitcher, setLangSwitcher] = useState(false);
  const history = useHistory();

  useEffect(() => {
    defLang();
  }, []);

  const refresh = () => {
    history.go();
  };

  const refreshTroughLogo = () => {
    if (history.location.pathname === "/") {
      refresh();
    } else {
      history.push("/");
    }
  };

  const defLang = () => {
    let lang = localStorage.getItem("lang");
    if (!lang) {
      localStorage.setItem("lang", "ukr");
      setDefLangState("ukr");
      refresh();
    }
  };

  const langSwitch = () => {
    setLangSwitcher(!langSwitcher);
  };

  const changeLang = (e) => {
    if (e.target.id === "rus") {
      setDefLangState("rus");
      localStorage.setItem("lang", "rus");
      refresh();
    } else if (e.target.id === "en") {
      setDefLangState("en");
      localStorage.setItem("lang", "en");
      refresh();
    } else {
      setDefLangState("ukr");
      localStorage.setItem("lang", "ukr");
      refresh();
    }
    setLangSwitcher(!langSwitcher);
  };

  return (
    <>
      <header className={css.header}>
        <div className={css.navWrapper}>
          <div className={css.logoWrapper}>
            <img
              onClick={refreshTroughLogo}
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
                <NavLink to="/services" className={css.menuItem}>
                  {defLangState === "rus" ? "Услуги" : ""}
                  {defLangState === "ukr" ? "Послуги" : ""}
                  {defLangState === "en" ? "Services" : ""}
                </NavLink>
              </li>
              <li className={css.menuListItem}>
                <NavLink to="/about" className={css.menuItem}>
                  {defLangState === "rus" ? "О нас" : ""}
                  {defLangState === "ukr" ? "О нас" : ""}
                  {defLangState === "en" ? "About us" : ""}
                </NavLink>
              </li>
              <li className={css.menuListItem}>
                <NavLink to="/blog" className={css.menuItem}>
                  {defLangState === "rus" ? "Блог" : ""}
                  {defLangState === "ukr" ? "Блог" : ""}
                  {defLangState === "en" ? "Blog" : ""}
                </NavLink>
              </li>
            </ul>
            <div className={css.langWrapper}>
              {defLangState === "ukr" ? (
                <p className={css.lang} onClick={langSwitch}>
                  UKR
                </p>
              ) : (
                <></>
              )}
              {defLangState === "rus" ? (
                <p className={css.lang} onClick={langSwitch}>
                  RU
                </p>
              ) : (
                <></>
              )}
              {defLangState === "en" ? (
                <p className={css.lang} onClick={langSwitch}>
                  EN
                </p>
              ) : (
                <></>
              )}
              {langSwitcher ? (
                <div className={css.langs}>
                  <span
                    className={css.langSpan}
                    id="ukr"
                    onClick={(e) => changeLang(e)}
                  >
                    UKR
                  </span>
                  <span
                    className={css.langSpan}
                    id="rus"
                    onClick={(e) => changeLang(e)}
                  >
                    RU
                  </span>
                  <span
                    className={css.langSpan}
                    id="en"
                    onClick={(e) => changeLang(e)}
                  >
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
      <ExtendedMenu activeMenu={active} />
      </header>
    </>
  );
};

export default Header;
