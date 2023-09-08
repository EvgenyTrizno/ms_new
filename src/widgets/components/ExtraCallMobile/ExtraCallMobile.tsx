import { FC, useId, MouseEvent, useState } from "react";
import { IExtraCallBtnData } from "./types";
import { motion } from "framer-motion";
import { TABLET } from "@/shared/utils";

import { useExtraCall, useUserCondition } from "@/shared/model/store";

import amabulance from "/assets/amabulance-blue.svg";
import people from "/assets/people-blue.svg";
import marker from "/assets/marker-plus.svg";
import styles from "./ExtraCallMobile.module.scss";
import { Modal } from "../Modal/Modal";

export const ExtraCallMobile: FC = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(true);

    const { condition } = useUserCondition();
    const { isOpen, setIsOpen } = useExtraCall();

    const sick = condition === "Болен";

    const btns: IExtraCallBtnData[] = [
        {
            icon: {
                sick: amabulance,
                healthy: amabulance,
            },
            id: useId(),
            position: {
                x: TABLET ? -90 : -70,
                y: TABLET ? 30 : 50,
            },
            type: "скорая помощь",
        },
        {
            icon: {
                sick: marker,
                healthy: marker,
            },
            id: useId(),
            position: {
                x: 0,
                y: TABLET ? -20 : 0,
            },
            type: "",
        },
        {
            icon: { healthy: people, sick: people },
            id: useId(),
            position: {
                x: TABLET ? 90 : 70,
                y: TABLET ? 30 : 50,
            },
            type: "поддержка",
        },
    ];

    isOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "");

    const handleClick = () => {
        setIsOpen(false);
    };

    const handleClickOnBtn = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        // const target = e.target as HTMLDivElement;
        // const type = target.getAttribute("data-type");

        // switch (type) {
        //     case "скорая помощь":
        //         setIsOpenModal(true);
        //         break;
        // }
    };

    return (
        <>
            <motion.div
                onClick={handleClick}
                style={{
                    pointerEvents: !isOpen ? "none" : "auto",
                    overflow: "hidden",
                }}
                className={styles.extra}
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
            >
                <div
                    className={styles.block}
                    style={{
                        bottom: "10%",
                    }}
                >
                    {!isOpenModal &&
                        btns.map((btn) => (
                            <motion.div
                                className={styles.btn}
                                onClick={handleClickOnBtn}
                                initial={{ x: 0, y: 0 }}
                                whileTap={{ scale: 0.9 }}
                                animate={{
                                    x: isOpen ? btn.position.x : 0,
                                    y: isOpen ? btn.position.y : 110,
                                }}
                                transition={{
                                    type: "spring",
                                    duration: 0.3,
                                    damping: 13,
                                    stiffness: 100,
                                }}
                                exit={{ x: -0, y: -0 }}
                                key={btn.id}
                                data-type={btn.type}
                            >
                                <img
                                    src={
                                        sick ? btn.icon.sick : btn.icon.healthy
                                    }
                                    alt=""
                                />
                            </motion.div>
                        ))}
                </div>
            </motion.div>
            {/* {isOpenModal && <Modal setIsOpenModal={setIsOpenModal}></Modal>} */}
        </>
    );
};
