import { FC } from "react";
import { useNavigate } from "react-router";

import { Text } from "@/shared";
import { useUserCondition } from "@/shared/model/store";

import arrowLeft from "/assets/arrow-left.svg";
import woman from "/assets/woman.jpg";
import call from "/assets/call-calling.svg";
import clips from "/assets/paperclip-blue.svg";
import microphone from "/assets/microphone-blue.svg";
import emoji from "/assets/emoji-normal.svg";
import ghost from "/assets/ghost.svg";
import styles from "./MobileChatPage.module.scss";

const MobileChatPage: FC = () => {
    const { condition } = useUserCondition();
    const navigate = useNavigate();

    return (
        <div className={styles.chat}>
            <div
                className={styles.header}
                style={
                    condition === "Болен"
                        ? { borderBottomColor: "#F7E6E8" }
                        : {}
                }
            >
                <div className={styles.user}>
                    <img src={arrowLeft} alt="" onClick={() => navigate(-1)} />
                    <div className={styles.data}>
                        <img src={woman} alt="" className={styles.avatar} />
                        <div className={styles.text}>
                            <Text type="h2" fz="16px">
                                Яковенко А. С.
                            </Text>
                            <Text type="p" color="#7D7F82" fz="13px">
                                Был(а) недавно
                            </Text>
                        </div>
                    </div>
                </div>
                <img src={call} alt="" />
            </div>
            <div className={styles.chatContainer}>
                {/* <div className={styles.chatBox}>
                    <div className={styles.date}>
                        <Text type="p" fz="12px" color="#7D7F82">
                            Сегодня
                        </Text>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.message}>
                            <div className={styles.inner}>
                                <Text type="p" fz="13px" color="#262626">
                                    Привет. Я готов к чему-то
                                </Text>
                                <div className={styles.time}>
                                    <Text type="p" fz="11px">
                                        8:00 PM
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className={styles.message_right}>
                            <div className={styles.inner}>
                                <Text type="p" fz="13px" color="#262626">
                                    Да, я обычно выделяю все ctrl+A, потом всему
                                    сразу ставлю верх и лево)))))
                                </Text>
                                <div className={styles.time}>
                                    <Text type="p" fz="11px">
                                        8:00 PM
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className={styles.empty}>
                    <img src={ghost} alt="" />
                    <div className={styles.text}>
                        <Text type="h2" fz="17px" position="center">
                            Сообщений пока нет
                        </Text>
                        <Text
                            type="p"
                            color="#B1B2B4"
                            position="center"
                            fz="14px"
                        >
                            Отправьте сообщения что бы начать диалог
                        </Text>
                    </div>
                </div>
            </div>
            <div className={styles.box}>
                <img src={clips} alt="" />
                <div className={styles.input}>
                    <input type="text" placeholder="Введите сообщение..." />
                    <img src={emoji} alt="" />
                </div>
                <img src={microphone} alt="" />
            </div>
        </div>
    );
};

export default MobileChatPage;
