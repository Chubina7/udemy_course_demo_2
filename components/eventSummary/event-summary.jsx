import React from "react";
import styles from "./event-summary.module.css";

export default function EventSummary(props) {
  const { title } = props;

  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
}
