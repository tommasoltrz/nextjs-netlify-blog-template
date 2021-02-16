import React from "react";
import styles from "./Mission.module.scss";
export type MissionProps = {
  title: string;
  subtitle: string;
  body: any;
  image: string;
};

const Mission: React.FC<MissionProps> = ({ title, subtitle, body, image }) => {
  const heroImageStyle = {
    backgroundImage: `url(${image});`,
  };

  return (
    <div className={styles.missionContainer} style={heroImageStyle}>
      <h1>{title}</h1>
    </div>
  );
};

export default Mission;
