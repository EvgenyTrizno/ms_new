import { FC } from "react";

import { Text } from "@/shared";

import woman from "/assets/woman.jpg";
import styles from "./MobileCard.module.scss";

export const MobileCard: FC = () => {
    return (
        <div className={styles.mobileCard}>
            <img src={woman} alt="" />
            <Text type="p" fz="10px" position="center" color="#7D7F82">
                Хирург
            </Text>
        </div>
    );
};
