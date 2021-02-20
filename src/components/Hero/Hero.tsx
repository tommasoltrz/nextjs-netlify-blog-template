import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import HalfCircle from "../HalfCircle/HalfCircle";
import styles from "./Hero.module.scss";
export type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  console.log(image);

  return (
    <div className={styles.heroContainer}>
      <div className={`grid`}>
        <div className={`col-11 col-sm-8 col-md-6 ${styles.textRow}`}>
          <h1>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={`col-2 col-sm-4 col-md-6 ${styles.imageRow}`}>
          <img src={image} alt="hero" />
        </div>
      </div>

      <HalfCircle color={"#f6f9f7"} />
    </div>
  );
};

export default Hero;
