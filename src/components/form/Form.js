import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import css from "./Form.module.css";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [defLangState, setDefLangState] = useState(
    localStorage.getItem("lang")
  );
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
    console.log(template, email, receiverEmail, feedback, user);
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
    {console.log(defLangState)}
      <section className={css.containerMain}>
        {/* <div className={css.formImgDiv}></div> */}
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
                <span className={css.buttonText}>Оставьте заявку</span>
              </button>
            </div>
            {/* <div
              class="fb-page"
              data-href="https://www.facebook.com/Penguins.Brewery/"
              data-tabs="timeline"
              data-width=""
              data-height=""
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/Penguins.Brewery/"
                class="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/Penguins.Brewery/">
                  Penguin&#039;s Brewery
                </a>
              </blockquote>
            </div> */}
          </div>
          {formSubmitted ? (
            <div
              id="close"
              className={css.formContainer}
              onClick={(e) => closeForm(e)}
            >
              <form className={css.form} onSubmit={(e) => handleSubmit(e)}>
                <div id="close1" className={css.formX} onClick={(e) => closeForm(e)}>
                  
                </div>
                <h3 className={css.formTitleForm}>Есть крутая задумка?</h3>
                <h3 className={css.formTitleForm}>Пишите нам</h3>
                <p className={css.formText}>Как к вам обращаться?</p>
                <div className={css.formDiv}>
                  <input
                    className={css.formInput}
                    type="text"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <p className={css.formText}>E-mail</p>
                <div className={css.formDiv}>
                  <input
                    className={css.formInput}
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    required
                    onChange={(e) => handleChangeMail(e)}
                  />
                </div>
                <p className={css.formText}>Опишите вашу задумку</p>
                <div className={css.formDiv}>
                  <input
                    className={css.formInput}
                    id="feedback-entry"
                    name="feedback-entry"
                    onChange={(e) => handleChange(e)}
                    // placeholder="Enter your feedback here"
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
                      Отправить заявку
                    </span>
                  </button>
                </div>

                <p className={css.formContactText}>+380 50 500 50 50</p>
                <p className={css.formContactText}>
                  hgc weuhwe ch wechuewouwec weiu 28
                </p>
                <p className={css.formContactText}>
                  Ellie.Yelizarieva@el-c.com.ua
                </p>
              </form>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
};

Form.propTypes = {
  env: PropTypes.object.isRequired,
};

export default Form;
