import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./extendedMenu.module.css";

const ExtendedMenu = ({ activeMenu }) => {
  const menuLinksRus = [
    // { name: "Портфолио", redirect: "/portfolio" },
    { name: "Услуги", redirect: "/services" },
    { name: "О нас", redirect: "/about" },
    { name: "Блог", redirect: "/blog" },
  ];
  const menuLinksUkr = [
    // { name: "Портфоліо", redirect: "/portfolio" },
    { name: "Послуги", redirect: "/services" },
    { name: "Про нас", redirect: "/about" },
    { name: "Блог", redirect: "/blog" },
  ];
  const menuLinksEng = [
    // { name: "Portfolio", redirect: "/portfolio" },
    { name: "Services", redirect: "/services" },
    { name: "About us", redirect: "/about" },
    { name: "Blog", redirect: "/blog" },
  ];
  const [opacity, setOpacity] = useState(false);
  const [defLangState] = useState(localStorage.getItem("lang"));

  useEffect(() => {}, [defLangState]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(true);
    }, 1100);
    if (!activeMenu) {
      setOpacity(false);
    }
    return () => clearTimeout(timer);
  }, [activeMenu]);

  return (
    <>
      <div className={styles.menuWrapper}>
        <div
          className={
            activeMenu ? styles.menuWhiteLayerActive : styles.menuWhiteLayer
          }
        ></div>
        <div
          className={activeMenu ? styles.menuBgLayerActive : styles.menuBgLayer}
        >
          <div className={styles.rightSide}>
            <nav className={styles.menuNav}>
            {defLangState === "rus" ? (
              <ul className={styles.menuNavList}>
                {menuLinksRus.map((link, ind) => (
                  <NavLink
                    to={link.redirect}
                    key={ind}
                    style={{
                      animationDelay: `${ind * 0.1 + 0.4}s`,
                      opacity: opacity ? 1 : 0,
                    }}
                    className={
                      activeMenu
                        ? styles.menuSocialsLinkActive
                        : styles.menuPageLink
                    }
                  >
                    <span className={styles.menuPageLinkText}>{link.name}</span>
                  </NavLink>
                ))}
              </ul>) : <></>}
              {defLangState === "ukr" ? (
              <ul className={styles.menuNavList}>
                {menuLinksUkr.map((link, ind) => (
                  <NavLink
                    to={link.redirect}
                    key={ind}
                    style={{
                      animationDelay: `${ind * 0.1 + 0.4}s`,
                      opacity: opacity ? 1 : 0,
                    }}
                    className={
                      activeMenu
                        ? styles.menuSocialsLinkActive
                        : styles.menuPageLink
                    }
                  >
                    <span className={styles.menuPageLinkText}>{link.name}</span>
                  </NavLink>
                ))}
              </ul>) : <></>}
              {defLangState === "en" ? (
              <ul className={styles.menuNavList}>
                {menuLinksEng.map((link, ind) => (
                  <NavLink
                    to={link.redirect}
                    key={ind}
                    style={{
                      animationDelay: `${ind * 0.1 + 0.4}s`,
                      opacity: opacity ? 1 : 0,
                    }}
                    className={
                      activeMenu
                        ? styles.menuSocialsLinkActive
                        : styles.menuPageLink
                    }
                  >
                    <span className={styles.menuPageLinkText}>{link.name}</span>
                  </NavLink>
                ))}
              </ul>) : <></>}
            </nav>
            <div className={styles.menuSocials}>
              <h3 className={styles.menuSocialsTitle}>
                {defLangState === "rus" ? "Мы в соцсетях" : ""}
                {defLangState === "ukr" ? "Ми в соцмережах" : ""}
                {defLangState === "en" ? "Social media" : ""}
              </h3>
              <ul className={styles.menuSocialsList}>
                <li className={styles.menuSocialsLink}>
                  <a
                    className={styles.menuSocialsCircle}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://twitter.com/AnteBadzim"
                  >

                  </a>
                </li>
                <li className={styles.menuSocialsLink}>
                  <a
                    rel="noopener noreferrer"
                    className={styles.menuSocialsCircle}
                    target="_blank"
                    href="https://www.facebook.com/favouriteprimark/"
                  >

                  </a>
                </li>
                <li className={styles.menuSocialsLink}>
                  <a
                    rel="noopener noreferrer"
                    className={styles.menuSocialsCircle}
                    target="_blank"
                    href="http://instagram.com/ante"
                  >
                    
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.leftSide}>
            <p className={styles.someText}>
            {defLangState === "rus" ? "Каждый созданный нами интернет сайт является результатом умелой комбинации маркетинговой стратегии, креативного дизайна и современных технологий разработки!" : ""}
            {defLangState === "ukr" ? "Кожен створений нами інтернет сайт є результатом вмілої комбінації маркетингової стратегіі, креативного дизайну і сучасних технологій розробки!" : ""}
            {defLangState === "en" ? "Each web site we create is the result of a skillful combination of marketing strategy, creative design and modern development technologies!" : ""}
            </p>
            <div className={styles.menuContacts}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className={styles.menuContactsLink}
                href="tel:+380678095578"
              >
                +380 67 809 55 78
              </a>{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                className={styles.menuContactsLink}
                href="mailto:EllieYelizarieva@el-c.com.ua"
              >
                EllieYelizarieva@el-c.com.ua
              </a>{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                className={styles.menuContactsLink}
                href="tel:+380663862689"
              >
                +380 66 386 26 89
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtendedMenu;
