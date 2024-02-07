import { Loader } from "../Loader";
import styles from "./styles.module.scss";

export const PageLoader = () => {
  return (
    <div className={styles.wrapper}>
      <Loader />
    </div>
  );
};
