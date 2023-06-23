import { FC, useState } from "react";
import { ICard } from "./types";

import { Checkbox, Text } from "../../../shared";

import styles from "./Card.module.scss";
import woman from "/assets/woman.jpg";

export const Card: FC<ICard> = ({ checkbox }) => {
    const [isSelect, setIsSelect] = useState<boolean>(false);

    return (
        <div className={styles.card} onClick={() => setIsSelect(true)}>
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
