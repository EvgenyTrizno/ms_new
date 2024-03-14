import { FC } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

export const ReminderBlock: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      До основной записи осталось 22:59
    </div>
  );
};
