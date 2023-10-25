import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { MobileContainer, MobileHeader, MobileMenu } from "@/widgets";
import { useUserCondition } from "@/shared/model/store";
import { Text } from "@/shared/ui/Text";

import woman from "/assets/woman.jpg";
import styles from "./MobileNotification.module.scss";

const MobileNotification: FC = () => {
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    return (
        <Layout>
            <MobileHeader />
            <MobileContainer>
                <div className={styles.box}>
                    <Text type="p" fz="14px" color="#7D7F82">
                        Сегодня
                    </Text>
                    <div className={styles.list}>
                        <div
                            className={styles.notify}
                            style={{ borderColor: sick ? "#F7E6E8" : "" }}
                        >
                            <div className={styles.icon}>
                                <img src={woman} alt="" />
                            </div>
                            <div className={styles.content}>
                                <Text type="p" fz="13px" color="#7D7F82">
                                    Вышел новый пост у мед.центра &nbsp;
                                    <div className={styles.center}>
                                        <Text type="h2" fz="13px">
                                            Абвг
                                        </Text>
                                    </div>
                                </Text>
                                <Text type="p" fz="11px" color="#B1B2B4">
                                    3 часа назад
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </MobileContainer>
            <MobileMenu />
        </Layout>
    );
};

export default MobileNotification;
