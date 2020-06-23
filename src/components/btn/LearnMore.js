import React, { useState } from "react";
import styles from './learnMore.module.css'

const LearnMore = ({text, funcToDo}) => {
  const [arrow, setArrow] = useState(false);

    return (
        <button
            onMouseOver={() => setArrow(true)}
            onMouseLeave={() => setArrow(false)}
            className={styles.learnMore}
            onClick={funcToDo}
          >
            <span className={styles.circle} aria-hidden="true">
              {arrow ? (
                <span className={styles.arrow}></span>
              ) : (
                <span className={styles.icon}></span>
              )}
            </span>
            <span className={styles.buttonText}>{text}</span>
          </button>
    );
}

export default LearnMore;