import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import css from "./Form.module.css";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [arrow, setArrow] = useState(false);

  useEffect(() => {}, [email, feedback, formSubmitted]);

  const handleCancel = () => {
    setFeedback("");
    setEmail("");
  };

  const openForm = () => {
    setFormSubmitted(true);
  };
  const closeForm = () => {
    setFormSubmitted(false);
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
    <div className={css.container}>
      <div className={css.containerForm}>
        <h3 className={css.formTitle}>
          Креативный дизайн и современные технологии разработки
        </h3>
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
      </div>
      {formSubmitted ? (
        <div className={css.formContainer}>
          <form className={css.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={css.formX} onClick={() => closeForm()}>
              X
            </div>
            <h3 className={css.formTitleForm}>Есть крутая задумка?</h3>
            <h3 className={css.formTitleForm}>Пишите нам</h3>
            <p className={css.formText}>Как к вам обращаться?</p>
            <div className={css.formDiv}>
              <input
                className={css.formInput}
                type="text"
                // value={email}
                placeholder="Ваше имя"
                required
                // onChange={(e) => handleChangeMail(e)}
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
            {/* <div className="btn-group"> */}
            {/* <button
                className="btn btn--cancel"
                onClick={(e) => handleCancel(e)}
              >
                Cancel
              </button> */}
            <div className={css.buttonFlexWhite}>
              <button
                onMouseOver={() => setArrow(true)}
                onMouseLeave={() => setArrow(false)}
                className={css.learnMoreWhite}
                // onClick={() => openForm()}
              >
                <span className={css.circleWhite} aria-hidden="true">
                  {arrow ? (
                    <span className={css.arrowWhite}></span>
                  ) : (
                    <span className={css.iconWhite}></span>
                  )}
                </span>
                <span className={css.buttonTextWhite}>Отправить заявку</span>
              </button>
            </div>
            {/* <input type="submit" value="Submit" className="btn btn--submit" /> */}
            {/* </div> */}
            <p className={css.formContactText}>+380 50 500 50 50</p>
            <p className={css.formContactText}>
              hgc weuhwe ch wechuewouwec weiu 28
            </p>
            <p className={css.formContactText}>email@hpl.com</p>
          </form>
        </div>
      ) : (
        <></>
      )}
      <div className={css.formImgDiv}></div>
      </div>
    </>
  );
};

Form.propTypes = {
  env: PropTypes.object.isRequired,
};
export default Form;
