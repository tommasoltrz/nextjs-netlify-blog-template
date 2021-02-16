import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Hero.module.scss";
export type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  console.log(useRouter().locale);
  const heroImageStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className={styles.heroContainer} style={heroImageStyle}>
      <div className={styles.lang}>
        <div className={useRouter().locale === "en" ? styles.active : ""}>
          <Link href="/" locale="en">
            🇬🇧
          </Link>
        </div>
        <div className={useRouter().locale === "fr" ? styles.active : ""}>
          <Link href="/" locale="fr">
            🇫🇷
          </Link>
        </div>
        <div className={useRouter().locale === "it" ? styles.active : ""}>
          <Link href="/" locale="it">
            🇮🇹
          </Link>
        </div>
      </div>

      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </div>
  );
};

export default Hero;
