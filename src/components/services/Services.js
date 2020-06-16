import React from "react";
import css from "./Services.module.css";

const Services = () => {
  return (
    <div className={css.services_container}>
      <h2 className={css.services_title}>Наши услуги</h2>
      <ul className={css.services_list}>
        <li className={css.services_box1}>
          <ul className={css.services_box1_list}>
            <li className={css.services_box1_item}>
              <h3 className={css.services_item_title}>Title1</h3>
              <span className={css.services_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </li>
            <li className={css.services_box1_item}>
              <h3 className={css.services_item_title}>Title2</h3>
              <span className={css.services_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </li>
          </ul>
        </li>
        <li className={css.services_box2}>
          <ul className={css.services_box2_list}>
            <li className={css.services_box2_item}>
              <h3 className={css.services_item_title}>Title3</h3>
              <span className={css.services_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </li>
            <li className={css.services_box2_item}>
              <h3 className={css.services_item_title}>Title4</h3>
              <span className={css.services_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </li>
          </ul>
        </li>
        <li className={css.services_box3}>
          <h3 className={css.services_item_title}>Title5</h3>
          <span className={css.services_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Services;
