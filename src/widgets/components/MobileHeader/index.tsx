import { FC } from "react";

import { Avatar } from "@/shared/ui/Avatar";
import { HealthyStatus } from "../HealthyStatus";

import man from "/assets/man.jpg";
import settings from "/assets/setting-black.svg";
import styles from "./styles.module.scss";

export const MobileHeader: FC = () => {
    return (
        <div className={styles.mobileHeader}>
            <Avatar img={man} size={52} type="custom" />
            <HealthyStatus isHovered={false} />
            <div className={styles.settings}>
                <img src={settings} alt="" />
            </div>
        </div>
    );
};
