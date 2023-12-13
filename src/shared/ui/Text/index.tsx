import { FC } from "react";
import { IText } from "./types";

import styles from "./styles.module.scss";

export const Text: FC<IText> = ({
    type = "p",
    children,
    position = "start",
    fz,
    color = "",
    fw,
    onClick,
    style,
    className,
}) => {
    switch (type) {
        case "h1":
            return (
                <h1
                    className={`${className} ${styles.h1}`}
                    onClick={onClick}
                    style={{
                        ...style,
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
                    className={`${className} ${styles.h2}`}
                    onClick={onClick}
                    style={{
                        ...style,
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
                    className={`${className} ${styles.h3}`}
                    onClick={onClick}
                    style={{
                        ...style,
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
                    className={`${className} ${styles.h4}`}
                    onClick={onClick}
                    style={{
                        ...style,
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
                    className={`${className} ${styles.h5}`}
                    onClick={onClick}
                    style={{
                        ...style,
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
                    className={`${className} ${styles.h6}`}
                    onClick={onClick}
                    style={{
                        ...style,
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
                    className={`${className} ${styles.p}`}
                    onClick={onClick}
                    style={{
                        ...style,
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
