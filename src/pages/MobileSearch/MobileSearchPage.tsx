import { FC } from "react";

import { MobileContainer, MobileHeader, Rating } from "@/widgets";
import { MobileFilter, MobileSearch, Text } from "@/shared";
import { useFilter, useUserCondition } from "@/shared/model/store";
import { Layout } from "../Layout/Layout";

import center from "/assets/center-icon.jpg";
import styles from "./MobileSearchPage.module.scss";

const MobileSearchPage: FC = () => {
    const { isFilter } = useFilter();
    const { condition } = useUserCondition();

    const media = window.matchMedia(
        "(min-width: 576px) and (max-width: 768px)"
    ).matches;

    const renderElements = (filter: string) => {
        switch (filter) {
            case "Центры":
                return (
                    <div className={styles.result}>
                        <div className={styles.inner}>
                            <img src={center} alt="" />
                            <div className={styles.data}>
                                <Text type="h2" fz={media ? "19px" : "17px"}>
                                    Центр 259
                                </Text>
                                <Text type="p" fz={media ? "14px" : "12px"}>
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
                                    width={media ? "24px" : "20px"}
                                    height={media ? "24px" : "20px"}
                                    defaultValue={4}
                                    gap={media ? "4px" : "3px"}
                                />
                                <Text type="p" fz={media ? "15px" : "13px"}>
                                    4.0
                                </Text>
                            </div>
                            <div className={styles.country}>
                                <Text
                                    type="p"
                                    color="#B1B2B4"
                                    fz={media ? "15px" : "13px"}
                                >
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
                                <Text type="h2" fz={media ? "19px" : "17px"}>
                                    Центр 259
                                </Text>
                                <Text type="p" fz={media ? "14px" : "12px"}>
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
                                    width={media ? "24px" : "20px"}
                                    height={media ? "24px" : "20px"}
                                    defaultValue={4}
                                    gap={media ? "4px" : "3px"}
                                />
                                <Text type="p" fz={media ? "15px" : "13px"}>
                                    4.0
                                </Text>
                            </div>
                            <div className={styles.country}>
                                <Text
                                    type="p"
                                    color="#B1B2B4"
                                    fz={media ? "15px" : "13px"}
                                >
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
                                <Text type="h2" fz={media ? "19px" : "17px"}>
                                    Центр 259
                                </Text>
                                <Text type="p" fz={media ? "14px" : "12px"}>
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
                                    width={media ? "24px" : "20px"}
                                    height={media ? "24px" : "20px"}
                                    defaultValue={4}
                                    gap={media ? "4px" : "3px"}
                                />
                                <Text type="p" fz={media ? "15px" : "13px"}>
                                    4.0
                                </Text>
                            </div>
                            <div className={styles.country}>
                                <Text
                                    type="p"
                                    color="#B1B2B4"
                                    fz={media ? "15px" : "13px"}
                                >
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
                    <MobileSearch
                        height="50px"
                        placeholder="Поиск чатов"
                        filterBtn
                    />
                    <MobileFilter data={["Центры", "Клиники", "Врачи"]} />
                </div>
                <div className={styles.results}>{elements}</div>
            </MobileContainer>
        </Layout>
    );
};

export default MobileSearchPage;
