import React from 'react'
// import { withRouter, useHistory } from "react-router-dom";
import styles from './blog.module.css'

const Blog = () => {
    return (
        <div className={styles.bg}>
            <div>Header</div>
            <div className={styles.mainImg}></div>
            <div className={styles.container}>
            <div className={styles.postGrid}></div>
            </div>
            <div>footer</div>
        </div>
    );
}

export default Blog;
// export default withRouter(Blog);