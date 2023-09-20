import { FC } from "react";

import { Btn, Text } from "@/shared";

import woman from "/assets/woman.jpg";
import styles from "./ConnectionModal.module.scss";

export const ConnectionModal: FC = () => {
    return (
        <div className={styles.connection}>
            <div className={styles.list}>
                {[1, 2, 3, 4, 5].map(() => (
                    <div className={`${styles.card} ${styles.cardWhite}`}>
                        <img src={woman} alt="" />
                        <div className={styles.text}>
                            <Text type="h2" fz="17px">
                                Иванова Светлана Васильевна
                            </Text>
                            <Text type="p" fz="14px">
                                12 декабря 1999
                            </Text>
                            <Text
                                type="p"
                                fz="14px"
                                position="right"
                                color="#7D7F82"
                            >
                                Ташкент, Узбекистан
                            </Text>
                        </div>
                        <Btn color="#0064FA">Связаться</Btn>
                    </div>
                ))}
            </div>
        </div>
    );
};
