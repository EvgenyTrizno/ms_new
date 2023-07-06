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
}) => {
    const { condition } = useUserCondition();

    return (
        <motion.button
            className={styles.btn}
            style={{
                backgroundColor: `${
                    condition === "Болен" && color === "transparen"
                        ? "transparent"
                        : condition === "Болен" && color !== "transparent"
                        ? "#D64657"
                        : `${color}`
                }`,
                width,
                borderRadius: br,
                padding,
                border:
                    condition === "Болен" ? "1px solid #D64657" : `${border}`,
                color:
                    condition === "Болен" && color === "transparent"
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
