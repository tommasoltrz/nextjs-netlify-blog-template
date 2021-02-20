import Link from "next/link";
import Burger from "../Burger";
import { useState } from "react";
import styles from "./Navigation.module.scss";
export type NavigationProps = {
  handleElClick?: (idx: number) => any;
};

const Navigation: React.FC<NavigationProps> = ({ handleElClick }) => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.Navigation}>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div
        className={`${styles.container} ${active ? styles.active : ""} grid`}
      >
        <a onClick={() => handleElClick(0)}>What</a>
        <p onClick={() => handleElClick(0)}>Why</p>
        <p onClick={() => handleElClick(0)}>Case Studies</p>
        <p onClick={() => handleElClick(0)}>Contact us</p>
      </div>
    </div>
  );
};
export default Navigation;
