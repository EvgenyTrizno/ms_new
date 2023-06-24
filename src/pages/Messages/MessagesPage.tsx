import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { Search } from "../../widgets";
import { Filter, Input, Text } from "../../shared";

import woman from "/assets/woman.jpg";
import call from "/assets/call-calling.svg";
import paperclip from "/assets/paperclip-blue.svg";
import sender from "/assets/send-blue.svg";
import emoji from "/assets/emoji-normal.svg";
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
                <div className={styles.view}>
                    <div className={styles.info}>
                        <div className={styles.data}>
                            <img src={woman} alt="" />
                            <div className={styles.text}>
                                <Text type="h2" fz="18px">
                                    Яковенко А. С.
                                </Text>
                                <Text type="p" color="#84C55D">
                                    Online
                                </Text>
                            </div>
                        </div>
                        <img src={call} alt="" className={styles.call} />
                    </div>
                    <div></div>
                    <div className={styles.messageBlock}>
                        <div className={styles.wrapper}>
                            <img src={paperclip} alt="" />
                            <div className={styles.inner}>
                                <Input
                                    type="text"
                                    placeholder="Поиск чатов"
                                    br="none"
                                    btr="unset"
                                    bbr="unset"
                                    bcolor="#E9EAEB"
                                />
                                <div className={styles.btn}>
                                    <img src={emoji} alt="" />
                                </div>
                            </div>
                            <img src={sender} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
