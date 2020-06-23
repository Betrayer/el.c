import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import css from "./AboutUs.module.css";
import LearnMore from "../btn/LearnMore";

const AboutUs = () => {

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
        <h2 className={css.aboutus_title}>О нас</h2>
        <p className={css.aboutus_text}>
          Команда разработчиков EL.C состоит из исключительно квалифицированных
          кадров, поэтому каждый созданный нами сайт является результатом умелой
          комбинации креативного дизайна и современных технологий разработки.
        </p>
        <div className={css.btnWrapper}>
          <LearnMore text={'узнать подробнее'} funcToDo={toAbout} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
