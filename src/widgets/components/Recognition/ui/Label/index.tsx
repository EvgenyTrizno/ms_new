import { PropsWithClassName } from "@/shared/types";
import { FC, PropsWithChildren } from "react";
import cn from "clsx";
import styles from "./styles.module.scss";

type Props = {
  title: string;
};

export const Label: FC<PropsWithChildren<PropsWithClassName<Props>>> = ({
  className,
  children,
  title,
}) => {
  return (
    <div className={cn(className, styles.wrapper)}>
      <p className={styles.title}>{title}</p>

      {children}
    </div>
  );
};
