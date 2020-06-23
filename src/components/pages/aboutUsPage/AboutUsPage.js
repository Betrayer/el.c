import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../../header/Header";
import styles from "./aboutUsPage.module.css";
import Footer from "../../footer/Footer";

const AboutUsPage = () => {
  const aboutRus = [
    {
      name: "Цель",
      text: "Запускать стартапы мирового класса.",
      icon: "objective",
    },
    {
      name: "Продукт",
      text:
        "Техническая экспертиза, сильный менеджмент и дополнительные сервисы в виде маркетинга, нишевых консультантов, выходов на инвесторов и т.д.",
      icon: "product",
    },
    {
      name: "Миссия",
      text:
        "Мы технологичная компания, которая помогает строить и выводить на рынок стартапы, а также развивать бизнес клиентов путем внедрения в них IT-инноваций.",
      icon: "mission",
    },
    {
      name: "Сила",
      text: "Стартапы и программные продукты для бизнеса на глобальной арене.",
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
        <h2 className={styles.aboutTitle}>Блог</h2>
        <ul className={styles.aboutList}>
          {aboutRus.map((about, ind) => (
            <li key={ind} className={styles.aboutListTarget}>
              <h3 className={styles.aboutListTitle}>{about.name}</h3>
              <p className={styles.aboutListMessage}>{about.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </section>
  );
};

export default withRouter(AboutUsPage);
