import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

type Props = {
  title?: string;
  children: ReactNode;
};

const BoxWrapper: FC<PropsWithClassName<Props>> = ({
  className,
  title,
  children,
}) => {
  return (
    <div className={cn(className, styles.wrapper)}>
      {title && <h6 className={styles.title}>{title}</h6>}

      {children}
    </div>
  );
};

export default BoxWrapper;
