import React from "react";
import styles from "./Mission.module.scss";
export type MissionProps = {
  title: string;
  subtitle: string;
  body: any;
  image: string;
};

const Mission: React.FC<MissionProps> = ({ title, subtitle, body, image }) => {
  console.log(body);
  return (
    <div className={styles.missionContainer}>
      <h2>{title}</h2>
    </div>
  );
};

export default Mission;
