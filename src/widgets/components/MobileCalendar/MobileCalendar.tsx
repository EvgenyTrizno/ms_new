import { FC, useState } from "react";
import { ICalendare } from "../Calendar/types";

import { Text, Input } from "@/shared";
import { useUserCondition } from "@/shared/model/store";

import arrowLeft from "/assets/arrow-left.svg";
import arrowRight from "/assets/arrow-right.svg";
import styles from "./MobileCalendar.module.scss";

export const MobileCalendar: FC<ICalendare> = ({ info, width, height }) => {
    const { condition } = useUserCondition();

    const currentDate: Date = new Date();
    const [currentYear, setCurrentYear] = useState<number>(
        currentDate.getUTCFullYear()
    );
    const [currentMonth, setCurrentMonth] = useState<number>(
        currentDate.getMonth()
    );
    const [selectedDay, setSelectedDay] = useState<string>(
        currentDate.getDate().toString()
    );

    const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];

    const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    const sick = condition === "Болен";
    const active = `${styles.item} ${styles.active}`;
    const activeRed = `${styles.item} ${styles.activeRed}`;

    const getDaysInMonth = (
        year: number,
        month: number
    ): (string | undefined)[] => {
        const startDate: Date = new Date(year, month, 1);
        const endDate: Date = new Date(year, month + 1, 0);
        const lastDayOfWeek = 7;
        const remainingEmptyDays = (lastDayOfWeek - endDate.getDay()) % 7;
        const days: (string | undefined)[] = [];

        for (let i = 0; i < startDate.getDay() - 1; i++) {
            days.push(undefined);
        }

        for (let day = 1; day <= endDate.getDate(); day++) {
            days.push(day.toString());
        }

        for (let i = 0; i < remainingEmptyDays; i++) {
            days.push(undefined);
        }

        return days;
    };

    const handleSelectedDay = (day: string | undefined) => {
        if (day === undefined) return;

        setSelectedDay(day);
    };

    const handlePreviousMonth = () => {
        if (currentMonth === 1) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);

    return (
        <div className={styles.calendar} style={{ width, height }}>
            <div className={styles.nav}>
                <div className={styles.date}>
                    <Text type="h2" fz="17px">
                        {months[currentMonth]}
                    </Text>
                    <Text type="h2" fz="17px">
                        {currentYear}
                    </Text>
                </div>
                <div className={styles.arrows}>
                    <img src={arrowLeft} alt="" onClick={handlePreviousMonth} />
                    <img src={arrowRight} alt="" onClick={handleNextMonth} />
                </div>
            </div>
            <div className={styles.days}>
                <div className={styles.inner}>
                    {days.map((item) => (
                        <span key={item} className={styles.day}>
                            {item}
                        </span>
                    ))}
                </div>
                <ul className={styles.list}>
                    {daysInMonth.map((day) => (
                        <li
                            key={day}
                            className={
                                selectedDay === day && sick
                                    ? activeRed
                                    : selectedDay === day && !sick
                                    ? active
                                    : styles.item
                            }
                            onClick={() => handleSelectedDay(day)}
                        >
                            {day}
                        </li>
                    ))}
                </ul>
            </div>
            {info && (
                <>
                    <div className={styles.line}></div>
                    <div className={styles.info}>
                        <div className={styles.box}>
                            <div className={styles.text}>
                                <Text type="p" color="#7D7F82" fz="12px">
                                    Время начала:
                                </Text>
                            </div>
                            <Input
                                type="text"
                                borderColor="#E9EAEB"
                                height="40px"
                                padding="16px"
                                bbr="12px"
                                btr="12px"
                                bbl="12px"
                                btl="12px"
                            />
                        </div>
                        <div className={styles.box}>
                            <div className={styles.text}>
                                <Text type="p" color="#7D7F82" fz="12px">
                                    Конечное время:
                                </Text>
                            </div>
                            <Input
                                type="text"
                                borderColor="#E9EAEB"
                                height="40px"
                                padding="16px"
                                bbr="12px"
                                btr="12px"
                                bbl="12px"
                                btl="12px"
                            />
                        </div>
                    </div>
                    <div
                        className={
                            sick
                                ? `${styles.result} ${styles.resultRed}`
                                : styles.result
                        }
                    >
                        <Text type="p" fz="18px">
                            Вторник, 8 октября 15:00
                        </Text>
                    </div>
                </>
            )}
        </div>
    );
};
