import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

type Props = {
  title?: string;
  children: ReactNode;
  color?: "white" | "blue";
};

const BoxWrapper: FC<PropsWithClassName<Props>> = ({
  className,
  title,
  children,
  color = "blue",
}) => {
  return (
    <div
      className={cn(styles.wrapper, className, {
        [styles[color]]: color,
      })}
    >
      {title && <h6 className={styles.title}>{title}</h6>}

      {children}
    </div>
  );
};

export default BoxWrapper;
