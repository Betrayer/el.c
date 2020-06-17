import React, { useState } from "react";
import styles from "./extendedMenu.module.css";

const ExtendedMenu = ({ activeMenu }) => {
  const menuLinks = ["Портфолио", "Услуги", "О нас", "Блог"];

  return (
    <>
      {/* <div style={{ backgroundColor: "#000", padding: "20px" }}>
        <button
          onClick={() => setActive(!active)}
          className={active ? styles.menuActive : styles.menu}
        >
          <svg className={styles.menuSvg} viewBox="0 0 64 48">
            <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
            <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
            <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
          </svg>
        </button>
      </div> */}
      <div className={styles.menuWrapper}>
        <div
          className={
            activeMenu ? styles.menuWhiteLayerActive : styles.menuWhiteLayer
          }
        ></div>
        <div className={activeMenu ? styles.menuBgLayerActive : styles.menuBgLayer}>
          <div className={styles.rightSide}>
            <nav className={styles.menuNav}>
              <ul className={styles.menuNavList}>
                {menuLinks.map((link, ind) => (
                  <li
                    key={ind}
                    style={{ transitionDelay: `${ind * 0.1 + 0.4}s` }}
                    className={
                        activeMenu
                        ? styles.menuSocialsLinkActive
                        : styles.menuPageLink
                    }
                  >
                    <span className={styles.menuPageLinkText}>{link}</span>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.menuSocials}>
              <h3 className={styles.menuSocialsTitle}>Social media</h3>
              <ul className={styles.menuSocialsList}>
                <li className={styles.menuSocialsLink}>
                  <a
                    ç
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://twitter.com/AnteBadzim"
                  >
                    <span className={styles.menuSocialsIcon}></span>
                  </a>
                </li>
                <li className={styles.menuSocialsLink}>
                  <a
                    rel="noopener noreferrer"
                    className={styles.menuSocialsCircle}
                    target="_blank"
                    href="https://www.facebook.com/favouriteprimark/"
                  >
                    <span className={styles.menuSocialsIcon}></span>
                  </a>
                </li>
                <li className={styles.menuSocialsLink}>
                  <a
                    rel="noopener noreferrer"
                    className={styles.menuSocialsCircle}
                    target="_blank"
                    href="http://instagram.com/ante"
                  >
                    <span className={styles.menuSocialsIcon}></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.leftSide}>
            <p className={styles.someText}>
              Самые свежие работы Каждый созданный нами интернет сайт является
              результатом умелой комбинации маркетинговой тратегии, креативного
              дизайна и современных технологий разработки!
            </p>
            <div className={styles.menuContacts}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className={styles.menuContactsLink}
                href="tel:123-456-7890"
              >
                +123-456-7890
              </a>{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                className={styles.menuContactsLink}
                href="mailto:yelizarieva.ellie@gmail.com"
              >
                email1@gmail.com
              </a>{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                className={styles.menuContactsLink}
                href="mailto:StarDestroyer@ukr.net"
              >
                email2@mail.com
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtendedMenu;
