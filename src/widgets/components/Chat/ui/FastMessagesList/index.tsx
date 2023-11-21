import { FC } from "react";

import { Row } from "@/shared/ui/Row";
import { FastMessage } from "../FastMessage";

import styles from "./styles.module.scss";

export const FastMessagesList: FC = () => {
    const messages = ["Баги", "Сотрудничество", "Пожаловаться"];

    return (
        <Row gap={16} className={styles.list}>
            {messages.map((item) => (
                <FastMessage text={item} key={item} />
            ))}
        </Row>
    );
};
