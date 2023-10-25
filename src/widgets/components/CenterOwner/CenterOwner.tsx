import { FC } from "react";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Text } from "@/shared/ui/Text";
import { SMALL_LAPTOP, MOBILE, LAPTOP } from "@/shared/utils";

import man from "/assets/man.jpg";
import arrow from "/assets/arrow-right.svg";
import styles from "./CenterOwner.module.scss";

interface ICenterOwnerProps {
    type: "center" | "clinic";
}

export const CenterOwner: FC<ICenterOwnerProps> = ({ type }) => {
    return (
        <>
            {type === "center" && (
                <WhiteContentBlock>
                    <div className={styles.nav}>
                        <Text type="h2" fz={SMALL_LAPTOP ? "15px" : "20px"}>
                            Администратор
                        </Text>
                        <img src={arrow} alt="" />
                    </div>
                    <div className={styles.adminCenter}>
                        <img src={man} alt="" />
                        <Text type="h2" fz="18px">
                            Собственность Pre-Recover
                        </Text>
                    </div>
                </WhiteContentBlock>
            )}
            {type === "clinic" && (
                <WhiteContentBlock>
                    <div className={styles.admin}>
                        <div className={styles.nav}>
                            <Text
                                type="h2"
                                fz={
                                    MOBILE || LAPTOP
                                        ? "17px"
                                        : SMALL_LAPTOP
                                        ? "15px"
                                        : "18px"
                                }
                            >
                                Администратор
                            </Text>
                            <img src={arrow} alt="" />
                        </div>
                        <div className={styles.data}>
                            <img src={man} alt="" />
                            <div
                                className={styles.text}
                                style={{
                                    gridGap: LAPTOP || SMALL_LAPTOP ? 6 : 8,
                                }}
                            >
                                <Text
                                    type="h2"
                                    fz={
                                        MOBILE || LAPTOP
                                            ? "15px"
                                            : SMALL_LAPTOP
                                            ? "13px"
                                            : "16px"
                                    }
                                >
                                    Алексеев Эрнест Владимирович
                                </Text>
                                <div
                                    className={styles.text}
                                    style={{ gridGap: 3 }}
                                >
                                    <Text
                                        type="h2"
                                        fz={
                                            MOBILE || SMALL_LAPTOP
                                                ? "13px"
                                                : LAPTOP
                                                ? "15px"
                                                : "16px"
                                        }
                                    >
                                        Номер телефона
                                    </Text>
                                    <Text
                                        type="p"
                                        fz={
                                            MOBILE || LAPTOP
                                                ? "14px"
                                                : SMALL_LAPTOP
                                                ? "12px"
                                                : "14px"
                                        }
                                    >
                                        +7(923)-123-45-67
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </WhiteContentBlock>
            )}
        </>
    );
};
