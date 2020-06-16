
import React, { useState, useEffect } from "react";
// import { withRouter, useHistory } from "react-router-dom";
import FB from 'fb'
import styles from './blog.module.css'

const Blog = () => {
    const [posts, setPosts] = useState([])
    const a = FB.api(
        "/{page-id}/feed",
        function (response) {
          if (response && !response.error) {
            setPosts(response)
          }
        }
    );

    return (
        <div className={styles.bg}>
            <div>Header</div>
            <div className={styles.mainImg}></div>
            <div className={styles.container}>

                
            <div className={styles.postGrid}>

            </div>

            </div>
            <div>footer</div>
        </div>
    );
}

export default Blog;
// export default withRouter(Blog);