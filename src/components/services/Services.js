import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { useHistory } from "react-router-dom";
import css from "./Services.module.css";
import LearnMore from "../btn/LearnMore";

const TEXTS = ["Услуги", "Сервис", "Поддержка"];

const Services = () => {
  const [index, setIndex] = useState(0);
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
                Разрабатываем мобильные приложения для iOS и Android
              </p>
            </li>
            <li className={css.service_item3}>
              <h3 className={css.services_item_title}>
                SMM/SEO
                <br />
                Продвижение
              </h3>
              <p className={css.services_item_text}>
                Ведем социальные сети и создаем системы привлечения клиентов,
                продвигаем сайты в поисковых системах.
              </p>
            </li>
            <li className={css.service_item4}>
              <h3 className={css.services_item_title}>Проработка макета</h3>
              <p className={css.services_item_text}>
                Дизайн сайтов любой сложности - низкие и высокие бюджеты, дизайн
                магазинов, промо-сайтов, сайтов компаний.
              </p>
            </li>
            <li className={css.service_item5}>
              <h3 className={css.services_item_title}>Разработка сайта</h3>
              <p className={css.services_item_text}>
                Интернет-магазин, сайт компании, сайт-визитка, проекты "под
                ключ".
              </p>
            </li>
          </ul>
        </div>
        
      </div>
      <div className={css.btnWrapper}>
          {defLangState === "rus" ? (
            <LearnMore text={"Узнать подробнее"} funcToDo={toServices} />
          ) : (
            <></>
          )}
          {defLangState === "ukr" ? (
            <LearnMore text={"Дізнатись більше"} funcToDo={toServices} />
          ) : (
            <></>
          )}
          {defLangState === "en" ? (
            <LearnMore text={"Find out more"} funcToDo={toServices} />
          ) : (
            <></>
          )}
        </div>
    </section>
  );
};

export default Services;
