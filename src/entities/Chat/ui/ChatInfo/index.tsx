import { FC } from "react";

import { Portal } from "@/shared/ui/Portal";
import { BlueBox } from "@/shared/ui/BlueBox";

import styles from "./styles.module.scss";

export const ChatInfo: FC = () => {
    return (
        <Portal>
            <div className={styles.info}>
                <div className={styles.filters}></div>
                <BlueBox className={styles.content}>
                    <div className={styles.block}></div>
                    <div className={styles.block}></div>
                    <div className={styles.block}></div>
                    <div className={styles.block}></div>
                    <div className={styles.block}></div>
                    <div className={styles.block}></div>
                    <div className={styles.block}></div>
                    <div className={styles.block}></div>
                </BlueBox>
            </div>
        </Portal>
    );
};
