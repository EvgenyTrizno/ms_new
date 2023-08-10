import { FC, useId, MouseEvent } from "react";
import { IExtraCallBtnData } from "./types";
import { motion } from "framer-motion";

import { useExtraCall, useUserCondition } from "@/shared/model/store";

import amabulance from "/assets/amabulance-blue.svg";
import people from "/assets/people-blue.svg";
import marker from "/assets/marker-plus.svg";
import styles from "./ExtraCallMobile.module.scss";

export const ExtraCallMobile: FC = () => {
    const { condition } = useUserCondition();
    const { isOpen, setIsOpen } = useExtraCall();

    const sick = condition === "Болен";
    const media = window.matchMedia(
        "(min-width: 576px) and (max-width: 768px)"
    ).matches;

    const btns: IExtraCallBtnData[] = [
        {
            icon: {
                sick: amabulance,
                healthy: amabulance,
            },
            id: useId(),
            position: {
                x: media ? -90 : -70,
                y: media ? 30 : 50,
            },
        },
        {
            icon: {
                sick: marker,
                healthy: marker,
            },
            id: useId(),
            position: {
                x: 0,
                y: media ? -20 : 0,
            },
        },
        {
            icon: { healthy: people, sick: people },
            id: useId(),
            position: {
                x: media ? 90 : 70,
                y: media ? 30 : 50,
            },
        },
    ];

    isOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "");

    const handleClick = () => {
        setIsOpen(false);
    };

    return (
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
                {btns.map((btn) => (
                    <motion.div
                        className={styles.btn}
                        onClick={(e: MouseEvent<HTMLDivElement>) =>
                            e.stopPropagation()
                        }
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
                    >
                        <img
                            src={sick ? btn.icon.sick : btn.icon.healthy}
                            alt=""
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
