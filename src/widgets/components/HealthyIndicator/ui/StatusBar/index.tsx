import { FC } from "react";
import styles from "./styles.module.scss";
import { Text } from "@/shared/ui/Text";

type TProps = {
  status: number;
  fs: number
};

export const StatusBar: FC<TProps> = ({ status, fs }) => {
  return (
    <>
      <div
        className={styles.box}
        style={{
          width: `${status}%`,
          // opacity: `${status}%`,
        }}
      />
      <Text
        className={`${styles.text} ${styles.front}`}
        fz={fs}
        type={"h3"}
      >{`${status}%`}</Text>
      <Text
        className={`${styles.text} ${styles.back}`}
        fz={fs}
        type={"h3"}
      >{`${status}%`}</Text>
    </>
  );
};