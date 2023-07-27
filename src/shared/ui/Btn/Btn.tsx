import { FC } from "react";
import { motion } from "framer-motion";
import { IBtn } from "@/shared/types";

import { useUserCondition } from "@/shared/model/store";

import styles from "./Btn.module.scss";

export const Btn: FC<IBtn> = ({
    color,
    width = "100%",
    children,
    onClick = () => "",
    br,
    padding,
    disabled,
    border,
    textColor,
    height,
    type,
}) => {
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    return (
        <motion.button
            className={styles.btn}
            type={type}
            style={{
                backgroundColor: `${
                    sick && color === "transparen"
                        ? "transparent"
                        : sick && color !== "transparent"
                        ? "#D64657"
                        : `${color}`
                }`,
                width,
                borderRadius: br,
                padding,
                border:
                    sick && color === "transparent"
                        ? "1px solid #D64657"
                        : !sick && color === "transparent"
                        ? border
                        : !sick
                        ? "none"
                        : border,
                color:
                    sick && color === "transparent"
                        ? "#D64657"
                        : `${textColor}`,
                height,
            }}
            disabled={disabled}
            onClick={() => onClick()}
        >
            {children}
        </motion.button>
    );
};
