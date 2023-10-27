import { FC, useState, MouseEvent, useRef } from "react";
import { motion } from "framer-motion";

import { useUserCondition } from "@/shared/model/store";
// import { PopUp, BackArrow } from "@/shared";
import { Text } from "@/shared/ui/Text";
import { Input } from "@/shared/ui/Input";
import { ChatInfo, CustomMobileHeader, EmojiModal } from "@/widgets";
import { LAPTOP, MOBILE, PC, SMALL_LAPTOP } from "@/shared/utils";
import { SendMessage } from "@/features/SendMessage";
import { Rows } from "@/shared/ui/Rows";

import woman from "/assets/woman.jpg";
import emoji from "/assets/emoji-normal.svg";
import emojiOpen from "/assets/emoji-open.svg";
import read from "/assets/read-blue.svg";
import readRed from "/assets/read-red.svg";
import styles from "./styles.module.scss";
import { ChatHeader } from "../ChatHeader";

export const Chat: FC = () => {
    const { condition } = useUserCondition();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
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
        <Rows gap={0} rows={["auto"]}>
            {(PC || SMALL_LAPTOP || LAPTOP) && (
                <ChatHeader call={undefined} actions={undefined} />
            )}
            {MOBILE && (
                <CustomMobileHeader back>
                    {/* <BackArrow /> */}
                    <div className={styles.data}>
                        <img src={woman} alt="" />
                        <div className="">
                            <Text type="h2">Яковенко А. С.</Text>
                            <Text type="p" color="#7D7F82">
                                Был(а) недавно
                            </Text>
                        </div>
                    </div>
                </CustomMobileHeader>
            )}
            {isInfo ? (
                <div className={styles.chatInfo}>
                    <ChatInfo />
                </div>
            ) : (
                <div className={styles.chat}>
                    <div className={styles.list}>
                        <div className={styles.message}>
                            {!MOBILE && (
                                <img
                                    src={woman}
                                    alt=""
                                    onClick={() => setIsInfo(true)}
                                />
                            )}
                            <div className={styles.inner}>
                                {!MOBILE && (
                                    <Text type="p" color="#333" fz="11px">
                                        Виктор
                                    </Text>
                                )}
                                <div
                                    className={
                                        sick
                                            ? redMesage
                                            : `${styles.text} ${styles.myText}`
                                    }
                                    onClick={(e: MouseEvent) => handleClick(e)}
                                >
                                    <Text
                                        type="p"
                                        color="#262626"
                                        fw={400}
                                        fz="14px"
                                    >
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
                                    <Text type="p" color="#7D7F82" fz="10px">
                                        8:00 PM
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${styles.message} ${styles.messageRight}`}
                        >
                            {!MOBILE && <img src={woman} alt="" />}
                            <div className={styles.inner}>
                                {!MOBILE && (
                                    <Text type="p" color="#333" fz="11px">
                                        Александр
                                    </Text>
                                )}
                                <div
                                    className={`${styles.text}`}
                                    onClick={(e: MouseEvent) => handleClick(e)}
                                >
                                    <Text
                                        type="p"
                                        color="#262626"
                                        fw={400}
                                        fz="14px"
                                    >
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
                                    <Text type="p" color="#7D7F82" fz="10px">
                                        8:00 PM
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className={styles.message}>
                            {!MOBILE && (
                                <img
                                    src={woman}
                                    alt=""
                                    onClick={() => setIsInfo(true)}
                                />
                            )}
                            <div className={styles.inner}>
                                {!MOBILE && (
                                    <Text type="p" color="#333" fz="11px">
                                        Виктор
                                    </Text>
                                )}
                                <div
                                    className={
                                        sick
                                            ? redMesage
                                            : `${styles.text} ${styles.myText}`
                                    }
                                    onClick={(e: MouseEvent) => handleClick(e)}
                                >
                                    <Text
                                        type="p"
                                        color="#262626"
                                        fw={400}
                                        fz="14px"
                                    >
                                        Доступ открывается каждый месяц на один
                                        день 🙄
                                    </Text>
                                    <div className={styles.read}>
                                        <img
                                            src={sick ? readRed : read}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className={styles.time}>
                                    <Text type="p" color="#7D7F82" fz="10px">
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
                        <div className={styles.inner}>
                            <Input
                                type="text"
                                placeholder="Напишите сообщение..."
                                br="none"
                                borderRadius="12px 0px 0px 12px"
                                height="48px"
                                value={msg}
                                onChange={(e) => setMsg(e.target.value)}
                            />
                            <div
                                className={styles.btn}
                                onClick={() => setIsOpenModal((prev) => !prev)}
                            >
                                <img
                                    src={isOpenModal ? emojiOpen : emoji}
                                    alt=""
                                />
                            </div>
                        </div>
                        <SendMessage onClick={() => ({})} />
                    </div>
                </div>
            )}
            {/* <motion.div
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
            </motion.div> */}
            {/* {isOpen && isSelect === "Отправить" && (
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
            )} */}
            {/* {isOpen && isSelect === "Сообщение" && (
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
            )} */}
            {isOpenModal && <EmojiModal />}
        </Rows>
    );
};
