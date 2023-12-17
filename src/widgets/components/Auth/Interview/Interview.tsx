import { FC, useState, useEffect, MouseEvent } from "react";

// import { Switch } from "@/shared";
import { Btn } from "@/shared/ui/Btn";
import { Text } from "@/shared/ui/Text";
import { Calendar, decreasingMonths } from "../../Calendar";
import { SmallDropbox } from "../../SmallDropbox/SmallDropbox";
import { Modal } from "../../../../entities/Modal";

import styles from "./Interview.module.scss";

export const Interview: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [select, setSelect] = useState<string>("");
    const [isOpenCalendar, setIsOpenCalendar] = useState<boolean>(false);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
    const [selectDate, setSelectDate] = useState<Date>();
    const [y, setY] = useState<number>(0);
    const [x, setX] = useState<number>(0);

    const format = ["PM", "AM"];

    useEffect(() => {
        setSelect(format[0]);
    }, []);

    return (
        <>
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
                            <div
                                className={styles.dateBlock}
                                onClick={(e: MouseEvent) => {
                                    setIsOpenCalendar((prev) => !prev);
                                    setY(e.pageY / 2);
                                    setX(e.pageX + 50);
                                }}
                            >
                                <Text type="p" fz="18px" color="#262626">
                                    {(selectDate && selectDate.getDate()) ??
                                        new Date().getDate()}{" "}
                                    {(selectDate &&
                                        decreasingMonths[
                                            selectDate.getMonth()
                                        ]) ??
                                        decreasingMonths[new Date().getMonth()]}
                                </Text>
                            </div>
                            <div className={styles.dateBlock}>
                                <Text type="p" fz="18px">
                                    12:30
                                </Text>
                            </div>
                            <SmallDropbox
                                setSelect={setSelect}
                                select={select}
                                data={format}
                                open={open}
                                setOpen={setOpen}
                            />
                        </div>
                    </div>
                    <div className={styles.notify}>
                        <Text type="p" fz="18px" color="#262626">
                            Уведомить
                        </Text>
                        {/* <Switch /> */}
                    </div>
                </div>
                <Btn color="#0064FA">Продолжить</Btn>
            </div>
            <div
                className={styles.calendar}
                style={{
                    top: y,
                    left: x,
                    opacity: isOpenCalendar ? 1 : 0,
                    pointerEvents: isOpenCalendar ? "auto" : "none",
                }}
            >
                <Calendar
                    setSelectDate={setSelectDate}
                    borderColor="#EFEFEF"
                    info={false}
                />
            </div>
            <Modal
                setIsOpenModal={setIsOpenModal}
                width="500px"
                isOpen={isOpenModal}
            >
                <Text type="h2" fz="26px" position="center">
                    Ваш запрос был
                    <br /> успешно отправлен
                </Text>
                <div className={styles.modalContent}>
                    <Text type="p" color="#B1B2B4" position="center" fz="18px">
                        Ваша заявка будет расмотрена
                        <br /> в течении 72х часов
                    </Text>
                </div>
                <Btn color="#0064FA" height="54px">
                    Завершить
                </Btn>
            </Modal>
        </>
    );
};
