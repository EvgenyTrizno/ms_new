import { FC } from "react";

// import { MobileSwitcher } from "@/shared";

import man from "/assets/man.jpg";
import settings from "/assets/setting-black.svg";
import styles from "./styles.module.scss";
import { Avatar } from "@/shared/ui/Avatar";

export const MobileHeader: FC = () => {
    return (
        <div className={styles.mobileHeader}>
            <Avatar img={man} size={60} type="custom" />
            {/* <MobileSwitcher /> */}
            <div className={styles.settings}>
                <img src={settings} alt="" />
            </div>
        </div>
    );
};
