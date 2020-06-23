import React from "react";
import css from "./ServicesPage.module.css";

const ServicesPage = () => {
  return (
    <div className={css.servicespage_container}>
      <h2>Услуги</h2>
      <div className={css.serviceslist_box}>
        <ul className={css.serviceslist}>
          <li className={css.serviceslist_item}>
            <h3 className={css.serviceslist_item_title}>Lorem</h3>
            <p className={css.serviceslist_item_text}>LoremLorem</p>
          </li>
          <li className={css.serviceslist_item}>
            <h3 className={css.serviceslist_item_title}>Lorem</h3>
            <p className={css.serviceslist_item_text}>LoremLorem</p>
          </li>
          <li className={css.serviceslist_item}>
            <h3 className={css.serviceslist_item_title}>Lorem</h3>
            <p className={css.serviceslist_item_text}>LoremLorem</p>
          </li>
          <li className={css.serviceslist_item}>
            <h3 className={css.serviceslist_item_title}>Lorem</h3>
            <p className={css.serviceslist_item_text}>LoremLorem</p>
          </li>
          <li className={css.serviceslist_item}>
            <h3 className={css.serviceslist_item_title}>Lorem</h3>
            <p className={css.serviceslist_item_text}>LoremLorem</p>
          </li>
          <li className={css.serviceslist_item}>
            <h3 className={css.serviceslist_item_title}>Lorem</h3>
            <p className={css.serviceslist_item_text}>LoremLorem</p>
          </li>
        </ul>
      </div>
      <div className={css.methodics}>
        <h2 className={css.methodics_title}>Методика работы</h2>
        <p className={css.methodics_text}>
          пециалисты работают в digital-сфере более 7 лет. За это время мы
          разработали более 500+ успешных проектов. Основываясь на своем опыте и
          знании рынка, мы с уверенностью можем сказать, что будет работать, а
          что — нет. Заказывая сайт в нашей студии, вы получаете работающие
          решения, необходимые именно вашему бизнесу.
        </p>
        <p className={css.methodics_text}>
          Сотрудничая с нами, вы будете не клиентом, а нашим партнером.
          Благодаря этому мы будем развивать ваш бизнес как собственный. Мы так
          же как и вы заинтересованы в успехе проекта, поскольку ваша успешность
          будет нашей рекламой.
        </p>
      </div>
      <div className={css.questions}>
          <h2 className={css.questions_title}>Часто задаваемые вопросы</h2>
          <ul className={css.questions_list}>
              <li className={css.questions_item}>
                <h3 className={css.questions_item_title}></h3>
                <p className={css.questions_item_text}></p>
              </li>
              <li className={css.questions_item}>
                <h3 className={css.questions_item_title}></h3>
                <p className={css.questions_item_text}></p>
              </li>
              <li className={css.questions_item}>
                <h3 className={css.questions_item_title}></h3>
                <p className={css.questions_item_text}></p>
              </li>
              <li className={css.questions_item}>
                <h3 className={css.questions_item_title}></h3>
                <p className={css.questions_item_text}></p>
              </li>
          </ul>
      </div>
    </div>
  );
};

export default ServicesPage;
