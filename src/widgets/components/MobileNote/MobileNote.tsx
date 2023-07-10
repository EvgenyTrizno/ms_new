import { FC } from "react";

import { Text } from "@/shared";

import alarm from "/assets/alarm-clock.svg";
import arrowRight from "/assets/arrow-right-black.svg";
import styles from "./MobileNote.module.scss";

export const MobileNote: FC = () => {
    return (
        <div className={styles.note}>
            <div className={styles.nav}>
                <div className={styles.date}>
                    <img src={alarm} alt="" />
                    <Text type="p" fz="12px">
                        14:00 - 15:00
                    </Text>
                    <Text type="p" color="#00CC5E" fz="12px">
                        Онлайн
                    </Text>
                </div>
                <img src={arrowRight} alt="" />
            </div>
            <div className={styles.text}>
                <Text type="h2" fz="17px">
                    Восстановление
                </Text>
                <Text type="p" fz="12px" color="#7D7F82">
                    Для работодателей и заказчиков — предсказуемая площадка с
                    понятными правилами.
                </Text>
            </div>
        </div>
    );
};
