import React from "react";
import styles from "./Hero.module.scss";
export type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  // console.log(body);
  return (
    <div className={styles.heroContainer}>
      <h2>{title}</h2>
    </div>
  );
};

export default Hero;
