import React from "react";
import styles from "./extendedMenu.module.css";

const ExtendedMenu = ({ activeMenu }) => {
  const menuLinks = ["Портфолио", "Услуги", "О нас", "Блог"];

  return (
    <>
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
              <h3 className={styles.menuSocialsTitle}>Мы в соцсетях</h3>
              <ul className={styles.menuSocialsList}>
                {/* для ежика */}
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
                {/* для ежика */}
              </ul>
            </div>
          </div>
          <div className={styles.leftSide}>
            <p className={styles.someText}>
              Самые свежие работы каждый созданный нами интернет сайт является
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
