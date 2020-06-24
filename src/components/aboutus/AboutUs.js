import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import css from "./AboutUs.module.css";
import LearnMore from "../btn/LearnMore";

const AboutUs = () => {
  const [arrow, setArrow] = useState(false);
  const [defLangState] = useState(localStorage.getItem("lang"));

  useEffect(() => {}, [defLangState]);
  const history = useHistory();

const toAbout = () => {
  history.push("/about");
};

  return (
    <section className={css.aboutus_container}>
      <div className={css.aboutus_box}>
        <img
          className={css.aboutus_cirlce}
          src={require("../../assets/photos/aboutus_circle.svg")}
          alt="aboutus_circle"
        />
        <h2 className={css.aboutus_title}>
          {defLangState === "rus" ? "О нас" : ""}
          {defLangState === "ukr" ? "Про нас" : ""}
          {defLangState === "en" ? "About Us" : ""}
        </h2>
        <p className={css.aboutus_text}>
          {defLangState === "rus"
            ? "Команда разработчиков EL-C состоит из исключительно квалифицированных кадров, поэтому каждый созданный нами сайт является результатом умелой комбинации креативного дизайна и современных технологий разработки!"
            : ""}
          {defLangState === "ukr"
            ? "Команда розробників EL-C складається з виключно кваліфікованих кадрів, тому кожен створений нами сайт є результатом вмілої комбінації креативного дизайну і сучасних технологій розробки!"
            : ""}
          {defLangState === "en"
            ? "The EL-C development team consists of exclusively qualified personnel, so each site we create is the result of a skillful combination of creative design and modern development technologies!"
            : ""}
        </p>
        <button
          onMouseOver={() => setArrow(true)}
          onMouseLeave={() => setArrow(false)}
          className={css.learnMore}
        >
          <span className={css.circle} aria-hidden="true">
            {arrow ? (
              <span className={css.arrow}></span>
            ) : (
              <span className={css.icon}></span>
            )}
          </span>
          <span className={css.buttonText}>
            {defLangState === "rus" ? "Узнать подробнее" : ""}
            {defLangState === "ukr" ? "Дізнатись детальніше" : ""}
            {defLangState === "en" ? "Find out more" : ""}
          </span>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
