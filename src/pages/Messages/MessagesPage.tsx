import { FC, useEffect, useState, MouseEvent, useRef } from "react";
import { motion } from "framer-motion";

import { Layout } from "../Layout/Layout";
import { ChatInfo } from "@/widgets";
import { Btn, Filter, Input, MobileSearch, PopUp, Text } from "@/shared";
import { useFilter, useUserCondition, useUserData } from "@/shared/model/store";
import { ABSOLUTE_PATH } from "@/shared/config";

import woman from "/assets/woman.jpg";
import call from "/assets/call-calling.svg";
import callRed from "/assets/call-calling-red.svg";
import paperclip from "/assets/paperclip-blue.svg";
import paperclipRed from "/assets/paperclip-red.svg";
import sender from "/assets/send-blue.svg";
import emoji from "/assets/emoji-normal.svg";
import incoming from "/assets/call-incoming.svg";
import read from "/assets/read-blue.svg";
import readRed from "/assets/read-red.svg";
import mircophone from "/assets/microphone-blue.svg";
import mircophoneRed from "/assets/microphone-red.svg";
import dots from "/assets/dots-more.svg";
import controller from "/assets/controler.svg";
import cross from "/assets/cross-close.svg";
import crossBlue from "/assets/cross-close-small-blue.svg";
import arrowDown from "/assets/arrow-down-gray.svg";
import styles from "./MessagesPage.module.scss";

