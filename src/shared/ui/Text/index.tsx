import { FC } from "react";
import { IText } from "./types";

import styles from "./styles.module.scss";

export const Text: FC<IText> = ({
    type = "p",
    children,
    position = "start",
    fz = 16,
    color = "",
    fw,
}) => {
    switch (type) {
        case "h1":
            return (
                <h1
                    className={styles.h1}
                    style={{
                        textAlign: position,
                        fontSize: fz,
                        color: color,
                        fontWeight: fw,
                    }}
                >
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2
                    className={styles.h2}
                    style={{
                        textAlign: position,
                        fontSize: fz,
                        color: color,
                        fontWeight: fw,
                    }}
                >
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h3
                    className={styles.h3}
                    style={{
                        textAlign: position,
                        fontSize: fz,
                        color: color,
                        fontWeight: fw,
                    }}
                >
                    {children}
                </h3>
            );
        case "h4":
            return (
                <h4
                    className={styles.h4}
                    style={{
                        textAlign: position,
                        fontSize: fz,
                        color: color,
                        fontWeight: fw,
                    }}
                >
                    {children}
                </h4>
            );
        case "h5":
            return (
                <h5
                    className={styles.h5}
                    style={{
                        textAlign: position,
                        fontSize: fz,
                        color: color,
                        fontWeight: fw,
                    }}
                >
                    {children}
                </h5>
            );
        case "h6":
            return (
                <h6
                    className={styles.h6}
                    style={{
                        textAlign: position,
                        fontSize: fz,
                        color: color,
                        fontWeight: fw,
                    }}
                >
                    {children}
                </h6>
            );
        default:
            return (
                <p
                    className={styles.p}
                    style={{
                        textAlign: position,
                        fontSize: fz,
                        color: color,
                        fontWeight: fw,
                    }}
                >
                    {children}
                </p>
            );
    }
};
