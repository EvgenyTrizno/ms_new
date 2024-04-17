import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

type Props = {
  title?: string;
  children: ReactNode;
  color?: "white" | "blue";
  onClick?: MouseEventHandler;
};

const BoxWrapper: FC<PropsWithClassName<Props>> = ({
  className,
  title,
  children,
  color = "blue",
  onClick,
}) => {
  return (
    <div
      className={cn(styles.wrapper, className, {
        [styles[color]]: color,
        [styles.pointer]: onClick,
      })}
      onClick={onClick}
    >
      {title && <h6 className={styles.title}>{title}</h6>}

      {children}
    </div>
  );
};

export default BoxWrapper;
