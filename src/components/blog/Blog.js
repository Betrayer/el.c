import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import contentUkr from "../../postsUkr.json";
import contentRus from "../../postsRus.json";
import contentEng from "../../postsEng.json";
import styles from "./blog.module.css";

const Blog = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [postsToShow, setPostsToShow] = useState([]);
  const [defLangState] = useState(localStorage.getItem("lang"));

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
  useEffect(() => {}, [defLangState]);

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

    if (defLangState === "rus") {
      setPostsToShow(contentRus.filter((item, index) => index <= preloader));
    } else if (defLangState === "ukr") {
      setPostsToShow(contentUkr.filter((item, index) => index <= preloader));
    } else
      setPostsToShow(contentEng.filter((item, index) => index <= preloader));

    setIsFetching(false);
  }

  return (
    <section className={styles.bg}>
      <Header />
      <div className={styles.imgWrapper}>
        <div className={styles.mainImg}></div>
        <div className={styles.mainImgTextWrapper}>
          <h3 className={styles.mainImgTitle}>
            {defLangState === "rus" ? "Наш блог" : ""}
            {defLangState === "ukr" ? "Наш блог" : ""}
            {defLangState === "en" ? "Our blog" : ""}
          </h3>
          <p className={styles.mainImgText}>
            {defLangState === "rus"
              ? "Любой может сделать из простого сложное."
              : ""}
            {defLangState === "ukr"
              ? "Будь-хто може зробити з простого складне."
              : ""}
            {defLangState === "en"
              ? "Anyone can make difficult out of simple."
              : ""}
          </p>
          <p className={styles.mainImgText}>
            {defLangState === "rus" ? "Мы умеем превратить сложное в простое." : ""}
            {defLangState === "ukr" ? "Ми вміємо перетворити складне в просте." : ""}
            {defLangState === "en" ? "We can turn complex into simple." : ""}
          </p>
        </div>
      </div>
      <div className={styles.container}>
        {/* <svg className={styles.line} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="0" x2="10" y2="200" stroke="#fff" />
        </svg> */}
        <h2 className={styles.blogTitle}>
          {defLangState === "rus" ? "Блог" : ""}
          {defLangState === "ukr" ? "Блог" : ""}
          {defLangState === "en" ? "Blog" : ""}
        </h2>
        <ul className={styles.postGrid}>
          {postsToShow.map((post) => (
            <li key={post.id} className={styles.post}>
              {post.img ? (
                <img
                  className={styles.postImg}
                  height="auto"
                  alt=""
                  // src={require(post.img)}
                  src={require("../../assets/blog/1.jpeg")}
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
