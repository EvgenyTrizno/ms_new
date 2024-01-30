import { FC, PropsWithChildren } from "react";
import { IContainerProps } from "./types";
import cn from "clsx";

import styles from "./styles.module.scss";

export const Container: FC<IContainerProps & PropsWithChildren> = ({
  children,
  height,
  withHeader = true,
  withFooter = true,
}) => {
  return (
    <div
      style={{ height }}
      className={cn(styles.container, {
        [styles.withHeader]: withHeader,
        [styles.withFooter]: withFooter,
      })}
    >
      {children}
    </div>
  );
};
