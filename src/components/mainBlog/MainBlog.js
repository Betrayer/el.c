import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import content from "../../posts.json";
import styles from "./mainBlog.module.css";

const MainBlog = () => {
  const [arrow, setArrow] = useState(false);

  const history = useHistory();

  const toBlog = () => {
    history.push("/blog");
  };

  return (
    <section className={styles.bg}>
      <div className={styles.container}>
        <h2 className={styles.blogTitle}>Блог</h2>
        <ul className={styles.postGrid}>
          {content.map((post) => (
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
            <span className={styles.buttonText}>узнать подробнее</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainBlog;
