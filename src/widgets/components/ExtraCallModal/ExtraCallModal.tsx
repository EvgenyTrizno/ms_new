import { FC, useEffect, useId } from "react";
import { IExtraCallBtnData } from "../ExtraCallMobile/types";

import { useExtraCall } from "@/shared/model/store";
import { useUserCondition } from "@/shared/model/store";

import cross from "/assets/cross.svg";
import amabulance from "/assets/amabulance-blue.svg";
import amabulanceRed from "/assets/amabulance-red.svg";
import homeWithPlus from "/assets/home-with-plus-blue.svg";
import homeWithPlusRed from "/assets/home-with-plus-red.svg";
import key from "/assets/key-blue.svg";
import keyRed from "/assets/key-red.svg";
import support from "/assets/support-blue.svg";
import supportRed from "/assets/support-red.svg";
import styles from "./ExtraCallModal.module.scss";

export const ExtraCallModal: FC = () => {
    const { setIsOpen } = useExtraCall();
    const { condition } = useUserCondition();

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const sick = condition === "Болен";

    const data: IExtraCallBtnData[] = [
        {
            icon: {
                healthy: amabulance,
                sick: amabulanceRed,
            },
            id: useId(),
            position: {
                x: 135,
                y: 0,
            },
        },
        {
            icon: {
                healthy: homeWithPlus,
                sick: homeWithPlusRed,
            },
            id: useId(),
            position: {
                x: 130,
                y: 75,
            },
        },
        {
            icon: {
                healthy: key,
                sick: keyRed,
            },
            id: useId(),
            position: {
                x: 75,
                y: 130,
            },
        },
        {
            icon: {
                healthy: support,
                sick: supportRed,
            },
            id: useId(),
            position: {
                x: 0,
                y: 135,
            },
        },
    ];

    return (
        <div className={styles.extra} onClick={() => setIsOpen(false)}>
            <div className={styles.extraBtn} onClick={() => setIsOpen(false)}>
                <img src={cross} alt="" />
            </div>
            {data.map((item) => (
                <div
                    className={`${styles.extraBtn} ${styles.select}`}
                    style={{
                        transform: `translate(-${item.position.x}px, -${item.position.y}px)`,
                        backgroundColor: `${sick ? "#F7E6E8" : ""}`,
                    }}
                    onClick={(e) => e.stopPropagation()}
                    key={item.id}
                >
                    <img
                        src={sick ? item.icon.sick : item.icon.healthy}
                        alt=""
                    />
                </div>
            ))}
        </div>
    );
};
