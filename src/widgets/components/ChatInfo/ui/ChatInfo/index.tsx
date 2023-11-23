import { FC, ReactNode, useState } from "react";

import { Portal } from "@/shared/ui/Portal";
import { BlueBox } from "@/shared/ui/BlueBox";
import { Row } from "@/shared/ui/Row";
import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";
import { Members } from "../Members";
import { FastMessages } from "../FastMessages";

const filters = [
    "Участники",
    "Быстрые ответы",
    "Медия",
    "Файлы",
    "Голос",
    "Ссылки",
] as const;

type TFilters = (typeof filters)[number];

type TContent = {
    [K in TFilters]: ReactNode;
};

export const ChatInfo: FC = () => {
    const [isSelect, setIsSelect] = useState<TFilters>("Участники");

    const content: TContent = {
        Участники: <Members />,
        "Быстрые ответы": <FastMessages />,
        Медия: undefined,
        Файлы: undefined,
        Голос: undefined,
        Ссылки: undefined,
    };

    return (
        <Portal>
            <div className={styles.info}>
                <Row gap={36} className={styles.filters}>
                    {filters.map((item) => (
                        <Text
                            type="p"
                            fz="14px"
                            color="#7D7F82"
                            onClick={() => setIsSelect(item)}
                            style={{ cursor: "pointer" }}
                        >
                            {item}
                            <div
                                className={styles.line}
                                style={{ opacity: isSelect === item ? 1 : 0 }}
                            ></div>
                        </Text>
                    ))}
                </Row>
                <BlueBox className={styles.content}>
                    {content[isSelect]}
                </BlueBox>
            </div>
        </Portal>
    );
};
