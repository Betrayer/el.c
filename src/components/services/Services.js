import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import css from "./Services.module.css";

const TEXTS = ["Услуги", "Сервис", "Поддержка"];

const Services = () => {
  const [index, setIndex] = useState(0);
  const [arrow, setArrow] = useState(false);

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
        <img
          className={css.services_completepic}
          src={require("../../assets/photos/complete_pic2.svg")}
          alt="services_pic"
        />
        <ul className={css.services_list}>
          <li className={css.service_item1}>
            <h3 className={css.services_item_title}>Сопровожение <br/> и обслуживание</h3>
          </li>
          <li className={css.service_item2}>
            <h3 className={css.services_item_title}>Мобильные приложения</h3>
          </li>
          <li className={css.service_item3}>
            <h3 className={css.services_item_title}>SMM/SEO<br/>Продвижение</h3>
          </li>
          <li className={css.service_item4}>
            <h3 className={css.services_item_title}>Проработка макета</h3>
          </li>
          <li className={css.service_item5}>
            <h3 className={css.services_item_title}>Разработка сайта</h3>
          </li>
        </ul>
        </div>
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

export default Services;
