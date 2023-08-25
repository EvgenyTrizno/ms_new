import { FC, useState } from "react";
import { ICard } from "./types";

import { Checkbox, Text } from "@/shared";
import { useUserCondition } from "@/shared/model/store";
import { PC, SMALL_LAPTOP } from "@/shared/utils";

import styles from "./Card.module.scss";
import woman from "/assets/woman.jpg";

export const Card: FC<ICard> = ({ checkbox }) => {
    const [isSelect, setIsSelect] = useState<boolean>(false);
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    return (
        <div
            className={styles.card}
            onClick={() => setIsSelect((prev) => !prev)}
            style={{
                borderColor: sick ? "#F7E6E8" : "",
            }}
        >
            <img src={woman} alt="woman" className={styles.img} />
            <div className={styles.checkbox}>
                {checkbox && <Checkbox checked={isSelect} />}
            </div>
            <div className={styles.box}>
                <Text
                    type="h3"
                    fz={PC ? "16px" : SMALL_LAPTOP ? "14px" : "13px"}
                >
                    Михайлова Т. А.
                </Text>
                <Text type="p" position="center" fz={PC ? "16px" : "12px"}>
                    Хирург
                </Text>
            </div>
        </div>
    );
};
