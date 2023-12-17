import { FC } from "react";
import { useNavigate } from "react-router";

import { Avatar } from "@/shared/ui/Avatar";
import { HealthyStatus } from "../HealthyStatus";
import { ROUTES } from "@/shared/utils/PATHS";

import man from "/assets/man.jpg";
import settings from "/assets/setting-black.svg";
import styles from "./styles.module.scss";

export const MobileHeader: FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.mobileHeader}>
            <Avatar
                img={man}
                size={52}
                type="custom"
                onClick={() => navigate(ROUTES.profile.path)}
            />
            <HealthyStatus isHovered={false} />
            <div className={styles.settings}>
                <img src={settings} alt="" />
            </div>
        </div>
    );
};
