import { FC } from "react";

import {
    MobileCard,
    MobileHeader,
    MobilePost,
    Slider,
    MobileContainer,
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
                    <Text type="h2" fz="12px" color="#B1B2B4">
                        Специалисты из Узбекистана
                    </Text>
                    <Slider container="100%" navigate={false}>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item}>
                                <MobileCard />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className={styles.line}></div>
                <div className={styles.posts}>
                    <div className={styles.nav}>
                        <Text type="h2" color="#262626" fz="15px">
                            Популярные посты
                        </Text>
                        <Btn
                            color={`${
                                condition === "Болен" ? "#D64657" : "#0064FA"
                            }`}
                            width="40px"
                            height="40px"
                            padding="0"
                        >
                            <img src={settings} alt="" />
                        </Btn>
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
