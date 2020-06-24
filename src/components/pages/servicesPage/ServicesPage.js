import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import servicesPageTransition from "../../transitions/servicesPageTransition.module.css";
import css from "./ServicesPage.module.css";

const ServicesPage = () => {
  const [slide1, handleSlide1] = useState(false);
  const [slide2, handleSlide2] = useState(false);
  const [slide3, handleSlide3] = useState(false);
  const [slide4, handleSlide4] = useState(false);
  const [anim, setAnim] = useState(false);
  const [defLangState] = useState(localStorage.getItem("lang"));

  const handleClick = (e) => {
    setAnim(!anim);
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

  useEffect(() => {}, [defLangState]);

  return (
    <>
      <Header />
      <div className={css.servicespage_container}>
        <div className={css.servicespage_box}>
          <div className={css.serviceslist_box}>
            <h2 className={css.services_title}>
              {defLangState === "rus" ? "Услуги" : ""}
              {defLangState === "ukr" ? "Послуги" : ""}
              {defLangState === "en" ? "Services" : ""}
            </h2>
            <ul className={css.serviceslist}>
              <li className={css.serviceslist_item1}>
                <h3 className={css.serviceslist_item_title}>Web</h3>
                <p className={css.services_item_text}>
                  {defLangState === "rus"
                    ? "Мы создаем и запускаем работающие сайты, интернет-магазины и web-сервисы."
                    : ""}
                  {defLangState === "ukr"
                    ? "Ми створюємо і запускаємо працюючі сайти, інтернет-магазини та web-сервіси."
                    : ""}
                  {defLangState === "en"
                    ? "We create and launch working sites, online stores and web services."
                    : ""}
                </p>
              </li>
              <li className={css.serviceslist_item2}>
                <h3 className={css.serviceslist_item_title}>Mobile</h3>
                <p className={css.services_item_text}>
                  {defLangState === "rus"
                    ? "Разработка нативных мобильных приложений для стартапов и бизнеса на платформах iOS и Android."
                    : ""}
                  {defLangState === "ukr"
                    ? "Розробка натівних мобільних додатків для стартапів і бізнесу на платформах iOS і Android."
                    : ""}
                  {defLangState === "en"
                    ? "Development of native mobile applications for startups and businesses on iOS and Android."
                    : ""}
                </p>
              </li>
              <li className={css.serviceslist_item3}>
                <h3 className={css.serviceslist_item_title}>Design</h3>
                <p className={css.services_item_text}>
                  {defLangState === "rus"
                    ? "Создадим индивидуальный и уникальный дизайн, соответствующий вашим пожеланиям."
                    : ""}
                  {defLangState === "ukr"
                    ? "Створимо індивідуальний і унікальний дизайн, відповідно до ваших бажаннь."
                    : ""}
                  {defLangState === "en"
                    ? "We will create an individual and unique design that meets your wishes."
                    : ""}
                </p>
              </li>
              <li className={css.serviceslist_item4}>
                <h3 className={css.serviceslist_item_title}>SMM</h3>
                <p className={css.services_item_text}>
                  {defLangState === "rus"
                    ? "Привлечем внимание и трафик к бренду/продукту через социальные сети."
                    : ""}
                  {defLangState === "ukr"
                    ? "Привернемо увагу і трафік до бренду/продукту через соціальні мережі."
                    : ""}
                  {defLangState === "en"
                    ? "We will attract attention and traffic to the brand/product through social networks."
                    : ""}
                </p>
              </li>
              <li className={css.serviceslist_item5}>
                <h3 className={css.serviceslist_item_title}>SEO</h3>
                <p className={css.services_item_text}>
                  {defLangState === "rus"
                    ? "Мы занимаемся результативным продвижением сайтов в интернете."
                    : ""}
                  {defLangState === "ukr"
                    ? "Ми займаємося результативним просуванням сайтів в інтернеті."
                    : ""}
                  {defLangState === "en"
                    ? "We are engaged in productive website promotion on the Internet."
                    : ""}
                </p>
              </li>
              <li className={css.serviceslist_item6}>
                <h3 className={css.serviceslist_item_title}>Support</h3>
                <p className={css.services_item_text}>
                  {defLangState === "rus"
                    ? "После удачного запуска вашего продукта обеспечим поддержку его функционирования."
                    : ""}
                  {defLangState === "ukr"
                    ? "Після вдалого запуску вашого продукту забезпечимо підтримку його функціонування."
                    : ""}
                  {defLangState === "en"
                    ? "After the successful launch of your product, we will provide support for its functioning."
                    : ""}
                </p>
              </li>
            </ul>
          </div>
          <div className={css.methodics}>
            <h2 className={css.services_title}>
              {defLangState === "rus" ? "Методика работы" : ""}
              {defLangState === "ukr" ? "Методика роботи" : ""}
              {defLangState === "en" ? "Working methods" : ""}
            </h2>
            <ul className={css.methodics_list}>
              <li className={css.methodics_item}>
                <p className={css.services_item_text}>
                  {defLangState === "rus"
                    ? "Основываясь на своем опыте и знании рынка, мы с уверенностью можем сказать, что будет работать, а что — нет. Заказывая сайт в нашей студии, вы получаете работающие решения, необходимые именно вашему бизнесу."
                    : ""}
                  {defLangState === "ukr"
                    ? "Грунтуючись на своєму досвіді і знанні ринку, ми з упевненістю можемо сказати, що буде працювати, а що - ні. Замовляючи сайт в нашій студії, ви отримуєте працюючі рішення, необхідні саме вашому бізнесу."
                    : ""}
                  {defLangState === "en"
                    ? "Based on our experience and knowledge of the market, we can confidently say what will work and what will not. When ordering a site in our studio, you get working solutions that are necessary for your business."
                    : ""}
                </p>
              </li>
              <li className={css.methodics_item}>
                <p className={css.services_item_text}>
                  {defLangState === "rus"
                    ? "Сотрудничая с нами, вы будете не клиентом, а нашим партнером. Благодаря этому мы будем развивать ваш бизнес как собственный. Мы так же как и вы заинтересованы в успехе проекта, поскольку ваша успешность будет нашей рекламой."
                    : ""}
                  {defLangState === "ukr"
                    ? "Співпрацюючи з нами, ви будете не клієнтом, а нашим партнером. Завдяки цьому ми будемо розвивати ваш бізнес як власний. Ми так само як і ви зацікавлені в успіху проекту, оскільки ваша успішність буде нашою рекламою."
                    : ""}
                  {defLangState === "en"
                    ? "Cooperating with us, you will not be a client, but our partner. Thanks to this, we will develop your business as our own. We are just as interested in the success of the project as your success will be our advertisement."
                    : ""}
                </p>
              </li>
            </ul>
          </div>
          <div className={css.questions}>
            <h2 className={css.services_title}>
              {defLangState === "rus" ? "Часто задаваемые вопросы" : ""}
              {defLangState === "ukr" ? "Часті питання" : ""}
              {defLangState === "en" ? "Frequently asked Questions" : ""}
            </h2>
            <ul className={css.questions_list}>
              <li
                className={
                  slide1 ? css.animated_questions_item : css.questions_item
                }
              >
                <button
                  className={slide1 ? css.questions_button_minus : css.questions_button }
                  onClick={handleClick}
                  name="button1"
                ></button>
                <h3 className={css.questions_item_title}>
                  {defLangState === "rus"
                    ? "Сколько стоит разработка проекта?"
                    : ""}
                  {defLangState === "ukr"
                    ? "Скільки коштує розробка проекту?"
                    : ""}
                  {defLangState === "en"
                    ? "How much does a project development cost?"
                    : ""}
                </h3>
                <CSSTransition
                  in={slide1}
                  classNames={servicesPageTransition}
                  timeout={500}
                  unmountOnExit
                >
                  <p className={css.questions_item_text}>
                    {defLangState === "rus"
                      ? "Стоимость проекта может быть совершенно разной, в зависимости от сложности функционала, дизайна, верстки, интеграции и т.д. Поэтому для уточнения стоимости обратитесь к нашим специалистам."
                      : ""}
                    {defLangState === "ukr"
                      ? "Вартість проекту може бути абсолютно різною, залежно від складності функціоналу, дизайну, верстки, інтеграції і т.д. Тому для уточнення вартості зверніться до наших фахівців."
                      : ""}
                    {defLangState === "en"
                      ? "The project cost can be completely different, depending on the complexity of the functionality, design, layout, integration, etc. Therefore, to clarify the cost, contact our specialists."
                      : ""}
                  </p>
                </CSSTransition>
              </li>
              <li
                className={
                  slide2 ? css.animated_questions_item : css.questions_item
                }
              >
                <button
                  className={slide2 ? css.questions_button_minus : css.questions_button}
                  onClick={handleClick}
                  name="button2"
                ></button>
                <h3 className={css.questions_item_title}>
                  {defLangState === "rus" ? "Почему выбирают нас?" : ""}
                  {defLangState === "ukr" ? "Чому вибирають нас?" : ""}
                  {defLangState === "en" ? "Why choose us?" : ""}
                </h3>
                <CSSTransition
                  in={slide2}
                  classNames={servicesPageTransition}
                  timeout={500}
                  unmountOnExit
                >
                  <p className={css.questions_item_text}>
                    {defLangState === "rus"
                      ? "Наша команда состоит из квалифицированных кадров, поэтому каждый созданный нами сайт является результатом умелой комбинации креативного дизайна и современных технологий разработки."
                      : ""}
                    {defLangState === "ukr"
                      ? "Наша команда складається з кваліфікованих кадрів, тому кожен створений нами сайт є результатом вмілої комбінації креативного дизайну і сучасних технологій розробки."
                      : ""}
                    {defLangState === "en"
                      ? "Our team consists of qualified personnel, so each site we create is the result of a skillful combination of creative design and modern development technologies."
                      : ""}
                  </p>
                </CSSTransition>
              </li>
              {/* <li
                className={
                  slide3 ? css.animated_questions_item : css.questions_item
                }
              >
                <button
                  className={slide3 ? css.questions_button_minus : css.questions_button}
                  onClick={handleClick}
                  name="button3"
                ></button>
                <h3 className={css.questions_item_title}>
                  {defLangState === "rus" ? "Делаете ли вы продвижение?" : ""}
                  {defLangState === "ukr" ? "Чи робите ви просування?" : ""}
                  {defLangState === "en" ? "Do you make a promotion?" : ""}
                </h3>
                <CSSTransition
                  in={slide3}
                  classNames={servicesPageTransition}
                  timeout={500}
                  unmountOnExit
                >
                  <p className={css.questions_item_text}>
                    {defLangState === "rus" ? "Оставьте заявку" : ""}
                    {defLangState === "ukr" ? "Залишити заявку" : ""}
                    {defLangState === "en" ? "Leave a request" : ""}Да, делаем.
                  </p>
                </CSSTransition>
              </li> */}
              <li
                className={
                  slide4 ? css.animated_questions_item : css.questions_item
                }
              >
                <button
                  className={slide4 ? css.questions_button_minus : css.questions_button}
                  onClick={handleClick}
                  name="button4"
                ></button>
                <h3 className={css.questions_item_title}>
                  {defLangState === "rus"
                    ? "Какие сроки исполнения проекта?"
                    : ""}
                  {defLangState === "ukr"
                    ? "Які терміни виконання проекту?"
                    : ""}
                  {defLangState === "en" ? "What is the project deadline?" : ""}
                </h3>
                <CSSTransition
                  in={slide4}
                  classNames={servicesPageTransition}
                  timeout={500}
                  unmountOnExit
                >
                  <p className={css.questions_item_text}>
                    {defLangState === "rus"
                      ? "Сроки выполнения проекта зависят от сложности функционала, дизайна и верстки. Для больших проектов, мы сможем предложить поэтапный запуск проекта. В любом случае, сроки проекта необходимо обсудить с нашими сотрудниками."
                      : ""}
                    {defLangState === "ukr"
                      ? "Терміни виконання проекту залежать від складності функціоналу, дизайну і верстки. Для великих проектів, ми зможемо запропонувати поетапний запуск проекту. У будь-якому випадку, терміни проекту необхідно обговорити з нашими співробітниками."
                      : ""}
                    {defLangState === "en"
                      ? "Project lead times depend on the complexity of functionality, design and layout. For large projects, we can offer a phased launch of the project. In any case, the timing of the project must be discussed with our staff."
                      : ""}
                  </p>
                </CSSTransition>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
