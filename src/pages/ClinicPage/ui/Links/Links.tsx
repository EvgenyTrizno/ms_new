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
    doctorsCount: number;
};

export const Links: FC<PropsWithClassName<Props>> = ({
    className,
    onlineCount,
    offlineCount,
    cooperationCount,
    doctorsCount,
}) => {
    return (
        <div className={cn(className, styles.wrapper)}>
            <LinksItem
                className={styles.item}
                href="/"
                title="Онлайн услуги"
                count={onlineCount}
                icon={<WifiIcon />}
            />
            <LinksItem
                className={styles.item}
                href="/"
                title="Оффлайн услуги"
                count={offlineCount}
                icon={<NoWifiIcon />}
            />
            <LinksItem
                className={styles.item}
                href={ROUTES.cooperation.path}
                title={"Новости"}
                count={cooperationCount}
                icon={<CooperationIcon />}
            />
            <LinksItem
                className={styles.item}
                href={ROUTES.hardware.path}
                title={"Врачи"}
                count={doctorsCount}
                icon={<HarwareIcon />}
            />
        </div>
    );
};
