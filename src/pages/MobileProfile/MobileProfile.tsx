import { FC, useState } from "react";

import { MobileContainer } from "@/widgets";
import { useUserCondition } from "@/shared/model/store";
import { BackArrow, Text } from "@/shared";

import dots from "/assets/dots-more.svg";
import call from "/assets/call-calling.svg";
import avatar from "/assets/man.jpg";
import styles from "./MobileProfile.module.scss";

export const MobileProfile: FC = () => {
    const { condition } = useUserCondition();
    const [isSelect, setIsSelect] = useState("");

    const filters = ["Медия", "Файлы", "Голос", "Ссылки"];

    return (
        <div className={styles.mobileProfile}>
            <div
                className={styles.header}
                style={
                    condition === "Болен"
                        ? { borderBottomColor: "#F7E6E8" }
                        : {}
                }
            >
                <BackArrow path="/m/" />
                <div className={styles.menu}>
                    <img src={call} alt="" />
                    <img src={dots} alt="" />
                </div>
            </div>
            <MobileContainer>
                <div className={styles.profile}>
                    <div className={styles.data}>
                        <img src={avatar} alt="" />
                        <div className={styles.text}>
                            <Text type="h2" fz="18px">
                                Яковенко А. С.
                            </Text>
                            <Text type="p" fz="15px" color="#00CC5E">
                                Онлайн
                            </Text>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <Text type="p" color="#7D7F82" fz="14px">
                            Информация
                        </Text>
                        <div className={styles.box}>
                            <ul>
                                <li>
                                    Специальность:
                                    <Text type="p" fz="14px" color="#262626">
                                        Хирург
                                    </Text>
                                </li>
                                <li>
                                    Числится:
                                    <Text type="p" fz="14px" color="#262626">
                                        Лорем Ипсум
                                    </Text>
                                </li>
                                <li>
                                    Опыт работы:
                                    <Text type="p" fz="14px" color="#262626">
                                        5 лет
                                    </Text>
                                </li>
                                <li>
                                    Номер:
                                    <Text type="p" fz="14px" color="#262626">
                                        +7 (989) 678-78-98
                                    </Text>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.buffer}>
                        <div className={styles.filter}>
                            {filters.map((item) => (
                                <div
                                    className={
                                        isSelect === item
                                            ? `${styles.itemActive} ${styles.item}`
                                            : `${styles.item}`
                                    }
                                    key={item}
                                    onClick={() => setIsSelect(item)}
                                >
                                    <Text type="p" fz="14px" color="#7D7F82">
                                        {item}
                                    </Text>
                                    <div className={styles.line}></div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.data}>
                            <div className={styles.item}></div>
                            <div className={styles.item}></div>
                            <div className={styles.item}></div>
                            <div className={styles.item}></div>
                        </div>
                    </div>
                </div>
            </MobileContainer>
        </div>
    );
};
