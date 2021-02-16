import React from "react";
import ReactMarkdown from "react-markdown";
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
      <div className={"grid"}>
        <div className={"col-12 col-sm-9 col-md-8 col-lg-8"}>
          <h1>{title}</h1>
          <h4>{subtitle}</h4>

          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
        <div className={"col-12 col-sm-3 col-md-4 col-lg-4"}>
          <div className={styles.imageContainer}>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