const MessagesPage: FC = () => {
    const { isFilter, setIsFilter } = useFilter();
    const { condition } = useUserCondition();
    const { group } = useUserData();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenFilters, setIsOpenFilters] = useState<boolean>(false);
    const [y, setY] = useState<number>(0);
    const [x, setX] = useState<number>(0);
    const [isSelect, setIsSelect] = useState<string>("");
    const [isChat, setIsChat] = useState<boolean>(false);
    const [msg, setMsg] = useState<string>("");
    // const [ws, setWs] = useState<WebSocket | null>(null);
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const [isInfo, setIsInfo] = useState<boolean>(false);
    const holdTimerRef = useRef<NodeJS.Timeout | null>(null);

    const sick = condition === "Болен";
    const redMesage = `${styles.text} ${styles.myTextWithSick}`;
    const filters = ["Город", "Пользователи", "Клиники", "Центры", "Звонки"];

    useEffect(() => {
        setIsFilter("Сообщения");

        // const ws = new WebSocket(
        //     `ws://${ABSOLUTE_PATH}/ws/chat/8345f52b-6d74-4a54-9ae1-6c03c92e962b/99/`
        // );

        // setWs(ws);

        // return () => {
        //     setIsFilter("");
        // };
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

    // const sendMsg = (msg: string, id: number, uuid: string) => {
    //     if (ws && ws.readyState === WebSocket.OPEN) {
    //         ws.send(
    //             JSON.stringify({
    //                 action: "send_message",
    //                 chat_uuid: uuid,
    //                 text: msg,
    //                 user_id: id,
    //             })
    //         );
    //     }
    // };

    // const handleSendMsg = () => {
    //     if (msg === "") return;
    //     else {
    //         sendMsg(msg, 99, "8345f52b-6d74-4a54-9ae1-6c03c92e962b");
    //         console.log(msg);
    //         setMsg("");
    //     }
    // };

    const handleMouseDown = () => {
        holdTimerRef.current = setTimeout(() => {
            setIsMouseDown(true);
        }, 1000);
    };

    const handleMouseDownOnMicrophone = () => {
        holdTimerRef.current = setTimeout(() => {
            setIsMouseDown(false);
        }, 1000);
    };

    const handleMouseUp = () => {
        if (holdTimerRef.current) {
            clearTimeout(holdTimerRef.current);
        }
    };

    return (
        <Layout>
            <div
                className={styles.container}
                style={{ borderColor: sick ? "#F7E6E8" : "" }}
            >
                <div className={styles.sidebar}>
                    <div className={styles.box}>
                        <div className={styles.search}>
                            <MobileSearch
                                placeholder="Поиск чатов"
                                height="52px"
                                filterBtn={false}
                            />
                            {group === "Пользователи" && (
                                <Btn
                                    color="#0064FA"
                                    width="52px"
                                    height="52px"
                                    padding="0px"
                                    onClick={() =>
                                        setIsOpenFilters((prev) => !prev)
                                    }
                                >
                                    <img
                                        src={isOpenFilters ? cross : controller}
                                        alt=""
                                    />
                                </Btn>
                            )}
                        </div>
                        <Filter data={["Сообщения", "Звонки"]} width="490px" />
                        {isOpenFilters && (
                            <div className={styles.filtersBlock}>
                                <div className={styles.selectedList}>
                                    <div className={styles.selectedBlock}>
                                        <Text
                                            type="h2"
                                            fz="17px"
                                            color="#0064FA"
                                        >
                                            Москва
                                        </Text>
                                        <img src={crossBlue} alt="" />
                                    </div>
                                </div>
                                <div className={styles.filtersList}>
                                    {filters.map((item, i) => (
                                        <div
                                            className={styles.filtersBox}
                                            key={i}
                                        >
                                            <Text
                                                type="p"
                                                fz="17px"
                                                color="#7D7F82"
                                            >
                                                {item}
                                            </Text>
                                            <img src={arrowDown} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
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
                        <div
                            className={styles.info}
                            style={{ borderColor: sick ? "#F7E6E8" : "" }}
                        >
                            <div className={styles.data}>
                                <img
                                    src={woman}
                                    style={{ cursor: "pointer" }}
                                    alt=""
                                    onClick={() => setIsInfo((prev) => !prev)}
                                />
                                <div className={styles.text}>
                                    <Text type="h2" fz="18px">
                                        Яковенко А. С.
                                    </Text>
                                    <Text type="p" color="#84C55D">
                                        Online
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.callIcons}>
                                <img
                                    src={sick ? callRed : call}
                                    alt=""
                                    className={styles.call}
                                    onClick={(
                                        e: MouseEvent<HTMLImageElement>
                                    ) => {
                                        setY(e.clientY);
                                        setIsOpen((prev) => !prev);
                                        setIsSelect("Звонок");
                                    }}
                                />
                                {isInfo && (
                                    <img
                                        src={dots}
                                        alt=""
                                        style={{
                                            marginLeft: "32px",
                                            cursor: "pointer",
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                        {isInfo ? (
                            <div className={styles.chatInfo}>
                                <ChatInfo />
                            </div>
                        ) : (
                            <div className={styles.chat}>
                                <div className={styles.list}>
                                    <div className={styles.message}>
                                        <img src={woman} alt="" />
                                        <div className={styles.inner}>
                                            <Text
                                                type="p"
                                                color="#333"
                                                fz="14px"
                                            >
                                                Виктор
                                            </Text>
                                            <div
                                                className={
                                                    sick
                                                        ? redMesage
                                                        : `${styles.text} ${styles.myText}`
                                                }
                                                onClick={(e: MouseEvent) =>
                                                    handleClick(e)
                                                }
                                            >
                                                <Text type="p" color="#262626">
                                                    Привет. Я готов к чему-то
                                                </Text>
                                                <div className={styles.read}>
                                                    <img
                                                        src={
                                                            sick
                                                                ? readRed
                                                                : read
                                                        }
                                                        alt=""
                                                    />
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
                                            <Text
                                                type="p"
                                                color="#333"
                                                fz="14px"
                                            >
                                                Александр
                                            </Text>
                                            <div
                                                className={`${styles.text}`}
                                                onClick={(e: MouseEvent) =>
                                                    handleClick(e)
                                                }
                                            >
                                                <Text type="p" color="#262626">
                                                    Да, я обычно выделяю все
                                                    ctrl+A, потом всему сразу
                                                    ставлю верх и лево)))))
                                                </Text>
                                                <div className={styles.read}>
                                                    <img
                                                        src={
                                                            sick
                                                                ? readRed
                                                                : read
                                                        }
                                                        alt=""
                                                    />
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
                        )}
                        {!isInfo && (
                            <div className={styles.messageBlock}>
                                <div className={styles.wrapper}>
                                    <img
                                        src={sick ? paperclipRed : paperclip}
                                        alt=""
                                    />
                                    <div className={styles.inner}>
                                        <Input
                                            type="text"
                                            placeholder="Поиск чатов"
                                            br="none"
                                            btr="unset"
                                            bbr="unset"
                                            value={msg}
                                            onChange={(e) =>
                                                setMsg(e.target.value)
                                            }
                                        />
                                        <div className={styles.btn}>
                                            <img src={emoji} alt="" />
                                        </div>
                                    </div>
                                    {isMouseDown ? (
                                        <img
                                            src={
                                                sick
                                                    ? mircophoneRed
                                                    : mircophone
                                            }
                                            alt=""
                                            className={styles.icon}
                                            onMouseDown={
                                                handleMouseDownOnMicrophone
                                            }
                                            onMouseUp={handleMouseUp}
                                        />
                                    ) : (
                                        <img
                                            src={sender}
                                            alt=""
                                            className={styles.icon}
                                            onMouseDown={handleMouseDown}
                                            onMouseUp={handleMouseUp}
                                            onClick={(
                                                e: MouseEvent<HTMLImageElement>
                                            ) => {
                                                setY(e.clientY);
                                                setIsSelect("Отправить");
                                                setIsOpen((prev) => !prev);
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        )}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{
                                y: isOpen && isSelect === "Звонок" ? 10 : 30,
                                opacity:
                                    isOpen && isSelect === "Звонок" ? 1 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                            exit={{ y: 20, opacity: 0 }}
                        >
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
                        </motion.div>
                        {isOpen && isSelect === "Отправить" && (
                            <PopUp
                                width="180px"
                                top={`${y / 1.43}px`}
                                right="5px"
                            >
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
