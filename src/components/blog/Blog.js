import React, { useState, useEffect } from "react";
// import { withRouter, useHistory } from "react-router-dom";
// import FB from 'fb'
import Header from "../header/Header";
import styles from "./blog.module.css";
import Footer from "../footer/Footer";

const Blog = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [postsToShow, setPostsToShow] = useState([]);
  const [posts, setPosts] = useState([
    {
      message: "coffee",
      img: "https://source.unsplash.com/XtUd5SiX464",
      id: 2,
    },
    {
      message: "first post",
      img: "https://source.unsplash.com/5VXH4RG88gc",
      id: 1,
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
    {
      message: "first post",
      img: "https://source.unsplash.com/5VXH4RG88gc",
      id: 11,
    },
    {
      message: "coffee",
      img: "https://source.unsplash.com/XtUd5SiX464",
      id: 12,
    },
    {
      message:
        "watch hjjewflnjiokj;v m8umd9e9iwm9iimiqwim09 ni90sid9mu98fcyw y78ynd8nuonmaxl hiuqaosdhmocosix v jefmpiwoP,korpw",
      img: "https://source.unsplash.com/8b1cWDyvT7Y",
      id: 13,
    },
    {
      message: "smth",
      img:
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000",
      id: 14,
    },
    {
      message:
        "ghjfjk hwjqfjklmewlqbk huiwf    jio;kreql; ihjw;iovkq,eptgh hpifdew,qpgkprkehgiuefv kjjdhnfieorq,pofre",
      img:
        "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000",
      id: 15,
    },
    {
      message:
        "coffee hjkdcn wjke cfioej,qo oijwdofie jwheuifhi jkwnfdilie iij oiejfoi",
      img: "https://source.unsplash.com/XtUd5SiX464",
      id: 16,
    },
    {
      message: "first post",
      img: "https://source.unsplash.com/5VXH4RG88gc",
      id: 21,
    },
    {
      message: "coffee",
      img: "https://source.unsplash.com/XtUd5SiX464",
      id: 22,
    },
    {
      message:
        "watch hjjewflnjiokj;v m8umd9e9iwm9iimiqwim09 ni90sid9mu98fcyw y78ynd8nuonmaxl hiuqaosdhmocosix v jefmpiwoP,korpw",
      img: "https://source.unsplash.com/8b1cWDyvT7Y",
      id: 23,
    },
    {
      message: "smth",
      img:
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000",
      id: 24,
    },
    {
      message:
        "ghjfjk hwjqfjklmewlqbk huiwf    jio;kreql; ihjw;iovkq,eptgh hpifdew,qpgkprkehgiuefv kjjdhnfieorq,pofre",
      img:
        "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000",
      id: 25,
    },
    {
      message:
        "coffee hjkdcn wjke cfioej,qo oijwdofie jwheuifhi jkwnfdilie iij oiejfoi",
      img: "https://source.unsplash.com/XtUd5SiX464",
      id: 26,
    },
  ]);

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
