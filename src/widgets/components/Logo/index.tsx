import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const Logo = () => {
  return (
    <Link className={styles.wrapper} to="/">
      <img src="/assets/logo.svg" alt="logo" />
      <span className={styles.desktopText}>Pre Recover</span>
      <span className={styles.mobText}>Pre-rec</span>
    </Link>
  );
};
