import React, { useState } from "react";
import Slide from "react-reveal/Slide";
import css from "./ServicesPage.module.css";

const ServicesPage = () => {
  const [slide1, handleSlide1] = useState(false);
  const [slide2, handleSlide2] = useState(false);
  const [slide3, handleSlide3] = useState(false);
  const [slide4, handleSlide4] = useState(false);

  const handleClick = (e) => {
    if (e.target.name === "button1") {
      handleSlide1(!slide1);
    }
    if (e.target.name === "button2") {
      handleSlide2(!slide2);
    }
    if (e.target.name === "button3") {
      handleSlide3(!slide3);
    }
    if (e.target.name === "button4") {
      handleSlide4(!slide4);
    }
  };

  return (
    <div className={css.servicespage_container}>
      <div className={css.serviceslist_box}>
        <h2 className={css.services_title}>Услуги</h2>
        <ul className={css.serviceslist}>
          <li className={css.serviceslist_item1}>
            <h3 className={css.serviceslist_item_title}>Web</h3>
            <p className={css.services_item_text}>
              Мы создаем и запускаем работающие сайты, интернет-магазины и
              web-сервисы.{" "}
            </p>
          </li>
          <li className={css.serviceslist_item2}>
            <h3 className={css.serviceslist_item_title}>Mobile</h3>
            <p className={css.services_item_text}>
              Разработка нативных мобильных приложений для стартапов и бизнеса
              на платформах iOS и Android.
            </p>
          </li>
          <li className={css.serviceslist_item3}>
            <h3 className={css.serviceslist_item_title}>Design</h3>
            <p className={css.services_item_text}>
              Создадим индивидуальный и уникальный дизайн, соответствующий вашим
              пожеланиям.
            </p>
          </li>
          <li className={css.serviceslist_item4}>
            <h3 className={css.serviceslist_item_title}>SMM</h3>
            <p className={css.services_item_text}>
              Привлечем внимание и трафик к бренду/продукту через социальные
              сети.
            </p>
          </li>
          <li className={css.serviceslist_item5}>
            <h3 className={css.serviceslist_item_title}>SEO</h3>
            <p className={css.services_item_text}>
              Мы занимаемся результативным продвижением сайтов в интернете.
            </p>
          </li>
          <li className={css.serviceslist_item6}>
            <h3 className={css.serviceslist_item_title}>Support</h3>
            <p className={css.services_item_text}>
              После удачного запуска вашего продукта обеспечим поддержку его
              функционирования.
            </p>
          </li>
        </ul>
      </div>
      <div className={css.methodics}>
        <h2 className={css.services_title}>Методика работы</h2>
        <p className={css.services_item_text}>
          Специалисты работают в digital-сфере более 7 лет. За это время мы
          разработали более 500+ успешных проектов. Основываясь на своем опыте и
          знании рынка, мы с уверенностью можем сказать, что будет работать, а
          что — нет. Заказывая сайт в нашей студии, вы получаете работающие
          решения, необходимые именно вашему бизнесу.
        </p>
        <p className={css.services_item_text}>
          Сотрудничая с нами, вы будете не клиентом, а нашим партнером.
          Благодаря этому мы будем развивать ваш бизнес как собственный. Мы так
          же как и вы заинтересованы в успехе проекта, поскольку ваша успешность
          будет нашей рекламой.
        </p>
      </div>
      <div className={css.questions}>
        <h2 className={css.services_title}>Часто задаваемые вопросы</h2>
        <ul className={css.questions_list}>
          <li className={css.questions_item}>
            <button
              className={css.questions_button}
              onClick={(e) => handleClick(e)}
              name="button1"
            ></button>
            <h3 className={css.questions_item_title}>
              Сколько стоит разработка проекта?
            </h3>
            <Slide top when={slide1}>
              <div>
                {" "}
                <p className={css.questions_item_text}>
                  Стоимость проекта может быть совершенно разной, в зависимости
                  от сложности функционала, дизайна, верстки, интеграции и т.д.
                  Поэтому для уточнения стоимости обратитесь к нашим
                  специалистам.
                </p>
              </div>
            </Slide>
          </li>
          <li className={css.questions_item}>
            <button
              className={css.questions_button}
              onClick={handleClick}
              name="button2"
            ></button>
            <h3 className={css.questions_item_title}>Почемы выбирают нас?</h3>
            <Slide top when={slide2}>
              <div>
                {" "}
                <p className={css.questions_item_text}>Потому что мы лучшие.</p>
              </div>
            </Slide>
          </li>
          <li className={css.questions_item}>
            <button
              className={css.questions_button}
              onClick={handleClick}
              name="button3"
            ></button>
            <h3 className={css.questions_item_title}>
              Делаете ли вы продвижение?
            </h3>
            <Slide top when={slide3}>
              <div>
                {" "}
                <p className={css.questions_item_text}>Да, делаем.</p>
              </div>
            </Slide>
          </li>
          <li className={css.questions_item}>
            <button
              className={css.questions_button}
              onClick={handleClick}
              name="button4"
            ></button>
            <h3 className={css.questions_item_title}>
              Какие сроки исполнения?
            </h3>
            <Slide top when={slide4}>
              <div>
                {" "}
                <p className={css.questions_item_text}>
                  Как только, так сразу.
                </p>
              </div>
            </Slide>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesPage;
