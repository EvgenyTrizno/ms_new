import { FC, useEffect, useState, MouseEvent } from "react";

import { Layout } from "../Layout/Layout";
import { Search } from "@/widgets";
import { Filter, Input, PopUp, Text } from "@/shared";
import { useFilter, useUserCondition } from "@/shared/model/store";
import { ABSOLUTE_PATH } from "@/shared/config";

import woman from "/assets/woman.jpg";
import call from "/assets/call-calling.svg";
import paperclip from "/assets/paperclip-blue.svg";
import sender from "/assets/send-blue.svg";
import emoji from "/assets/emoji-normal.svg";
import incoming from "/assets/call-incoming.svg";
import read from "/assets/read-blue.svg";
import styles from "./MessagesPage.module.scss";

const MessagesPage: FC = () => {
    const { isFilter, setIsFilter } = useFilter();
    const { condition } = useUserCondition();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [y, setY] = useState<number>(0);
    const [x, setX] = useState<number>(0);
    const [isSelect, setIsSelect] = useState<string>("");
    const [isChat, setIsChat] = useState<boolean>(false);
    const [msg, setMsg] = useState<string>("");
    const [ws, setWs] = useState<WebSocket | null>(null);

    useEffect(() => {
        setIsFilter("Сообщения");

        const ws = new WebSocket(
            `ws://${ABSOLUTE_PATH}/ws/chat/8345f52b-6d74-4a54-9ae1-6c03c92e962b/99/`
        );

        setWs(ws);

        return () => {
            setIsFilter("");
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = (e: MouseEvent) => {
        const classes = e.currentTarget.classList.contains(styles.text);

        if (classes) {
            setIsSelect("Сообщение");
            setY(e.clientY);
            setIsOpen((prev) => !prev);
            setX(parseInt(window.getComputedStyle(e.currentTarget).width) + 80);
        }

        return;
    };

    const copyText = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    const sendMsg = (msg: string, id: number, uuid: string) => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(
                JSON.stringify({
                    action: "send_message",
                    chat_uuid: uuid,
                    text: msg,
                    user_id: id,
                })
            );
        }
    };

    const handleSendMsg = () => {
        if (msg === "") return;
        else {
            sendMsg(msg, 99, "8345f52b-6d74-4a54-9ae1-6c03c92e962b");
            console.log(msg);
            setMsg("");
        }
    };

    const sick = condition === "Болен";

    return (
        <Layout>
            <div
                className={styles.container}
                style={{ borderColor: sick ? "#F7E6E8" : "" }}
            >
                <div className={styles.sidebar}>
                    <div className={styles.box}>
                        <Search placeholder="Поиск чатов" />
                        <Filter data={["Сообщения", "Звонки"]} width="490px" />
                        <div className={styles.wrapper}>
                            <div className={styles.chats}>
                                {isFilter === "Сообщения" ? (
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                                        <div
                                            className={styles.chat}
                                            onClick={() => setIsChat(true)}
                                        >
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
                                            <div
                                                className={
                                                    sick
                                                        ? `${styles.counter} ${styles.counterRed}`
                                                        : styles.counter
                                                }
                                            >
                                                98
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className={styles.calls}>
                                        <div className={styles.call}>
                                            <div className={styles.data}>
                                                <div className={styles.icon}>
                                                    <img
                                                        src={incoming}
                                                        alt=""
                                                    />
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
                </div>
                {isChat && (
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
                        <div className={styles.chat}>
                            <div className={styles.list}>
                                <div className={styles.message}>
                                    <img src={woman} alt="" />
                                    <div className={styles.inner}>
                                        <Text type="p" color="#333" fz="14px">
                                            Виктор
                                        </Text>
                                        <div
                                            className={`${styles.text} ${styles.myText}`}
                                            onClick={(e: MouseEvent) =>
                                                handleClick(e)
                                            }
                                        >
                                            <Text type="p" color="#262626">
                                                Привет. Я готов к чему-то
                                            </Text>
                                            <div className={styles.read}>
                                                <img src={read} alt="" />
                                            </div>
                                        </div>
                                        <div className={styles.time}>
                                            <Text
                                                type="p"
                                                color="#7D7F82"
                                                fz="12px"
                                            >
                                                8:00 PM
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.message}>
                                    <img src={woman} alt="" />
                                    <div className={styles.inner}>
                                        <Text type="p" color="#333" fz="14px">
                                            Александр
                                        </Text>
                                        <div
                                            className={`${styles.text}`}
                                            onClick={(e: MouseEvent) =>
                                                handleClick(e)
                                            }
                                        >
                                            <Text type="p" color="#262626">
                                                Да, я обычно выделяю все ctrl+A,
                                                потом всему сразу ставлю верх и
                                                лево)))))
                                            </Text>
                                            <div className={styles.read}>
                                                <img src={read} alt="" />
                                            </div>
                                        </div>
                                        <div className={styles.time}>
                                            <Text
                                                type="p"
                                                color="#7D7F82"
                                                fz="12px"
                                            >
                                                8:00 PM
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                        value={msg}
                                        onChange={(e) => setMsg(e.target.value)}
                                    />
                                    <div className={styles.btn}>
                                        <img src={emoji} alt="" />
                                    </div>
                                </div>
                                <img
                                    src={sender}
                                    alt=""
                                    className={styles.icon}
                                    onClick={(
                                        e: MouseEvent<HTMLImageElement>
                                    ) => {
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
                            <PopUp
                                width="180px"
                                top={`${y / 1.43}px`}
                                right="5px"
                            >
                                <li onClick={handleSendMsg}>
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
                        {isOpen && isSelect === "Сообщение" && (
                            <PopUp
                                width="120x"
                                top={`${y / 1.2}px`}
                                left={`${x}px`}
                            >
                                <li>
                                    <Text type="p" color="#000" fz="14px">
                                        Ответить
                                    </Text>
                                </li>
                                <li>
                                    <Text type="p" color="#000" fz="14px">
                                        Выбрать
                                    </Text>
                                </li>
                                <li onClick={() => copyText("скопировать")}>
                                    <Text type="p" color="#000" fz="14px">
                                        Скопировать
                                    </Text>
                                </li>
                                <li>
                                    <Text type="p" color="#000" fz="14px">
                                        Изменить
                                    </Text>
                                </li>
                                <li>
                                    <Text type="p" color="#D64657" fz="14px">
                                        Удалить
                                    </Text>
                                </li>
                            </PopUp>
                        )}
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default MessagesPage;
