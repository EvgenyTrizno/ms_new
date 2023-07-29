import { FC, useState } from "react";
import { ICard } from "./types";

import { Checkbox, Text } from "@/shared";
import { useUserCondition } from "@/shared/model/store";

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
            style={sick ? { borderColor: "#F7E6E8" } : {}}
        >
            <img src={woman} alt="woman" className={styles.img} />
            <div className={styles.checkbox}>
                {checkbox && <Checkbox checked={isSelect} />}
            </div>
            <div className={styles.box}>
                <Text type="h3">Михайлова Т. А.</Text>
                <Text type="p" position="center">
                    Хирург
                </Text>
            </div>
        </div>
    );
};
