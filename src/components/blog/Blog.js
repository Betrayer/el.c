import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import posts from "../../posts.json";
import styles from "./blog.module.css";

const Blog = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [postsToShow, setPostsToShow] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  useEffect(() => {
    fetchMoreListItems();
  }, []);

  function handleScroll() {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight - 300) setIsFetching(true);
  }
  function fetchMoreListItems() {
    const preloader = 11 + Number(postsToShow.length);
    setPostsToShow(posts.filter((item, index) => index <= preloader));
    setIsFetching(false);
  }

  return (
    <section className={styles.bg}>
      <Header />
      <div className={styles.imgWrapper}>
        <div className={styles.mainImg}></div>
        <div className={styles.mainImgTextWrapper}>
          <h3 className={styles.mainImgTitle}>Наш блог</h3>
          <p className={styles.mainImgText}>
            Любой может сделать из простого сложное.
          </p>
          <p className={styles.mainImgText}>
            Мы умеем превратить сложное в простое.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.blogTitle}>Блог</h2>
        <ul className={styles.postGrid}>
          {postsToShow.map((post) => (
            <li key={post.id} className={styles.post}>
            
              {post.img ? (
                <img
                  className={styles.postImg}
                  height="auto"
                  alt=""
                  src={require(`../../assets/blog/${post.img}.jpeg`)}
                />
              ) : (
                <></>
              )}
              <p className={styles.postMessage}>{post.message}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </section>
  );
};

export default withRouter(Blog);
