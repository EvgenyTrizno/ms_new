import { FC, useEffect, useId, useState, MouseEvent } from "react";
import { IExtraCallBtnData } from "../ExtraCallMobile/types";
import { motion } from "framer-motion";

import { useExtraCall } from "@/shared/model/store";
import { useUserCondition } from "@/shared/model/store";
import { Btn, Text } from "@/shared";

import cross from "/assets/cross.svg";
import amabulance from "/assets/amabulance-blue.svg";
import amabulanceRed from "/assets/amabulance-red.svg";
import homeWithPlus from "/assets/home-with-plus-blue.svg";
import homeWithPlusRed from "/assets/home-with-plus-red.svg";
import support from "/assets/support-blue.svg";
import supportRed from "/assets/support-red.svg";
import styles from "./ExtraCallModal.module.scss";

export const ExtraCallModal: FC = () => {
    const { setIsOpen, isOpen } = useExtraCall();
    const { condition } = useUserCondition();
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    useEffect(() => {
        document.body.style.overflow = `${isOpen ? "hidden" : ""}`;
    }, [isOpen]);

    const sick = condition === "Болен";

    const data: IExtraCallBtnData[] = [
        {
            icon: {
                healthy: amabulance,
                sick: amabulanceRed,
            },
            id: useId(),
            position: {
                x: -120,
                y: 0,
            },
            type: "",
        },
        {
            icon: {
                healthy: homeWithPlus,
                sick: homeWithPlusRed,
            },
            id: useId(),
            position: {
                x: -95,
                y: -90,
            },
            type: "",
        },

        {
            icon: {
                healthy: support,
                sick: supportRed,
            },
            id: useId(),
            position: {
                x: 0,
                y: -120,
            },
            type: "",
        },
    ];

    const handleSetIsOpen = () => {
        setIsOpen(false);
    };

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setIsOpenModal((prev) => !prev);
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
            <div className={styles.extraBtn} onClick={handleSetIsOpen}>
                <img src={cross} alt="" />
            </div>
            {!isOpenModal &&
                data.map((item) => (
                    <motion.div
                        initial={{ x: 0, y: 0 }}
                        animate={{
                            x: isOpen ? item.position.x : 0,
                            y: isOpen ? item.position.y : 0,
                        }}
                        exit={{ x: 0, y: 0 }}
                        transition={{
                            duration: 0.3,
                            type: "spring",
                            damping: 10,
                        }}
                        className={`${styles.extraBtn} ${styles.select}`}
                        style={{
                            backgroundColor: `${sick ? "#F7E6E8" : ""}`,
                        }}
                        onClick={handleClick}
                        key={item.id}
                    >
                        <img
                            src={sick ? item.icon.sick : item.icon.healthy}
                            alt=""
                        />
                    </motion.div>
                ))}
            {isOpenModal && isOpen && (
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
            )}
        </div>
    );
};
