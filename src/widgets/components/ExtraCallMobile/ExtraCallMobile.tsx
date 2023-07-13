import { FC, useEffect, useId } from "react";

import amabulance from "/assets/amabulance-blue.svg";
import people from "/assets/people-blue.svg";
import marker from "/assets/marker-plus.svg";
import styles from "./ExtraCallMobile.module.scss";

export const ExtraCallMobile: FC = () => {
    const btns = {
        healthy: [
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
        ],
        sick: [],
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div className={styles.extra}>
            <div className={styles.container}>
                {btns.healthy.map((btn) => (
                    <div
                        className={styles.btn}
                        key={btn.id}
                        style={{
                            transform: `translate(${btn.position.x}px, -${btn.position.y}px)`,
                        }}
                    >
                        <img src={btn.icon} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};
