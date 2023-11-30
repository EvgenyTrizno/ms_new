import { FC, ReactNode } from "react";
import { ISearchBlockProps } from "./types";

import { Rating } from "@/features/Rating";
import { TABLET } from "@/shared/utils";
import { Text } from "@/shared/ui/Text";

import center from "/assets/center-icon.jpg";

import styles from "./SearchResultBlock.module.scss";

export const SearchResultBlock: FC<ISearchBlockProps> = ({
    type,
    children,
}): ReactNode => {
    const sick = "Болен";

    const renderElements = () => {
        switch (type) {
            case "Центры":
                return (
                    <div className={styles.result}>
                        <div className={styles.inner}>
                            <img src={center} alt="" />
                            <div className={styles.data}>
                                <Text type="h2" fz={TABLET ? "19px" : "17px"}>
                                    Центр 259
                                </Text>
                                <Text type="p" fz={TABLET ? "14px" : "12px"}>
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
                                        style={sick ? { color: "#D64657" } : {}}
                                    >
                                        ваше заболевание
                                    </span>
                                </Text>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.rating}>
                                <Rating
                                    width={TABLET ? "24px" : "20px"}
                                    height={TABLET ? "24px" : "20px"}
                                    defaultValue={4}
                                    gap={TABLET ? "4px" : "3px"}
                                />
                                <Text type="p" fz={TABLET ? "15px" : "13px"}>
                                    4.0
                                </Text>
                            </div>
                            <div className={styles.country}>
                                <Text
                                    type="p"
                                    color="#B1B2B4"
                                    fz={TABLET ? "15px" : "13px"}
                                >
                                    Россия, Москва
                                </Text>
                            </div>
                        </div>
                    </div>
                );
                break;
            case "Клиники":
                return (
                    <div className={styles.result}>
                        <div className={styles.inner}>
                            <img src={center} alt="" />
                            <div className={styles.data}>
                                <Text type="h2" fz={TABLET ? "19px" : "17px"}>
                                    Центр 259
                                </Text>
                                <Text type="p" fz={TABLET ? "14px" : "12px"}>
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
                                        style={sick ? { color: "#D64657" } : {}}
                                    >
                                        ваше заболевание
                                    </span>
                                </Text>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.rating}>
                                <Rating
                                    width={TABLET ? "24px" : "20px"}
                                    height={TABLET ? "24px" : "20px"}
                                    defaultValue={4}
                                    gap={TABLET ? "4px" : "3px"}
                                />
                                <Text type="p" fz={TABLET ? "15px" : "13px"}>
                                    4.0
                                </Text>
                            </div>
                            <div className={styles.country}>
                                <Text
                                    type="p"
                                    color="#B1B2B4"
                                    fz={TABLET ? "15px" : "13px"}
                                >
                                    Россия, Москва
                                </Text>
                            </div>
                        </div>
                    </div>
                );
                break;
            case "Врачи":
                return (
                    <div className={styles.result}>
                        <div className={styles.inner}>
                            <img
                                src={center}
                                alt=""
                                className={styles.avatar}
                            />
                            <div className={styles.data}>
                                <Text type="h2" fz={TABLET ? "19px" : "17px"}>
                                    Яковенко Алина С.
                                </Text>
                                <div className={styles.list}>{children}</div>
                            </div>
                        </div>
                        <div
                            className={styles.bottom}
                            style={{ marginTop: "32px" }}
                        >
                            <div className={styles.rating}>
                                <Rating
                                    width={TABLET ? "24px" : "20px"}
                                    height={TABLET ? "24px" : "20px"}
                                    defaultValue={4}
                                    gap={TABLET ? "4px" : "3px"}
                                />
                                <Text type="p" fz={TABLET ? "15px" : "13px"}>
                                    4.0
                                </Text>
                            </div>
                            <div className={styles.country}>
                                <Text
                                    type="p"
                                    color="#B1B2B4"
                                    fz={TABLET ? "15px" : "13px"}
                                >
                                    Россия, Москва
                                </Text>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    const elements = renderElements();

    return elements;
};
