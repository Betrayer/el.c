import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../header/Header";
import styles from "./aboutUsPage.module.css";
import Footer from "../../footer/Footer";

const AboutUsPage = () => {
  const [defLangState] = useState(localStorage.getItem("lang"));
  const [active, setActive] = useState(false);
  useEffect(() => {setActive(true)}, [defLangState]);

  const aboutRus = [
    {
      name: "Цель",
      text: "Запускать и сопровождать стартапы мирового класса",
      icon: "objective",
    },
    {
      name: "Продукт",
      text:
        ' Автономное, модульное, "лёгкое", уникальное и надежное Web-приложение для работы на глобальной арене',
      icon: "product",
    },
    {
      name: "Миссия",
      text:
        "Мы видим нашу миссию в том, чтобы используя все наши знания, опыт и умения правильно воплотить ваши планы и создавать удобные и гибкие сайты.",
      icon: "mission",
    },
    {
      name: "Сила",
      text:
        "Наша команда - наша сила, вкупе с грамотным распределением ролей и ответственностью.",
      icon: "strength",
    },
  ];

  const aboutUkr = [
    {
      name: "Мета",
      text: "Запускати і супроводжувати стартапи світового класу",
      icon: "objective",
    },
    {
      name: "Продукт",
      text:
        'Автономний, модульний, "легкий", унікальний та надійний Web-додаток для роботи на глобальній арені',
      icon: "product",
    },
    {
      name: "Місія",
      text:
        "Ми бачимо нашу місію в тому, щоб використовуючи всі наші знання, досвід і вміння правильно втілити ваші плани і створювати зручні та гнучкі сайти.",
      icon: "mission",
    },
    {
      name: "Сила",
      text:
        "Наша команда - наша сила, укупі з грамотним розподілом ролей і відповідальністю.",
      icon: "strength",
    },
  ];

  const aboutEng = [
    {
      name: "Goal",
      text: "Launch and accompany world-class startups",
      icon: "objective",
    },
    {
      name: "Product",
      text:
        'Standalone, modular, lightweight, unique and reliable Web application for working on the global stage',
      icon: "product",
    },
    {
      name: "Mission",
      text:
        "We see our mission in using all our knowledge, experience and skills to correctly realize your plans and create convenient and flexible sites.",
      icon: "mission",
    },
    {
      name: "Force",
      text:
        "Our team is our strength, coupled with a competent distribution of roles and responsibility.",
      icon: "strength",
    },
  ];

  return (
    <section className={styles.bg}>
      <Header />
      <div className={styles.imgWrapper}>
        <div className={styles.mainImg}></div>
        <div className={styles.mainImgTextWrapper}>
          <h3 className={styles.mainImgTitle}>
            {defLangState === "rus" ? "О нас" : ""}
            {defLangState === "ukr" ? "Про нас" : ""}
            {defLangState === "en" ? "About us" : ""}
          </h3>
          <p className={styles.mainImgText}>
            {defLangState === "rus"
              ? "Любой может сделать из простого сложное. Мы умеем превратить сложное в простое."
              : ""}
            {defLangState === "ukr"
              ? "Будь-хто може зробити з простого складне. Ми вміємо перетворити складне в просте."
              : ""}
            {defLangState === "en"
              ? "Anyone can make difficult out of simple. We can turn complex into simple."
              : ""}
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.aboutTitle}>
          {defLangState === "rus" ? "Наша философия" : ""}
          {defLangState === "ukr" ? "Наша філософія" : ""}
          {defLangState === "en" ? "Our philosophy" : ""}
        </h2>
        {defLangState === "rus" ? (
          <ul className={styles.aboutList}>
            {aboutRus.map((about, ind) => (
              <li key={ind} className={styles.aboutListTarget}>
                <img
                  className={styles.aboutListIcon}
                  alt=""
                  src={require(`../../../assets/icons/about/${about.icon}.svg`)}
                />
                <h3 className={styles.aboutListTitle}>{about.name}</h3>
                <p className={styles.aboutListMessage}>{about.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
        {defLangState === "ukr" ? (
          <ul className={styles.aboutList}>
            {aboutUkr.map((about, ind) => (
              <li style={{transitionDelay: `${ind * 0.2}s`}} key={ind} className={active ? styles.aboutListTarget : styles.aboutListTargetFirst}>
                <img
                  className={styles.aboutListIcon}
                  alt=""
                  src={require(`../../../assets/icons/about/${about.icon}.svg`)}
                />
                <h3 className={styles.aboutListTitle}>{about.name}</h3>
                <p className={styles.aboutListMessage}>{about.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
        {defLangState === "en" ? (
          <ul className={styles.aboutList}>
            {aboutEng.map((about, ind) => (
              <li key={ind} className={styles.aboutListTarget}>
                <img
                  className={styles.aboutListIcon}
                  alt=""
                  src={require(`../../../assets/icons/about/${about.icon}.svg`)}
                />
                <h3 className={styles.aboutListTitle}>{about.name}</h3>
                <p className={styles.aboutListMessage}>{about.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default withRouter(AboutUsPage);
