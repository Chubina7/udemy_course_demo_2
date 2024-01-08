import React from "react";
import styles from "./logistics-item.module.css";

export default function LogisticsItem({ icon: Icon, children }) {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.content}>{children}</span>
    </li>
  );
}
