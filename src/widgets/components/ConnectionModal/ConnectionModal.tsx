import { FC } from "react";

import { Btn } from "@/shared/ui/Btn";
import { Text } from "@/shared/ui/Text";

import woman from "/assets/woman.jpg";
import user from "/assets/user-with-plus.svg";
import styles from "./ConnectionModal.module.scss";

export const ConnectionModal: FC = () => {
    return (
        <div className={styles.connection}>
            <div className={styles.list}>
                {[1, 2, 3, 4, 5].map(() => (
                    <div className={`${styles.card} ${styles.cardWhite}`}>
                        <img src={woman} alt="" />
                        <div className={styles.text}>
                            <Text type="h2" fz="16px">
                                Иванова Светлана Васильевна
                            </Text>
                            <Text type="p" fz="14px">
                                12 декабря 1999
                            </Text>
                            <Text type="p" fz="14px">
                                Ташкент, Узбекистан
                            </Text>
                        </div>
                        <Btn color="#0064FA" height="48px">
                            Связаться
                        </Btn>
                    </div>
                ))}
                <div className={styles.card}>
                    <button className={styles.add}>
                        <Text type="h2" color="#0064FA" fz="24px">
                            Добавить
                        </Text>
                        <img src={user} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};
