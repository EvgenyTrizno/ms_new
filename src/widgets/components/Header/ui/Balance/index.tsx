import { FC, useEffect, useRef, useState } from "react";

import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";

export const Balance: FC = () => {
    const [color, setColor] = useState<"red" | "yellow" | "green">("red");
    const [width, setWidth] = useState<number>(0);

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    });
    const currCount = 413 as number;
    const maxCount = 500 as number;
    const fillRef = useRef<HTMLDivElement | null>(null);
    const balanceRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (balanceRef.current) {
            const balanceWidth = parseInt(
                window.getComputedStyle(balanceRef.current).width
            );
            const curr = (currCount / maxCount) * 100;
            const width = (balanceWidth * curr) / 100;

            if (curr >= 0 && curr < 50) {
                setColor("red");
            } else if (curr === 100) {
                setColor("green");
            } else {
                setColor("yellow");
            }

            setTimeout(() => {
                setWidth(width);
            }, 500);

            if (width === balanceWidth && fillRef.current) {
                fillRef.current.style.borderRadius = "12px";
            }
        }
    }, [currCount, maxCount]);

    return (
        <div
            className={styles.balance}
            ref={balanceRef}
            style={{
                backgroundColor:
                    color === "red"
                        ? "#F7E6E8"
                        : color === "yellow"
                        ? "#FFF3DC"
                        : color === "green"
                        ? "green"
                        : "",
            }}
        >
            <div
                className={styles.fill}
                ref={fillRef}
                style={{
                    width,
                    backgroundColor:
                        color === "red"
                            ? "#D64657"
                            : color === "yellow"
                            ? "#FFC555"
                            : color === "green"
                            ? "#00CC5E"
                            : "",
                }}
            ></div>
            <Text type="h2" color="#262626">
                {formatter.format(currCount)}
            </Text>
        </div>
    );
};
