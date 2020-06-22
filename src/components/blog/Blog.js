import React, { useState, useEffect } from "react";
// import { withRouter, useHistory } from "react-router-dom";
// import FB from 'fb'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import content from '../../posts.json'
import styles from "./blog.module.css";

const Blog = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [postsToShow, setPostsToShow] = useState([]);
  const posts = JSON.parse(content)
  // const [posts, setPosts] = useState();

  // useEffect(() => {
  //     FB.api(
  //         "/100052352779221/feed",
  //         function (response) {
  //             console.log('response', response)
  //           if (response && !response.error) {
  //             setPosts(response)
  //           }
  //         }
  //     );
  //   }, []);

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
      {/* <svg className={styles.line} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="0" x2="10" y2="200" stroke="#fff" />
        </svg> */}
        <h2 className={styles.blogTitle}>Блог</h2>
        <ul className={styles.postGrid}>
          {postsToShow.map((post) => (
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
      </div>
      <Footer />
    </section>
  );
};

export default Blog;
// export default withRouter(Blog);
