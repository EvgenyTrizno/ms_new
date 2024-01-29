import { FC } from "react";
import styles from "./CharacteristicsItem.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

type Props = {
  title: string;
  text: string;
};

export const CharacteristicsItem: FC<PropsWithClassName<Props>> = ({
  className,
  title,
  text,
}) => {
  return (
    <div className={cn(className, styles.wrapper)}>
      <h6>{title}</h6>
      <p>{text}</p>
    </div>
  );
};
