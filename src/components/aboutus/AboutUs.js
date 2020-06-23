import React, {useState} from "react";
import css from "./AboutUs.module.css";

const AboutUs = () => {

const [arrow, setArrow] = useState(false);

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
          комбинации креативного дизайна и современных технологий разработки!
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
          <span className={css.buttonText}>узнать подробнее</span>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
