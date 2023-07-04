import { FC } from "react";

import { MobileContainer, MobileHeader, Rating, Search } from "@/widgets";
import { MobileFilter, Text } from "@/shared";
import { useFilter, useUserCondition } from "@/shared/model/store";
import { Layout } from "../Layout/Layout";

import center from "/assets/center-icon.jpg";
import styles from "./MobileSearchPage.module.scss";

export const MobileSearchPage: FC = () => {
    const { isFilter } = useFilter();
    const { condition } = useUserCondition();

    const renderElements = (filter: string) => {
        switch (filter) {
            case "Центры":
                return (
                    <div className={styles.result}>
                        <div className={styles.inner}>
                            <img src={center} alt="" />
                            <div className={styles.data}>
                                <Text type="h2" fz="17px">
                                    Центр 259
                                </Text>
                                <Text type="p" fz="12px">
                                    Constraints автоматом выставляется у
                                    элементов, которые ручками добавляются, а
                                    вот у иконок, к примеру, которые через
                                    плагины д...
                                </Text>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.rating}>
                                <Rating
                                    width="20px"
                                    height="20px"
                                    defaultValue={4}
                                />
                                <Text type="p" fz="13px">
                                    4.0
                                </Text>
                            </div>
                            <div className={styles.country}>
                                <Text type="p" color="#B1B2B4" fz="13px">
                                    Россия, Москва
                                </Text>
                            </div>
                        </div>
                    </div>
                );
            case "Клиники":
                return (
                    <div className={styles.result}>
                        <div className={styles.inner}>
                            <img src={center} alt="" />
                            <div className={styles.data}>
                                <Text type="h2" fz="17px">
                                    Центр 259
                                </Text>
                                <Text type="p" fz="12px">
                                    Constraints автоматом выставляется у
                                    элементов, которые ручками добавляются, а
                                    вот у иконок, к примеру, которые через
                                    плагины д...
                                </Text>
                            </div>
                        </div>
                        <div className={styles.more}>
                            <div className={styles.inner}>
                                <Text
                                    type="p"
                                    fz="11px"
                                    color="#B1B2B4"
                                    position="end"
                                >
                                    Предназначено для: 13 видов забол. и &nbsp;
                                    <span
                                        style={
                                            condition === "Болен"
                                                ? { color: "#D64657" }
                                                : {}
                                        }
                                    >
                                        ваше заболевание
                                    </span>
                                </Text>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.rating}>
                                <Rating
                                    width="20px"
                                    height="20px"
                                    defaultValue={4}
                                />
                                <Text type="p" fz="13px">
                                    4.0
                                </Text>
                            </div>
                            <div className={styles.country}>
                                <Text type="p" color="#B1B2B4" fz="13px">
                                    Россия, Москва
                                </Text>
                            </div>
                        </div>
                    </div>
                );
            case "Врачи":
                return (
                    <div className={styles.result}>
                        <div className={styles.inner}>
                            <img src={center} alt="" />
                            <div className={styles.data}>
                                <Text type="h2" fz="17px">
                                    Центр 259
                                </Text>
                                <Text type="p" fz="12px">
                                    Constraints автоматом выставляется у
                                    элементов, которые ручками добавляются, а
                                    вот у иконок, к примеру, которые через
                                    плагины д...
                                </Text>
                            </div>
                        </div>
                        <div className={styles.more}>
                            <div className={styles.inner}>
                                <Text
                                    type="p"
                                    fz="11px"
                                    color="#B1B2B4"
                                    position="end"
                                >
                                    Предназначено для: 13 видов забол. и &nbsp;
                                    <span
                                        style={
                                            condition === "Болен"
                                                ? { color: "#D64657" }
                                                : {}
                                        }
                                    >
                                        ваше заболевание
                                    </span>
                                </Text>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.rating}>
                                <Rating
                                    width="20px"
                                    height="20px"
                                    defaultValue={4}
                                />
                                <Text type="p" fz="13px">
                                    4.0
                                </Text>
                            </div>
                            <div className={styles.country}>
                                <Text type="p" color="#B1B2B4" fz="13px">
                                    Россия, Москва
                                </Text>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    const elements = renderElements(isFilter);

    return (
        <Layout>
            <MobileHeader />
            <MobileContainer>
                <div className={styles.box}>
                    <Search height="50px" placeholder="Поиск чатов" />
                    <MobileFilter data={["Центры", "Клиники", "Врачи"]} />
                </div>
                <div className={styles.results}>{elements}</div>
            </MobileContainer>
        </Layout>
    );
};
