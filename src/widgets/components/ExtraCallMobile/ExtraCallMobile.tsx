import { FC, useEffect, useId } from "react";
import { IExtraCallBtnData } from "./types";

import { useUserCondition } from "@/shared/model/store";

import amabulance from "/assets/amabulance-blue.svg";
import people from "/assets/people-blue.svg";
import marker from "/assets/marker-plus.svg";
import styles from "./ExtraCallMobile.module.scss";

export const ExtraCallMobile: FC = () => {
    const { condition } = useUserCondition();

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const sick = condition === "Болен";

    const btns: IExtraCallBtnData[] = [
        {
            icon: amabulance,
            id: useId(),
            position: {
                x: 90,
                y: 40,
            },
        },
        {
            icon: marker,
            id: useId(),
            position: {
                x: 165,
                y: 95,
            },
        },
        {
            icon: people,
            id: useId(),
            position: {
                x: 235,
                y: 40,
            },
        },
    ];

    return (
        <div className={styles.extra}>
            <div className={styles.container}>
                {btns.map((btn) => (
                    <div
                        className={styles.btn}
                        key={btn.id}
                        style={{
                            transform: `translate(${btn.position.x}px, -${btn.position.y}px)`,
                            backgroundColor: `${sick ? "#F7E6E8" : ""}`,
                        }}
                    >
                        <img src={btn.icon} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};
