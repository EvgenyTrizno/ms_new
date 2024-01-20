import { FC } from "react";
import styles from "./styles.module.scss";
import { StatusBar } from "./ui/StatusBar";

type TProps = {
  height: string,
  status: number,
  p: number
  fs: number,
}

export const HealthyIndicator:FC<TProps> = ({ height, status, p, fs }) => {
  return (
    <div 
      className={styles.box}
      style={{
        height: height,
        padding: p
      }}
    >
      <StatusBar status={status} fs={fs} />
    </div>
  );
};

export default HealthyIndicator;
