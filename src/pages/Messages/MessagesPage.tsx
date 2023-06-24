import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { Search } from "../../widgets";
import { Filter, Text } from "../../shared";

import woman from "/assets/woman.jpg";
import styles from "./MessagesPage.module.scss";

export const MessagesPage: FC = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div className={styles.box}>
                        <Search />
                        <Filter data={["Сообщения", "Звонки"]} width="490px" />
                        <div className={styles.chats}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                                <div className={styles.chat}>
                                    <div className={styles.inner}>
                                        <img src={woman} alt="" />
                                        <div className={styles.data}>
                                            <Text
                                                type="h2"
                                                color="#262626"
                                                fz="20px"
                                            >
                                                Михайлова Т. А.
                                            </Text>
                                            <Text
                                                type="p"
                                                fz="14px"
                                                color="#7D7F82"
                                            >
                                                Привет как настроение?
                                            </Text>
                                        </div>
                                    </div>
                                    <div className={styles.time}>
                                        <Text type="p" color="#7D7F82">
                                            2:23
                                        </Text>
                                    </div>
                                    <div className={styles.counter}>98</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
