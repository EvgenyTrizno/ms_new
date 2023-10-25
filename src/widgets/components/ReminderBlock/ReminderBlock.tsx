import { FC } from "react";
import { ITypeProps } from "./types";

import { Text } from "@/shared/ui/Text";
import { useUserCondition } from "@/shared/model/store";
import { PC, TABLET } from "@/shared/utils";

import arrowRight from "/assets/arrow-right-blue.svg";
import arrowRightRed from "/assets/arrow-right-red.svg";
import styles from "./ReminderBlock.module.scss";

export const ReminderBlock: FC<ITypeProps> = ({ type, width }) => {
    const { condition } = useUserCondition();

    const sick = condition === "Болен";
    const classes = sick
        ? `${styles.notify} ${styles.notifyRed} ${styles.notifyRedBorder}`
        : `${styles.notify} ${styles.notifyBlue} ${styles.notifyBlueBorder}`;

    const renderElements = () => {
        if (type === "timer") {
            return (
                <div
                    className={styles.notify}
                    style={{
                        border: sick
                            ? "1px solid #D64657"
                            : "1px solid #0064FA",
                    }}
                >
                    <Text
                        type="p"
                        fz="14px"
                        position="left"
                        color={sick ? "#D64657" : "#0064FA"}
                    >
                        До основной записи осталось 22:59
                    </Text>
                </div>
            );
        } else {
            return (
                <div className={classes}>
                    <Text
                        type="p"
                        fz={TABLET || PC ? "16px" : "14px"}
                        color={sick ? "#D64657" : "#0064FA"}
                    >
                        Запись создана!
                    </Text>
                    <img src={sick ? arrowRightRed : arrowRight} alt="" />
                </div>
            );
        }
    };

    const elements = renderElements();

    return <div style={{ width }}>{elements}</div>;
};
