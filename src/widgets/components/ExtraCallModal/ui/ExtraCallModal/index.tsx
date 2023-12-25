import { FC, useEffect, useId, MouseEvent } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { IExtraCallModal } from "./types";

// import { Contact } from "../Contact";
import { useAuth } from "@/shared/model/store/auth";

import amabulance from "/assets/amabulance-blue.svg";
import amabulanceRed from "/assets/amabulance-red.svg";
import homeWithPlus from "/assets/home-with-plus-blue.svg";
import homeWithPlusRed from "/assets/home-with-plus-red.svg";
import support from "/assets/support-blue.svg";
import supportRed from "/assets/support-red.svg";

import styles from "./styles.module.scss";

export const ExtraCallModal: FC<IExtraCallModal> = ({ isOpen, setIsOpen }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const { user } = useAuth();
    const sick = user && user.disease.length;
    const navigate = useNavigate();

    const data = [
        {
            icon: {
                healthy: amabulance,
                sick: amabulanceRed,
            },
            id: useId(),
            func: () => ({}),
        },
        {
            icon: {
                healthy: support,
                sick: supportRed,
            },
            id: useId(),
            func: () => {
                navigate("/messages/chat/hdhwhw-nycyr2ycyru2c-hcr2huc/");
            },
        },
        {
            icon: {
                healthy: homeWithPlus,
                sick: homeWithPlusRed,
            },
            id: useId(),
            func: () => ({}),
        },
        // {
        //     icon: {
        //         healthy: connect,
        //         sick: supportRed,
        //     },
        //     id: useId(),
        //     type: "",
        // },
    ];

    const handleSetIsOpen = () => {
        setIsOpen(false);
    };

    const handleClick = (e: MouseEvent<HTMLDivElement>, i: number) => {
        e.stopPropagation();

        data[i].func();
    };

    return (
        <div
            className={styles.extra}
            onClick={handleSetIsOpen}
            style={{
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? "auto" : "none",
            }}
        >
            {/* <Contact /> */}
            <div className={styles.container}>
                {data.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ x: "30px", opacity: 0 }}
                        animate={{
                            x: isOpen ? "-70px" : "30px",
                            opacity: isOpen ? 1 : 0,
                        }}
                        exit={{ x: "30px", opacity: 0 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.1 * -i,
                        }}
                        className={`${styles.extraBtn} ${styles.select}`}
                        style={{
                            backgroundColor: `${sick ? "#F7E6E8" : ""}`,
                        }}
                        onClick={(e) => handleClick(e, i)}
                    >
                        <img
                            src={sick ? item.icon.sick : item.icon.healthy}
                            alt=""
                        />
                    </motion.div>
                ))}
            </div>
            {/* {isOpenModal && isOpen && (
                <div
                    className={styles.modal}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Text type="h2" fz="26px">
                        Перепроверьте свои данные
                    </Text>
                    <div className={styles.content}>
                        <label>
                            <Text type="p" fz="15px" color="#7D7F82">
                                Имя
                            </Text>
                            <input name="name" type="text" placeholder="Имя" />
                        </label>
                        <label>
                            <Text type="p" fz="15px" color="#7D7F82">
                                Фамилия
                            </Text>
                            <input
                                name="surname"
                                type="text"
                                placeholder="Фамилия"
                            />
                        </label>
                        <label>
                            <Text type="p" fz="15px" color="#7D7F82">
                                Дата рождения
                            </Text>
                            <input
                                name="date"
                                type="text"
                                placeholder="Дата рождения"
                            />
                        </label>
                        <label>
                            <Text type="p" fz="15px" color="#7D7F82">
                                Заболевание
                            </Text>
                            <input
                                name="diseases"
                                type="text"
                                placeholder="Заболевание"
                            />
                        </label>
                        <label>
                            <Text type="p" fz="15px" color="#7D7F82">
                                Страна
                            </Text>
                            <input
                                name="country"
                                type="text"
                                placeholder="Страна"
                            />
                        </label>
                        <label>
                            <Text type="p" fz="15px" color="#7D7F82">
                                Город
                            </Text>
                            <input
                                name="city"
                                type="text"
                                placeholder="Город"
                            />
                        </label>
                        <label>
                            <Text type="p" fz="15px" color="#7D7F82">
                                Адрес
                            </Text>
                            <input
                                name="address"
                                type="text"
                                placeholder="Адрес"
                            />
                        </label>
                        <div className={styles.block}>
                            <Text type="p" fz="15px" color="#7D7F82">
                                Номер
                            </Text>
                            <div className={styles.bottom}>
                                <input
                                    type="text"
                                    name="countryCode"
                                    style={{ width: "75px" }}
                                />
                                <input type="text" name="phone" />
                            </div>
                        </div>
                    </div>
                    <Btn color="#0064FA">Позвонить сейчас</Btn>
                </div>
            )} */}
        </div>
    );
};
