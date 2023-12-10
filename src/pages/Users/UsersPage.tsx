import { FC, useEffect, useState } from "react";
import { animate, stagger } from "framer-motion";

import { Layout } from "../Layout";
import { Text } from "@/shared/ui/Text";

import arrowDown from "/assets/arrow-down-gray.svg";
import man from "/assets/man.jpg";
import styles from "./UsersPage.module.scss";

const UsersPage: FC = () => {
    const [isFilter, setIsFilter] = useState<number>(1);

    useEffect(() => {
        animate(
            "li",
            {
                opacity: [0, 1],
            },
            { delay: stagger(0.2) }
        );
    }, []);

    return (
        <Layout>
            <div className={styles.users}>
                <div className={styles.search}>
                    <Text type="h2" fz="24px">
                        Всего пользователей - 3135
                    </Text>
                </div>
                <div className={styles.filters}>
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className={
                                isFilter === item
                                    ? `${styles.filter} ${styles.active}`
                                    : styles.filter
                            }
                            onClick={() => setIsFilter(item)}
                        >
                            <Text type="h2" color="#B1B2B4" fz="19px">
                                Москва 55
                            </Text>
                        </div>
                    ))}
                </div>
                <div className={styles.table}>
                    <div className={styles.tableFilters}>
                        <div
                            className={styles.tableFilter}
                            style={{ marginLeft: "36px" }}
                        >
                            <Text type="p" fz="17px" color="#7D7F82">
                                Имя Фамилия
                            </Text>
                            <img src={arrowDown} alt="" />
                        </div>
                        <div
                            className={styles.tableFilter}
                            style={{ justifyContent: "center" }}
                        >
                            <Text type="p" fz="17px" color="#7D7F82">
                                Дата Рождения
                            </Text>
                            <img src={arrowDown} alt="" />
                        </div>
                        <div
                            className={styles.tableFilter}
                            style={{ justifyContent: "center" }}
                        >
                            <Text type="p" fz="17px" color="#7D7F82">
                                Болезнь · Проблема · Недуг
                            </Text>
                            <img src={arrowDown} alt="" />
                        </div>
                        <div
                            className={styles.tableFilter}
                            style={{ justifyContent: "flex-end" }}
                        >
                            <Text type="p" fz="17px" color="#7D7F82">
                                Дата Поступления
                            </Text>
                            <img src={arrowDown} alt="" />
                        </div>
                    </div>
                    <ul className={styles.box}>
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <li className={styles.cols} key={i}>
                                <div className={styles.col}>
                                    <div className={styles.data}>
                                        <Text
                                            color="#7D7F82"
                                            type="p"
                                            fz="17px"
                                        >
                                            {`${i + 1}.`}
                                        </Text>
                                        <img src={man} alt="" />
                                        <div className={styles.text}>
                                            <Text type="h2" fz="19px">
                                                Яковенко А. С.
                                            </Text>
                                            <Text
                                                type="p"
                                                fz="17px"
                                                color="#B1B2B4"
                                            >
                                                Пользователь
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.col}>
                                    <Text type="p" fz="19px" position="center">
                                        24 Фев, 1994
                                    </Text>
                                </div>
                                <div
                                    className={styles.col}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        color={styles.disease}
                                        style={{
                                            backgroundColor: "#EBF3FF",
                                            padding: "12px 16px",
                                            borderRadius: 16,
                                        }}
                                    >
                                        <Text
                                            type="h3"
                                            fz="19px"
                                            color="#0064FA"
                                        >
                                            Ковид
                                        </Text>
                                    </div>
                                </div>
                                <div className={styles.col}>
                                    <Text type="p" fz="19px" position="end">
                                        24 Фев, 1994
                                    </Text>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default UsersPage;
