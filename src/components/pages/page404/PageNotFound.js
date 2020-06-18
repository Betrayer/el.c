import React from "react";
import css from "./pageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={css.notFoundWrapper}>
      <h2>Вы кто такие? Я вас не звал. Идите лесом.</h2>
    </div>
  );
};

export default PageNotFound;
