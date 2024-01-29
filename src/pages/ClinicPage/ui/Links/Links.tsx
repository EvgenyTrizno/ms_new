import { FC } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";
import { LinksItem } from "./LinksItem/LinksItem";
import { NoWifiIcon, WifiIcon } from "@/icons";

export const Links: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={cn(className, styles.wrapper)}>
      <LinksItem
        className={styles.item}
        href="/"
        title="Онлайн записи"
        count={24}
        icon={<WifiIcon />}
      />
      <LinksItem
        className={styles.item}
        href="/"
        title="Оффлайн
        записи"
        count={24}
        icon={<NoWifiIcon />}
      />
      <LinksItem
        className={styles.item}
        href="/"
        title="Онлайн записи"
        count={24}
        icon={<WifiIcon />}
      />
      <LinksItem
        className={styles.item}
        href="/"
        title="Онлайн записи"
        count={24}
        icon={<WifiIcon />}
      />
    </div>
  );
};
