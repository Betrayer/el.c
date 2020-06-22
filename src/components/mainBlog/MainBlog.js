import React, { useState } from "react";
// import content from '../../posts.json'
import styles from "./mainBlog.module.css";

const MainBlog = () => {
  const [arrow, setArrow] = useState(false);
  // const post = JSON.parse(content)
  // console.log('post', post)
  const [posts, setPosts] = useState([
    {
      message: "first post",
      img: "https://source.unsplash.com/5VXH4RG88gc",
      id: 1,
    },
    {
      message: "coffee",
      img: "https://source.unsplash.com/XtUd5SiX464",
      id: 2,
    },
    {
      message:
        "watch hjjewflnjiokj;v m8umd9e9iwm9iimiqwim09 ni90sid9mu98fcyw y78ynd8nuonmaxl hiuqaosdhmocosix v jefmpiwoP,korpw",
      img: "https://source.unsplash.com/8b1cWDyvT7Y",
      id: 3,
    },
    {
      message: "smth",
      img:
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000",
      id: 4,
    },
    {
      message:
        "ghjfjk hwjqfjklmewlqbk huiwf    jio;kreql; ihjw;iovkq,eptgh hpifdew,qpgkprkehgiuefv kjjdhnfieorq,pofre",
      img:
        "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000",
      id: 5,
    },
    {
      message:
        "coffee hjkdcn wjke cfioej,qo oijwdofie jwheuifhi jkwnfdilie iij oiejfoi",
      img: "https://source.unsplash.com/XtUd5SiX464",
      id: 6,
    },
  ]);

  return (
    <section className={styles.bg}>
      <div className={styles.container}>
        <h2 className={styles.blogTitle}>Блог</h2>
        <ul className={styles.postGrid}>
          {posts.map((post) => (
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
        >
          <span className={styles.circle} aria-hidden="true">
            {arrow ? (
              <span className={styles.arrow}></span>
            ) : (
              <span className={styles.icon}></span>
            )}
          </span>
          <span className={styles.buttonText}>узнать подробнее</span>
        </button></div>
      </div>
    </section>
  );
};

export default MainBlog;
