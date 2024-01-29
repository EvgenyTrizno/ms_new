import { FC } from "react";
import styles from "./Characteristics.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";
import { CharacteristicsItem } from "./CharacteristicsItem/CharacteristicsItem";

export const Characteristics: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={cn(className, styles.wrapper)}>
      <CharacteristicsItem className={styles.item} title="64%" text="Помощь в лечении" />
      <CharacteristicsItem className={styles.item} title="64%" text="Ответственность" />
      <CharacteristicsItem className={styles.item} title="64%" text="Всего лечилось " />
      <CharacteristicsItem className={styles.item} title="64%" text="Точность в лечении" />
    </div>
  );
};
