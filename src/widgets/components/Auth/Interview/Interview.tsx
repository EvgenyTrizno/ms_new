import { FC, useState, useEffect } from "react";

import { Btn, Switch, Text } from "@/shared";
import { SmallDropbox } from "../../SmallDropbox/SmallDropbox";

import styles from "./Interview.module.scss";

export const Interview: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [select, setSelect] = useState<string>("");

    const format = ["PM", "AM"];

    useEffect(() => {
        setSelect(format[0]);
    }, []);

    return (
        <div className={styles.interview}>
            <Text type="h2" fz="28px" position="center" color="#262626">
                Назначьте дату
                <br /> для собеседования
            </Text>
            <div className={styles.content}>
                <div className={styles.date}>
                    <Text type="p" fz="18px">
                        Запланировать собеседование
                    </Text>
                    <div className={styles.dateBlocks}>
                        <div className={styles.dateBlock}>
                            <Text type="p" fz="18px">
                                12:30
                            </Text>
                        </div>
                        <div className={styles.dateBlock}>
                            <Text type="p" fz="18px">
                                12:30
                            </Text>
                        </div>
                        <div className={styles.dateBlock}>
                            <SmallDropbox
                                setSelect={setSelect}
                                select={select}
                                data={format}
                                open={open}
                                setOpen={setOpen}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.notify}>
                    <Text type="p" fz="18px" color="#262626">
                        Уведомить
                    </Text>
                    <Switch />
                </div>
            </div>
            <Btn color="#0064FA">Продолжить</Btn>
        </div>
    );
};
