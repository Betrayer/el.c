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
<<<<<<< HEAD
=======
        {/* <img
          className={css.services_logo}
          src={require("../../assets/photos/services_bird.png")}
          alt="services_logo"
        /> */}
>>>>>>> 6d624228f29bc2c33e08d763ac0f400d7dc31cc2
        <img
          className={css.services_cirlce1}
          src={require("../../assets/photos/services_circle.png")}
          alt="services_circle"
        />
        <img
          className={css.services_cirlce2}
          src={require("../../assets/photos/services_circle2.png")}
          alt="services_circle"
        />
        <img
          className={css.services_completepic}
          src={require("../../assets/photos/completepic.png")}
          alt="services_pic"
        />
<<<<<<< HEAD
        <ul className={css.services_list}>
          <li className={css.service_item1}>
            <h3 className={css.services_item_title}>Lorem</h3>
          </li>
          <li className={css.service_item2}>
            <h3 className={css.services_item_title}>Lorem</h3>
          </li>
          <li className={css.service_item3}>
            <h3 className={css.services_item_title}>Lorem</h3>
=======
        {/* <img
          className={css.services_dot1}
          src={require("../../assets/photos/services_dot.png")}
          alt="services_line"
        />
        <img
          className={css.services_dot2}
          src={require("../../assets/photos/services_dot.png")}
          alt="services_line"
        />
        <img
          className={css.services_line1}
          src={require("../../assets/photos/services_line.png")}
          alt="services_line"
        />
        <img
          className={css.services_line2}
          src={require("../../assets/photos/services_line.png")}
          alt="services_line"
        />
        <img
          className={css.services_dot3}
          src={require("../../assets/photos/services_dot.png")}
          alt="services_line"
        />
        <img
          className={css.services_dot4}
          src={require("../../assets/photos/services_dot.png")}
          alt="services_line"
        />
        <img
          className={css.services_line3}
          src={require("../../assets/photos/services_line.png")}
          alt="services_line"
        />
        <img
          className={css.services_line4}
          src={require("../../assets/photos/services_line.png")}
          alt="services_line"
        />
        <img
          className={css.services_line5}
          src={require("../../assets/photos/services_line.png")}
          alt="services_line"
        />
        <img
          className={css.services_dot5}
          src={require("../../assets/photos/services_dot.png")}
          alt="services_line"
        /> */}
        <ul className={css.services_list}>
          {/* <li className={css.services_box1}>
            <ul className={css.services_box1_list}>
              <li className={css.services_box1_item}>
                <h3 className={css.services_item_title}>Title1</h3>
                <p className={css.services_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
              <li className={css.services_box1_item}>
                <h3 className={css.services_item_title}>Title2</h3>
                <p className={css.services_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
            </ul>
>>>>>>> 6d624228f29bc2c33e08d763ac0f400d7dc31cc2
          </li>
          <li className={css.service_item4}>
            <h3 className={css.services_item_title}>Lorem</h3>
          </li>
<<<<<<< HEAD
          <li className={css.service_item5}>
            <h3 className={css.services_item_title}>Lorem</h3>
          </li>
=======
          <li className={css.services_box3}>
            <h3 className={css.services_item_title}>Title5</h3>
            <p className={css.services_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </li> */}
>>>>>>> 6d624228f29bc2c33e08d763ac0f400d7dc31cc2
        </ul>
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
