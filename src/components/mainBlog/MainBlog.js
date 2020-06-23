import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import contentUkr from "../../postsUkr.json";
import contentRus from "../../postsRus.json";
import contentEng from "../../postsEng.json";
import styles from "./mainBlog.module.css";

const MainBlog = () => {
  const [arrow, setArrow] = useState(false);

  const history = useHistory();
  const [defLangState] = useState(localStorage.getItem("lang"));
  useEffect(() => {}, [defLangState]);

  const toBlog = () => {
    history.push("/blog");
  };

  return (
    <section className={styles.bg}>
      <div className={styles.container}>
        <h2 className={styles.blogTitle}>
          {defLangState === "rus" ? "Блог" : ""}
          {defLangState === "ukr" ? "Блог" : ""}
          {defLangState === "en" ? "Blog" : ""}
        </h2>
        {defLangState === "rus" ? (
          <ul className={styles.postGrid}>
            {contentRus.map((post) => (
              <li key={post.id} className={styles.post}>
                <img
                  className={styles.postImg}
                  height="auto"
                  alt=""
                  src={post.img}
                />
                <p className={styles.postMessage}>{post.message}</p>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
        {defLangState === "ukr" ? (
          <ul className={styles.postGrid}>
            {contentUkr.map((post) => (
              <li key={post.id} className={styles.post}>
                <img
                  className={styles.postImg}
                  height="auto"
                  alt=""
                  src={post.img}
                />
                <p className={styles.postMessage}>{post.message}</p>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
        {defLangState === "en" ? (
          <ul className={styles.postGrid}>
            {contentEng.map((post) => (
              <li key={post.id} className={styles.post}>
                <img
                  className={styles.postImg}
                  height="auto"
                  alt=""
                  src={post.img}
                />
                <p className={styles.postMessage}>{post.message}</p>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
        <div className={styles.btnWrapper}>
          <button
            onMouseOver={() => setArrow(true)}
            onMouseLeave={() => setArrow(false)}
            className={styles.learnMore}
            onClick={toBlog}
          >
            <span className={styles.circle} aria-hidden="true">
              {arrow ? (
                <span className={styles.arrow}></span>
              ) : (
                <span className={styles.icon}></span>
              )}
            </span>
            <span className={styles.buttonText}>
              {defLangState === "rus" ? "Узнать подробнее" : ""}
              {defLangState === "ukr" ? "Дізнатись детальніше" : ""}
              {defLangState === "en" ? "Find out more" : ""}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainBlog;
