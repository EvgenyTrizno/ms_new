import { FC } from "react";
import { motion } from "framer-motion";
import { IBtn } from "./types";

import { useAuth } from "@/shared/model/store/auth";

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
    className,
}) => {
    const { user } = useAuth();

    const sick = user && user.disease.length;

    return (
        <motion.button
            className={`${className} ${styles.btn}`}
            type={type}
            whileTap={
                !disabled
                    ? {
                          background:
                              color === "#D64657" || sick
                                  ? "color-mix(in srgb, #D64657, #000 20%)"
                                  : "color-mix(in srgb, #0064fa, #000 20%)",
                      }
                    : {}
            }
            style={{
                fontSize: fz,
                background: `${
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
