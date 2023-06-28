import { FC, useEffect, useState, MouseEvent } from "react";

import { Layout } from "../Layout/Layout";
import { Search } from "@/widgets";
import { Filter, Input, PopUp, Text } from "@/shared";
import { useFilter } from "@/shared/model/store";

import woman from "/assets/woman.jpg";
import call from "/assets/call-calling.svg";
import paperclip from "/assets/paperclip-blue.svg";
import sender from "/assets/send-blue.svg";
import emoji from "/assets/emoji-normal.svg";
import incoming from "/assets/call-incoming.svg";
import styles from "./MessagesPage.module.scss";

export const MessagesPage: FC = () => {
    const { isFilter, setIsFilter } = useFilter();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [y, setY] = useState<number>(0);
    const [isSelect, setIsSelect] = useState<string>("");

    useEffect(() => {
        setIsFilter("Сообщения");

        return () => setIsFilter("");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div className={styles.box}>
                        <Search />
                        <Filter data={["Сообщения", "Звонки"]} width="490px" />
                        <div className={styles.chats}>
                            {isFilter === "Сообщения" ? (
                                [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
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
                                ))
                            ) : (
                                <div className={styles.calls}>
                                    <div className={styles.call}>
                                        <div className={styles.data}>
                                            <div className={styles.icon}>
                                                <img src={incoming} alt="" />
                                            </div>
                                            <img src={woman} alt="" />
                                            <div className={styles.text}>
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
                                            <Text type="p">2:23</Text>
                                        </div>
                                    </div>
                                </div>
                            )}
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
                        <img
                            src={call}
                            alt=""
                            className={styles.call}
                            onClick={(e: MouseEvent<HTMLImageElement>) => {
                                setY(e.clientY);
                                setIsOpen((prev) => !prev);
                                setIsSelect("Звонок");
                            }}
                        />
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
                                />
                                <div className={styles.btn}>
                                    <img src={emoji} alt="" />
                                </div>
                            </div>
                            <img
                                src={sender}
                                alt=""
                                className={styles.icon}
                                onClick={(e: MouseEvent<HTMLImageElement>) => {
                                    setY(e.clientY);
                                    setIsSelect("Отправить");
                                    setIsOpen((prev) => !prev);
                                }}
                            />
                        </div>
                    </div>
                    {isOpen && isSelect === "Звонок" && (
                        <PopUp
                            width="120px"
                            right="25px"
                            top={`${y / 2 + 15}px`}
                        >
                            <li>
                                <Text type="p" color="#000" fz="14px">
                                    Аудиовызов
                                </Text>
                            </li>
                            <li>
                                <Text type="p" color="#000" fz="14px">
                                    Видеовызов
                                </Text>
                            </li>
                            <li>
                                <Text type="p" color="#000" fz="14px">
                                    Конференция
                                </Text>
                            </li>
                        </PopUp>
                    )}
                    {isOpen && isSelect === "Отправить" && (
                        <PopUp width="180px" top={`${y / 1.43}px`} right="5px">
                            <li>
                                <Text type="p" color="#000" fz="14px">
                                    Отправить позже
                                </Text>
                            </li>
                            <li>
                                <Text type="p" color="#000" fz="14px">
                                    Отправить без звука
                                </Text>
                            </li>
                            <li>
                                <Text type="p" color="#000" fz="14px">
                                    Скрыть от
                                </Text>
                            </li>
                            <li>
                                <Text type="p" color="#000" fz="14px">
                                    Создать опрос
                                </Text>
                            </li>
                        </PopUp>
                    )}
                </div>
            </div>
        </Layout>
    );
};
