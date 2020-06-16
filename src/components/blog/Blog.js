
import React, { useState, useEffect } from "react";
// import { withRouter, useHistory } from "react-router-dom";
// import FB from 'fb'
import styles from "./blog.module.css";

const Blog = () => {
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
      message: "watch hjjewflnjiokj;v m8umd9e9iwm9iimiqwim09 ni90sid9mu98fcyw y78ynd8nuonmaxl hiuqaosdhmocosix v jefmpiwoP,korpw",
      img: "https://source.unsplash.com/8b1cWDyvT7Y",
      id: 3,
    },
    {
      message: "smth",
      img: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000",
      id: 4,
    },
    {
      message: "ghjfjk hwjqfjklmewlqbk huiwf    jio;kreql; ihjw;iovkq,eptgh hpifdew,qpgkprkehgiuefv kjjdhnfieorq,pofre",
      img: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000",
      id: 5,
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

  return (
    <div className={styles.bg}>
      <div>Header</div>
      <div className={styles.mainImg}></div>
      <div className={styles.container}>
          <h2 className={styles.blogTitle}>Blog</h2>
        <ul className={styles.postGrid}>
            {posts.map(post =>
             <li className={styles.post}>
                 <img className={styles.postImg} height='auto' alt="" src={post.img} />
                 <p className={styles.postMessage}>{post.message}</p>
            </li>)}
        </ul>
      </div>
      <div>footer</div>
    </div>
  );
};

export default Blog;
// export default withRouter(Blog);
