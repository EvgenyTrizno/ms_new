import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Layout } from "../Layout/Layout";
import {
    Chat,
    MobileContainer,
    MobileHeader,
    MobileMenu,
    Search,
} from "@/widgets";
import { Btn, Filter, Text } from "@/shared";
import { useFilter, useUserCondition, useUserData } from "@/shared/model/store";
import { MOBILE, PC, SMALL_LAPTOP } from "@/shared/utils";
// import { ABSOLUTE_PATH } from "@/shared/config";

import woman from "/assets/woman.jpg";
import incoming from "/assets/call-incoming.svg";
import controller from "/assets/controler.svg";
import cross from "/assets/cross-close.svg";
import crossBlue from "/assets/cross-close-small-blue.svg";
import arrowDown from "/assets/arrow-down-gray.svg";
import styles from "./MessagesPage.module.scss";

const MessagesPage: FC = () => {
    const { isFilter, setIsFilter } = useFilter();
    const { condition } = useUserCondition();
    const { group } = useUserData();

    const [isOpenFilters, setIsOpenFilters] = useState<boolean>(false);
    const [isChat, setIsChat] = useState<boolean>(false);
    // const [ws, setWs] = useState<WebSocket | null>(null);
    const [id, setId] = useState<number>();

    const sick = condition === "Болен";
    const filters = ["Город", "Пользователи", "Клиники", "Центры", "Звонки"];
    const navigate = useNavigate();

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

    const handleClick = (id: number) => {
        if (SMALL_LAPTOP || MOBILE) {
            navigate(`/chat/${1}`);
        } else {
            setIsChat(true);
            setId(id);
        }
    };

    return (
        <Layout>
            <MobileContainer>
                {MOBILE && <MobileHeader />}
                <div className={styles.container}>
                    <div className={styles.sidebar}>
                        <div className={styles.box}>
                            <div className={styles.searchBox}>
                                <Search
                                    placeholder="Поиск чатов"
                                    height="48px"
                                />
                                {group === "Врачи" && (
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
                                            src={
                                                isOpenFilters
                                                    ? cross
                                                    : controller
                                            }
                                            alt=""
                                        />
                                    </Btn>
                                )}
                            </div>
                            <Filter data={["Сообщения", "Звонки"]} />
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
                                        {filters.map((item) => (
                                            <div className={styles.filtersBox}>
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
                                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                                            (item) => (
                                                <div
                                                    className={
                                                        id === item && sick
                                                            ? `${styles.chat} ${styles.chatActiveRed}`
                                                            : id === item &&
                                                              !sick
                                                            ? `${styles.chat} ${styles.chatActive}`
                                                            : styles.chat
                                                    }
                                                    style={{
                                                        borderColor: sick
                                                            ? "#F7E6E8"
                                                            : "#EBF3FF",
                                                    }}
                                                    onClick={() =>
                                                        handleClick(item)
                                                    }
                                                >
                                                    <div
                                                        className={styles.inner}
                                                    >
                                                        <img
                                                            src={woman}
                                                            alt=""
                                                            className={
                                                                styles.avatar
                                                            }
                                                        />
                                                        <div
                                                            className={
                                                                styles.data
                                                            }
                                                        >
                                                            <Text
                                                                type="h2"
                                                                color="#262626"
                                                                fz="14px"
                                                            >
                                                                Михайлова Т. А.
                                                            </Text>
                                                            <Text
                                                                type="p"
                                                                fz="12px"
                                                                color="#7D7F82"
                                                            >
                                                                Привет как
                                                                настроение?
                                                            </Text>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={styles.time}
                                                    >
                                                        <Text
                                                            type="p"
                                                            color="#7D7F82"
                                                            fz="12px"
                                                        >
                                                            2:23
                                                        </Text>
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
                                                </div>
                                            )
                                        )
                                    ) : (
                                        <div className={styles.calls}>
                                            {[1, 2, 3, 4].map((item) => (
                                                <div
                                                    style={{
                                                        borderColor: sick
                                                            ? "#F7E6E8"
                                                            : "#EBF3FF",
                                                    }}
                                                    className={styles.call}
                                                    key={item}
                                                >
                                                    <img
                                                        src={incoming}
                                                        alt=""
                                                        className={
                                                            styles.callImg
                                                        }
                                                    />
                                                    <img
                                                        src={woman}
                                                        alt=""
                                                        className={
                                                            styles.avatar
                                                        }
                                                    />
                                                    <div
                                                        className={styles.data}
                                                    >
                                                        <Text
                                                            type="h2"
                                                            fz="14px"
                                                        >
                                                            Яковенко А. С.
                                                        </Text>
                                                        <Text
                                                            fz="12px"
                                                            color="#7D7F82"
                                                            type="p"
                                                        >
                                                            Исходящий вызов (30
                                                            минут)
                                                        </Text>
                                                    </div>
                                                    <div
                                                        className={styles.time}
                                                    >
                                                        <Text
                                                            type="p"
                                                            fz="12px"
                                                            color="#B1B2B4"
                                                        >
                                                            2:23
                                                        </Text>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {isChat && PC && <Chat />}
                </div>
            </MobileContainer>
            {MOBILE && <MobileMenu />}
        </Layout>
    );
};

export default MessagesPage;
