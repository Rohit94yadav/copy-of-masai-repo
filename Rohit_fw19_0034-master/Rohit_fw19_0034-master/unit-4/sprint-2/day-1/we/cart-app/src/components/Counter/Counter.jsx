import { useState } from "react";

import styles from "./Counter.module.css";

function Counter({ counter, setCounter }) {
  return (
    <div className={styles.style_3}>
      <button className={styles.style_2} onClick={() => setCounter(1)}>
        +
      </button>
      <h3> {counter}</h3>
      <button
        disabled={counter === 0}
        className={styles.style_2}
        onClick={() => setCounter(-1)}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
