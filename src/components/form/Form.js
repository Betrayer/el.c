import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Slide from "react-reveal/Slide";
import css from "./Form.module.css";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [defLangState] = useState(localStorage.getItem("lang"));
  const [blackArrow, setBlackArrow] = useState(false);

  useEffect(() => {}, [email, feedback, formSubmitted, defLangState]);

  const handleCancel = () => {
    setFeedback("");
    setEmail("");
  };

  const openForm = () => {
    setFormSubmitted(true);
  };
  const closeForm = (e) => {
    if (e.target.id === "close" || e.target.id === "close1") {
      setFormSubmitted(false);
    }
  };

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleChangeMail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template,
      REACT_APP_EMAILJS_USERID: user,
    } = props.env;
    e.preventDefault();
    // console.log(template, email, receiverEmail, feedback, user);
    sendFeedback(template, email, receiverEmail, feedback, user);
  };

  const sendFeedback = (
    templateId,
    senderEmail,
    receiverEmail,
    feedback,
    user
  ) => {
    window.emailjs
      .send(
        "default_service",
        templateId,
        {
          senderEmail,
          receiverEmail,
          feedback,
        },
        user
      )
      .then((res) => {
        handleCancel();
        setFormSubmitted(false);
      })
      .catch((err) => console.error("Failed to send feedback. Error: ", err));
  };

  return (
    <>
      <section className={css.containerMain}>
        <div className={css.container}>
          <div className={css.containerForm}>
            {defLangState === "rus" ? (
              <h3 className={css.formTitle}>
                Креативный дизайн и современные технологии разработки
              </h3>
            ) : (
              <></>
            )}
            {defLangState === "ukr" ? (
              <h3 className={css.formTitle}>
                Креативний дизайн і сучасні технології розробки
              </h3>
            ) : (
              <></>
            )}
            {defLangState === "en" ? (
              <h3 className={css.formTitle}>
                Creative design and modern development technologies
              </h3>
            ) : (
              <></>
            )}
            <div className={css.buttonFlex}>
              <button
                onMouseOver={() => setArrow(true)}
                onMouseLeave={() => setArrow(false)}
                className={css.learnMore}
                onClick={() => openForm()}
              >
                <span className={css.circle} aria-hidden="true">
                  {arrow ? (
                    <span className={css.arrow}></span>
                  ) : (
                    <span className={css.icon}></span>
                  )}
                </span>
                <span className={css.buttonText}>
                  {defLangState === "rus" ? "Оставьте заявку" : ""}
                  {defLangState === "ukr" ? "Залишити заявку" : ""}
                  {defLangState === "en" ? "Leave a request" : ""}
                </span>
              </button>
            </div>
          </div>
          <div
            id="close"
            className={formSubmitted ? css.formContainer : css.formContainerClosed}
            onClick={(e) => closeForm(e)}
          >
            <Slide right when={formSubmitted}>
              <form className={css.form} onSubmit={(e) => handleSubmit(e)}>
                <div
                  id="close1"
                  className={css.formX}
                  onClick={(e) => closeForm(e)}
                ></div>
                <h3 className={css.formTitleForm}>
                  {defLangState === "rus" ? "Есть крутая задумка?" : ""}
                  {defLangState === "ukr" ? "Є крута задумка?" : ""}
                  {defLangState === "en" ? "Have a cool idea?" : ""}
                </h3>
                <h3 className={css.formTitleForm}>
                  {defLangState === "rus" ? "Пишите нам" : ""}
                  {defLangState === "ukr" ? "Пишіть нам" : ""}
                  {defLangState === "en" ? "Contact us" : ""}
                </h3>
                <p className={css.formText}>
                  {defLangState === "rus" ? "Как к вам обращаться?" : ""}
                  {defLangState === "ukr" ? "Як до вас звертатись?" : ""}
                  {defLangState === "en" ? "How may I address you?" : ""}
                </p>
                <div className={css.formDiv}>
                  {defLangState === "rus" ? (
                    <input
                      className={css.formInput}
                      type="text"
                      placeholder="Ваше имя"
                      required
                    />
                  ) : (
                    <></>
                  )}
                  {defLangState === "en" ? (
                    <input
                      className={css.formInput}
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  ) : (
                    <></>
                  )}
                  {defLangState === "ukr" ? (
                    <input
                      className={css.formInput}
                      type="text"
                      placeholder="Ваше ім'я"
                      required
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <p className={css.formText}>E-mail</p>
                <div className={css.formDiv}>
                  {defLangState === "en" ? (
                    <input
                      className={css.formInput}
                      type="email"
                      value={email}
                      placeholder="Enter your email"
                      required
                      onChange={(e) => handleChangeMail(e)}
                    />
                  ) : (
                    <></>
                  )}
                  {defLangState === "rus" ? (
                    <input
                      className={css.formInput}
                      type="email"
                      value={email}
                      placeholder="Введите ваш email"
                      required
                      onChange={(e) => handleChangeMail(e)}
                    />
                  ) : (
                    <></>
                  )}
                  {defLangState === "ukr" ? (
                    <input
                      className={css.formInput}
                      type="email"
                      value={email}
                      placeholder="Введіть ваш email"
                      required
                      onChange={(e) => handleChangeMail(e)}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <p className={css.formText}>
                  {defLangState === "rus" ? "Опишите вашу задумку" : ""}
                  {defLangState === "ukr" ? "Опишіть вашу задумку" : ""}
                  {defLangState === "en" ? "Describe your idea" : ""}
                </p>
                <div className={css.formDiv}>
                  <input
                    className={css.formInput}
                    id="feedback-entry"
                    name="feedback-entry"
                    onChange={(e) => handleChange(e)}
                    required
                    value={feedback}
                  />
                </div>

                <div className={css.buttonFlexWhite}>
                  <button
                    onMouseOver={() => setBlackArrow(true)}
                    onMouseLeave={() => setBlackArrow(false)}
                    className={css.learnMoreWhite}
                    // onClick={() => openForm()}
                  >
                    <span className={css.circleWhite} aria-hidden="true">
                      {blackArrow ? (
                        <span className={css.arrowWhite}></span>
                      ) : (
                        <span className={css.iconWhite}></span>
                      )}
                    </span>
                    <span className={css.buttonTextWhite}>
                      {defLangState === "rus" ? "Отправить заявку" : ""}
                      {defLangState === "ukr" ? "Відправити заявку" : ""}
                      {defLangState === "en" ? "Send request" : ""}
                    </span>
                  </button>
                </div>

                <p className={css.formContactText}>+380 067 809 55 78</p>
                <p className={css.formContactText}>
                  {defLangState === "rus"
                    ? "ул. Маршала Тимошенка 29Б, литера А"
                    : ""}
                  {defLangState === "ukr"
                    ? "вул. Маршала Тимошенка 29Б, літера А"
                    : ""}
                  {defLangState === "en"
                    ? "Marshal Timoshenko St. 29B, letter A"
                    : ""}
                </p>
                <p className={css.formContactText}>
                  Ellie.Yelizarieva@el-c.com.ua
                </p>
              </form>
            </Slide>
          </div>
        </div>
      </section>
    </>
  );
};

Form.propTypes = {
  env: PropTypes.object.isRequired,
};

export default Form;
