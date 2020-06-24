import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../../header/Header";
import styles from "./aboutUsPage.module.css";
import Footer from "../../footer/Footer";

const AboutUsPage = () => {
  const aboutRus = [
    {
      name: "Цель",
      text: "Запускать и сопровождать стартапы мирового класса",
      icon: "objective",
    },
    {
      name: "Продукт",
      text:
       ' Автономное, модульное, "лёгкое", уникальное и надежное Web-приложение для работы па глобальной арене',
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
      text: "Наша команда - наша сила, вкупе с грамотным распределением ролей и ответственностью.",
      icon: "strength",
    },
  ];

  return (
    <section className={styles.bg}>
      <Header />
      <div className={styles.imgWrapper}>
        <div className={styles.mainImg}></div>
        <div className={styles.mainImgTextWrapper}>
          <h3 className={styles.mainImgTitle}>О нас</h3>
          <p className={styles.mainImgText}>Любой может сделать из простого сложное. Мы умеем превратить сложное в простое.</p>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.aboutTitle}>Наша философия</h2>
        <div className={styles.aboutListWrapper}>
        <ul className={styles.aboutList}>
          {aboutRus.map((about, ind) => (
            <li key={ind} className={styles.aboutListTarget}>
              <img className={styles.aboutListIcon} alt="" src={require(`../../../assets/icons/about/${about.icon}.svg`)} />
              <h3 className={styles.aboutListTitle}>{about.name}</h3>
              <p className={styles.aboutListMessage}>{about.text}</p>
            </li>
          ))}
        </ul></div>
      </div>
      <Footer />
    </section>
  );
};

export default withRouter(AboutUsPage);
