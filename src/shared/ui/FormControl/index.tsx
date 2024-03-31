import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
  error?: string;
};

export const FormControl: FC<Props> = ({ children, error }) => {
  return (
    <div className={styles.wrapper}>
      {children}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
