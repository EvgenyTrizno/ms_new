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

    const btns: IExtraCallBtnData[] = [
        {
            icon: {
                sick: amabulance,
                healthy: amabulance,
            },
            id: useId(),
            position: {
                x: 90,
                y: -40,
            },
        },
        {
            icon: {
                sick: marker,
                healthy: marker,
            },
            id: useId(),
            position: {
                x: 165,
                y: -95,
            },
        },
        {
            icon: { healthy: people, sick: people },
            id: useId(),
            position: {
                x: 235,
                y: -40,
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
            <div>
                {btns.map((btn) => (
                    <motion.div
                        className={styles.btn}
                        onClick={(e: MouseEvent<HTMLDivElement>) =>
                            e.stopPropagation()
                        }
                        initial={{ x: 0, y: 0 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{
                            x: isOpen ? btn.position.x : 165,
                            y: isOpen ? btn.position.y : 25,
                        }}
                        transition={{
                            type: "spring",
                            duration: 0.3,
                            damping: 13,
                            stiffness: 100,
                        }}
                        exit={{ x: 0, y: 0 }}
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
