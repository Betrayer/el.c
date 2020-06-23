import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { useHistory } from "react-router-dom";
import css from "./Services.module.css";

const TEXTS = ["Услуги", "Сервис", "Поддержка"];

const Services = () => {
  const [index, setIndex] = useState(0);
  const [arrow, setArrow] = useState(false);
  const [defLangState] = useState(localStorage.getItem("lang"));

  const history = useHistory();

  const toServices = () => {
    history.push("/services");
  };
  useEffect(() => {}, [defLangState]);

  useEffect(() => {
    indexChange();
  }, [index]);

  const indexChange = () => {
    if (index === TEXTS.length) {
      setTimeout(() => setIndex(1), 3000);
    }
    if (index < TEXTS.length) {
      setTimeout(() => setIndex(index + 1), 3000);
    }
  };

  return (
    <section className={css.services_container}>
      <div className={css.services_wrapper}>
        <h2 className={css.services_title}>
          <TextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.wobbly}
          />
        </h2>
        <div className={css.services_box}>
          <img
            className={css.services_cirlce1}
            src={require("../../assets/photos/services_circle1.svg")}
            alt="services_circle"
          />
          <img
            className={css.services_cirlce2}
            src={require("../../assets/photos/services_circle2.svg")}
            alt="services_circle"
          />
          <ul className={css.services_list}>
            <li className={css.service_item1}>
              <h3 className={css.services_item_title}>
                {defLangState === "rus" ? "Сопровождение и обслуживание" : ""}
                {defLangState === "ukr"
                  ? "Супровід <br /> та обслуговування"
                  : ""}
                {defLangState === "en" ? "Escort <br /> and service" : ""}
              </h3>
              <p className={css.services_item_text}>
                {defLangState === "rus"
                  ? "Хостинг, техническое сопровождение, контроль работоспособности"
                  : ""}
                {defLangState === "ukr"
                  ? "Хостинг, технічний супровід, контроль працездатності"
                  : ""}
                {defLangState === "en"
                  ? "Hosting, technical support, performance monitoring"
                  : ""}
              </p>
            </li>
            <li className={css.service_item2}>
              <h3 className={css.services_item_title}>
                {defLangState === "rus" ? "Мобильные приложения" : ""}
                {defLangState === "ukr" ? "Мобільні додатки" : ""}
                {defLangState === "en" ? "Mobile applications" : ""}
              </h3>
              <p className={css.services_item_text}>
                Хостинг, техническое сопровождение, контроль работоспособности
              </p>
            </li>
            <li className={css.service_item3}>
              <h3 className={css.services_item_title}>
                SMM/SEO
                <br />
                Продвижение
              </h3>
              <p className={css.services_item_text}>
                Хостинг, техническое сопровождение, контроль работоспособности
              </p>
            </li>
            <li className={css.service_item4}>
              <h3 className={css.services_item_title}>Проработка макета</h3>
              <p className={css.services_item_text}>
                Хостинг, техническое сопровождение, контроль работоспособности
              </p>
            </li>
            <li className={css.service_item5}>
              <h3 className={css.services_item_title}>Разработка сайта</h3>
              <p className={css.services_item_text}>
                Хостинг, техническое сопровождение, контроль работоспособности
              </p>
            </li>
          </ul>
        </div>
        <button
          onMouseOver={() => setArrow(true)}
          onMouseLeave={() => setArrow(false)}
          onClick={toServices}
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

export default Services;
