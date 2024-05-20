import { FC } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

type Props = {
  title: string;
};

export const ChapterTitle: FC<PropsWithClassName<Props>> = ({
  className,
  title,
}) => {
  return (
    <div className={cn(className, styles.wrapper)}>
      <div className={styles.line}></div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};
