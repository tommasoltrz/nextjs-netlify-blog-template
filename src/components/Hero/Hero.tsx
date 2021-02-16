import React from "react";
import styles from "./Hero.module.scss";
export type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  const heroImageStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className={styles.heroContainer} style={heroImageStyle}>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </div>
  );
};

export default Hero;
