import React, { useState, useEffect } from "react";
import css from "./contacts.module.css";

const Contacts = () => {
  const [defLangState] = useState(localStorage.getItem("lang"));
  useEffect(() => {}, [defLangState]);

  return (
    <section className={css.contacts}>
      <h2 className={css.contactsHeader}>
        {defLangState === "rus" ? "Контакты" : ""}
        {defLangState === "ukr" ? "Контакти" : ""}
        {defLangState === "en" ? "Contacts" : ""}
      </h2>
      <span className={css.contactsSubHeader}>
        {defLangState === "rus" ? "Мы рады сотрудничать с Вами" : ""}
        {defLangState === "ukr" ? "Ми раді співпрацювати з Вами" : ""}
        {defLangState === "en" ? "We are glad to cooperate with you" : ""}
      </span>
      <ul className={css.contactsList}>
        <li className={css.contactsListItem}>
          <img
            src={require("../../assets/icons/contacts/mail.svg")}
            height="20"
            width="auto"
            alt="mail_icon"
          />
          <a
            className={css.contactsListLink}
            href="mailto:Ellie.Yelizarieva@el-c.com.ua"
          >
            el-c@com.ua
          </a>
        </li>
        <li className={css.contactsListItem}>
          <img
            src={require("../../assets/icons/contacts/phone.svg")}
            height="20"
            width="auto"
            alt="phone_icon"
          />
          <div className={css.telWrapper}>
            <a className={css.contactsListLink} href="tel:+380663862689">
              0663862689
            </a>
            <a className={css.contactsListLink} href="tel:+380678095578">
              0678095578
            </a>
          </div>
        </li>
        <li className={css.contactsListItem}>
          <img
            src={require("../../assets/icons/contacts/mapPointer.svg")}
            height="20"
            width="auto"
            alt="mapPointer_icon"
          />
          <a
            className={css.contactsListLink}
            href="https://2gis.ua/kiev/geo/15059546909457325/30.504812%2C50.512866?m=30.504909%2C50.512631%2F18.47"
          >
            <span className={css.contactsSpan}>
              {defLangState === "rus" ? "ул. Маршала Тимошенка" : ""}
              {defLangState === "ukr" ? "вул. Маршала Тимошенка" : ""}
              {defLangState === "en" ? "st. Marshal Timoshenko" : ""}
            </span>
            <span className={css.contactsSpan}>
              {defLangState === "rus" ? "29Б, литера А" : ""}
              {defLangState === "ukr" ? "29Б, літера А" : ""}
              {defLangState === "en" ? "29Б, lit. А" : ""}
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contacts;
