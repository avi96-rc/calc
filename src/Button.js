import styles from "./App.module.css";
import React from "react";

const Button = (props) => {
  let classes = `${props.classame} ${styles.border}`;

  if (props.name === 0) {
    classes = `${props.classame} ${styles.grow}  ${styles.border}`;
    console.log(props.name);
  } else if (props.name === ".") {
    classes = `${props.classame} ${styles.shrink}  ${styles.border}`;
    console.log(props.name);
  }

  return <div className={classes}>{props.name}</div>;
};

export default Button;
