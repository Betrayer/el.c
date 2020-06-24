import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { useHistory } from "react-router-dom";
import css from "./Services.module.css";
import LearnMore from "../btn/LearnMore";

const TEXTSRUS = ["Услуги", "Сервис", "Поддержка"];
const TEXTSUKR = ["Послуги", "Сервіс", "Підтримка"];
const TEXTSENG = ["Services", "Service", "Support"];

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
    if (defLangState === "rus") {
      if (index === TEXTSRUS.length) {
        setTimeout(() => setIndex(1), 3000);
      }
      if (index < TEXTSRUS.length) {
        setTimeout(() => setIndex(index + 1), 3000);
      }
    } else if (defLangState === "ukr") {
      if (index === TEXTSUKR.length) {
        setTimeout(() => setIndex(1), 3000);
      }
      if (index < TEXTSUKR.length) {
        setTimeout(() => setIndex(index + 1), 3000);
      }
    } else {
      if (index === TEXTSENG.length) {
        setTimeout(() => setIndex(1), 3000);
      }
      if (index < TEXTSENG.length) {
        setTimeout(() => setIndex(index + 1), 3000);
      }
    }
  };

  return (
    <section className={css.services_container}>
      <div className={css.services_wrapper}>
        {defLangState === "rus" ? (
          <h2 className={css.services_title}>
            <TextTransition
              text={TEXTSRUS[index % TEXTSRUS.length]}
              springConfig={presets.wobbly}
            />
          </h2>
        ) : (
          <></>
        )}
        {defLangState === "ukr" ? (
          <h2 className={css.services_title}>
            <TextTransition
              text={TEXTSUKR[index % TEXTSUKR.length]}
              springConfig={presets.wobbly}
            />
          </h2>
        ) : (
          <></>
        )}
        {defLangState === "en" ? (
          <h2 className={css.services_title}>
            <TextTransition
              text={TEXTSENG[index % TEXTSENG.length]}
              springConfig={presets.wobbly}
            />
          </h2>
        ) : (
          <></>
        )}
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
                {defLangState === "rus" ? "Сопровождение" : ""}
                {defLangState === "ukr" ? "Супровід" : ""}
                {defLangState === "en" ? "Support" : ""}
                <br />
                {defLangState === "rus" ? "и обслуживание" : ""}
                {defLangState === "ukr" ? "та обслуговування" : ""}
                {defLangState === "en" ? "and service" : ""}
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
                {defLangState === "rus"
                  ? "Разрабатываем мобильные приложения для iOS и Android"
                  : ""}
                {defLangState === "ukr"
                  ? "Розробляємо мобільні додатки для iOS і Android"
                  : ""}
                {defLangState === "en"
                  ? "We develop mobile applications for iOS and Android"
                  : ""}
              </p>
            </li>
            <li className={css.service_item3}>
              <h3 className={css.services_item_title}>
                SMM/SEO
                <br />
                {defLangState === "rus" ? "Продвижение" : ""}
                {defLangState === "ukr" ? "Просування" : ""}
                {defLangState === "en" ? "Promotion" : ""}
              </h3>
              <p className={css.services_item_text}>
                {defLangState === "rus"
                  ? "Ведем социальные сети и создаем системы привлечения клиентов, продвигаем сайты в поисковых системах."
                  : ""}
                {defLangState === "ukr"
                  ? "Ведемо соціальні мережі і створюємо системи залучення клієнтів, просуваємо сайти в пошукових системах."
                  : ""}
                {defLangState === "en"
                  ? "We conduct social networks and create customer acquisition systems, promote websites in search engines."
                  : ""}
              </p>
            </li>
            <li className={css.service_item4}>
              <h3 className={css.services_item_title}>
                {defLangState === "rus" ? "Проработка макета" : ""}
                {defLangState === "ukr" ? "Проработка макета" : ""}
                {defLangState === "en" ? "Layout development" : ""}
              </h3>
              <p className={css.services_item_text}>
                {defLangState === "rus"
                  ? "Дизайн сайтов любой сложности - низкие и высокие бюджеты, дизайн магазинов, промо-сайтов, сайтов компаний."
                  : ""}
                {defLangState === "ukr"
                  ? "Дизайн сайтів будь-якої складності - низькі і високі бюджети, дизайн магазинів, промо-сайтів, сайтів компаній."
                  : ""}
                {defLangState === "en"
                  ? "Website design of any complexity - low and high budgets, design of stores, promotional sites, company websites."
                  : ""}
              </p>
            </li>
            <li className={css.service_item5}>
              <h3 className={css.services_item_title}>
                {defLangState === "rus" ? "Разработка сайта" : ""}
                {defLangState === "ukr" ? "Розробка сайту" : ""}
                {defLangState === "en" ? "Website development" : ""}
              </h3>
              <p className={css.services_item_text}>
                {defLangState === "rus"
                  ? 'Интернет-магазин, сайт компании, сайт-визитка, проекты "под ключ".'
                  : ""}
                {defLangState === "ukr"
                  ? 'Інтернет-магазин, сайт компанії, сайт-візитка, проекти "під ключ".'
                  : ""}
                {defLangState === "en"
                  ? "Online store, company website, business card website, turnkey projects."
                  : ""}
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
