import React from "react";
import css from "./contacts.module.css";

const Contacts = () => {
  return (
    <section className={css.contacts}>
      <h2 className={css.contactsHeader}>Контакты</h2>
      <span className={css.contactsSubHeader}>Мы рады сотрудничать с Вами</span>
      <ul className={css.contactsList}>
        <li className={css.contactsListItem}>
          <img
            src={require("../../assets/icons/contacts/mail.svg")}
            height="20"
            width="auto"
            alt="mail_icon"
          />
          <a className={css.contactsListLink} href="#">
            test@test.com
          </a>
        </li>
        <li className={css.contactsListItem}>
          <img
            src={require("../../assets/icons/contacts/phone.svg")}
            height="20"
            width="auto"
            alt="phone_icon"
          />
          <a className={css.contactsListLink} href="#">
            88005553535
          </a>
        </li>
        <li className={css.contactsListItem}>
          <img
            src={require("../../assets/icons/contacts/mapPointer.svg")}
            height="20"
            width="auto"
            alt="mapPointer_icon"
          />
          <a className={css.contactsListLink} href="#">
            пр-т. Найс, дом 69
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contacts;
