import { FC } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";
import { LinksItem } from "./LinksItem/LinksItem";
import { CooperationIcon, HarwareIcon, NoWifiIcon, WifiIcon } from "@/icons";
import { ROUTES } from "@/shared/utils/PATHS";

type Props = {
  onlineCount: number;
  offlineCount: number;
  cooperationCount: number;
  hardwareCount: number;
};

export const Links: FC<PropsWithClassName<Props>> = ({
  className,
  onlineCount,
  offlineCount,
  cooperationCount,
  hardwareCount,
}) => {
  return (
    <div className={cn(className, styles.wrapper)}>
      <LinksItem
        className={styles.item}
        href="/"
        title="Онлайн записи"
        count={onlineCount}
        icon={<WifiIcon />}
      />
      <LinksItem
        className={styles.item}
        href="/"
        title="Оффлайн
        записи"
        count={offlineCount}
        icon={<NoWifiIcon />}
      />
      <LinksItem
        className={styles.item}
        href={ROUTES.cooperation.path}
        title={ROUTES.cooperation.label}
        count={cooperationCount}
        icon={<CooperationIcon />}
      />
      <LinksItem
        className={styles.item}
        href={ROUTES.hardware.path}
        title={ROUTES.hardware.label}
        count={hardwareCount}
        icon={<HarwareIcon />}
      />
    </div>
  );
};
