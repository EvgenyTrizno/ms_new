import { FC } from "react";
import { ITypeProps } from "./types";

import { Text } from "@/shared/ui/Text";
import { useAuth } from "@/shared/model/store/auth";

// import arrowRight from "/assets/arrow-right-blue.svg";
// import arrowRightRed from "/assets/arrow-right-red.svg";
import styles from "./ReminderBlock.module.scss";

export const ReminderBlock: FC<ITypeProps> = ({ type, width }) => {
    const { user } = useAuth();

    const sick = user && user.disease.length;

    const renderElements = () => {
        if (type === "timer") {
            return (
                <div className={`${styles.notify} ${sick && styles.sick}`}>
                    <Text type="p" fz="14px" position="left">
                        До основной записи осталось 22:59
                    </Text>
                </div>
            );
        } else {
            return (
                <div className={styles.notify}>
                    <Text type="p">Запись создана!</Text>
                </div>
            );
        }
    };

    const elements = renderElements();

    return <div style={{ width }}>{elements}</div>;
};
