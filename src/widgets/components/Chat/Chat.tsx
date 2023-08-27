import { FC, useState, MouseEvent, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

import { useUserCondition } from "@/shared/model/store";
import { Text, PopUp, Input } from "@/shared";
import { ChatInfo } from "@/widgets";
import { SMALL_LAPTOP } from "@/shared/utils";

import woman from "/assets/woman.jpg";
import call from "/assets/call-calling.svg";
import callRed from "/assets/call-calling-red.svg";
import paperclip from "/assets/paperclip-blue.svg";
import paperclipRed from "/assets/paperclip-red.svg";
import sender from "/assets/send-blue.svg";
import emoji from "/assets/emoji-normal.svg";
import read from "/assets/read-blue.svg";
import readRed from "/assets/read-red.svg";
import mircophone from "/assets/microphone-blue.svg";
import mircophoneRed from "/assets/microphone-red.svg";
import dots from "/assets/dots-more.svg";
import arrowLeft from "/assets/arrow-left-black.svg";
import styles from "./Chat.module.scss";

export const Chat: FC = () => {
    const { condition } = useUserCondition();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [y, setY] = useState<number>(0);
    const [x, setX] = useState<number>(0);
    const [isSelect, setIsSelect] = useState<string>("");
    const [msg, setMsg] = useState<string>("");
    // const [ws, setWs] = useState<WebSocket | null>(null);
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const [isInfo, setIsInfo] = useState<boolean>(false);
    const holdTimerRef = useRef<NodeJS.Timeout | null>(null);

    const sick = condition === "Болен";
    const redMesage = `${styles.text} ${styles.myTextWithSick}`;
    const navigate = useNavigate();

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

    const copyText = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className={styles.view}>
            <div
                className={styles.info}
                style={{ borderColor: sick ? "#F7E6E8" : "" }}
            >
                <div className={styles.data}>
                    {SMALL_LAPTOP && (
                        <img
                            src={arrowLeft}
                            alt=""
                            className={styles.arrow}
                            onClick={() => navigate(-1)}
                        />
                    )}
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
                        onClick={(e: MouseEvent<HTMLImageElement>) => {
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
                                <Text type="p" color="#333" fz="14px">
                                    Виктор
                                </Text>
                                <div
                                    className={
                                        sick
                                            ? redMesage
                                            : `${styles.text} ${styles.myText}`
                                    }
                                    onClick={(e: MouseEvent) => handleClick(e)}
                                >
                                    <Text type="p" color="#262626">
                                        Привет. Я готов к чему-то
                                    </Text>
                                    <div className={styles.read}>
                                        <img
                                            src={sick ? readRed : read}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className={styles.time}>
                                    <Text type="p" color="#7D7F82" fz="12px">
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
                                    onClick={(e: MouseEvent) => handleClick(e)}
                                >
                                    <Text type="p" color="#262626">
                                        Да, я обычно выделяю все ctrl+A, потом
                                        всему сразу ставлю верх и лево)))))
                                    </Text>
                                    <div className={styles.read}>
                                        <img
                                            src={sick ? readRed : read}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className={styles.time}>
                                    <Text type="p" color="#7D7F82" fz="12px">
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
                        <img src={sick ? paperclipRed : paperclip} alt="" />
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
                        {isMouseDown ? (
                            <img
                                src={sick ? mircophoneRed : mircophone}
                                alt=""
                                className={styles.icon}
                                onMouseDown={handleMouseDownOnMicrophone}
                                onMouseUp={handleMouseUp}
                            />
                        ) : (
                            <img
                                src={sender}
                                alt=""
                                className={styles.icon}
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                                onClick={(e: MouseEvent<HTMLImageElement>) => {
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
                    opacity: isOpen && isSelect === "Звонок" ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                exit={{ y: 20, opacity: 0 }}
            >
                <PopUp width="120px" right="25px" top={`${y / 2 + 15}px`}>
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
            {isOpen && isSelect === "Сообщение" && (
                <PopUp width="120x" top={`${y / 1.2}px`} left={`${x}px`}>
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
    );
};
