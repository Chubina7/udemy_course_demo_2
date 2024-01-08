import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  if (props.href) {
    return (
      <Link href={props.link} className={styles.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
