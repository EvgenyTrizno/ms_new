import { FC } from "react";

import {
    MobileCard,
    MobileHeader,
    MobilePost,
    Slider,
    MobileContainer,
    Card,
} from "@/widgets";
import { Btn, Text } from "@/shared";
import { useUserCondition } from "@/shared/model/store";
import { Layout } from "../Layout/Layout";

import settings from "/assets/controler.svg";
import styles from "./MobileMainPage.module.scss";

const MobileMainPage: FC = () => {
    const { condition } = useUserCondition();

    return (
        <Layout>
            <MobileHeader />
            <MobileContainer>
                <div className={styles.box}>
                    <Text
                        type="h2"
                        fz={
                            window.matchMedia("(max-width: 576px)").matches
                                ? "12px"
                                : "14px"
                        }
                        color="#B1B2B4"
                    >
                        Специалисты из Узбекистана
                    </Text>
                    <Slider container="100%" navigate={false}>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <>
                                {window.matchMedia("(max-width: 576px)")
                                    .matches ? (
                                    <MobileCard key={item} />
                                ) : (
                                    <Card checkbox={false} key={item} />
                                )}
                            </>
                        ))}
                    </Slider>
                </div>
                <div className={styles.line}></div>
                <div className={styles.posts}>
                    <div className={styles.nav}>
                        <Text
                            type="h2"
                            color="#262626"
                            fz={
                                window.matchMedia("(max-width: 576px)").matches
                                    ? "15px"
                                    : "17px"
                            }
                        >
                            Популярные посты
                        </Text>
                        {window.matchMedia("(max-width: 576px)").matches ? (
                            <Btn
                                color={`${
                                    condition === "Болен"
                                        ? "#D64657"
                                        : "#0064FA"
                                }`}
                                width="40px"
                                height="40px"
                                padding="0"
                            >
                                <img src={settings} alt="" />
                            </Btn>
                        ) : (
                            <Btn
                                color={`${
                                    condition === "Болен"
                                        ? "#D64657"
                                        : "#0064FA"
                                }`}
                                width="142px"
                                height="46px"
                                padding="12px 20px"
                                br="14px"
                            >
                                <div className={styles.filterBtn}>
                                    <img src={settings} alt="" />
                                    <Text type="h2" fz="15px">
                                        Фильтры
                                    </Text>
                                </div>
                            </Btn>
                        )}
                    </div>
                    <div className={styles.items}>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item}>
                                <MobilePost />
                            </div>
                        ))}
                    </div>
                </div>
            </MobileContainer>
        </Layout>
    );
};

export default MobileMainPage;
