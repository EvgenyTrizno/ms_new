import { FC } from "react";
import { motion } from "framer-motion";
import { IBtn } from "@/shared/types";

import { useUserCondition } from "@/shared/model/store";

import styles from "./styles.module.scss";

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
    fz,
    minW,
}) => {
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    return (
        <motion.button
            className={styles.btn}
            type={type}
            whileTap={{
                background:
                    color === "#D64657" || sick
                        ? "color-mix(in srgb, #D64657, #000 20%)"
                        : "color-mix(in srgb, #0064fa, #000 20%)",
            }}
            style={{
                fontSize: fz,
                backgroundColor: `${
                    sick
                        ? "#D64657"
                        : sick && color === "transparent"
                        ? "#transparent"
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
                minWidth: minW,
            }}
            disabled={disabled}
            onClick={() => onClick()}
        >
            {children}
        </motion.button>
    );
};
