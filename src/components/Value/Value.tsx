import React from "react";
import styles from "./Value.module.scss";
export type ValueProps = {
  title: string;
  subtitle: string;
  body: any;
  image: string;
};

const Value: React.FC<ValueProps> = ({ title, subtitle, body, image }) => {
  return (
    <div className={styles.valueContainer}>
      <h2>{title}</h2>
    </div>
  );
};

export default Value;
