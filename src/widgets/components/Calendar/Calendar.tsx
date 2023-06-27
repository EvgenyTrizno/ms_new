import { FC, useState } from "react";
import { ICalendare } from "./types";

import { Input, Text } from "../../../shared";

import arrowLeft from "/assets/arrow-left.svg";
import arrowRight from "/assets/arrow-right.svg";
import styles from "./Calendar.module.scss";

export const Calendar: FC<ICalendare> = ({ width, height, info }) => {
    const currentDate: Date = new Date();
    const [currentMonth, setCurrentMonth] = useState<number>(
        currentDate.getMonth()
    );
    const [currentYear, setCurrentYear] = useState<number>(
        currentDate.getFullYear()
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

    const handleSelectedDay = (day: string | undefined) => {
        if (day === undefined) return;

        console.log(currentDate.getDay());
        setSelectedDay(day);
    };

    const getDaysInMonth = (year: number, month: number) => {
        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month + 1, 0);
        const days: (string | undefined)[] = [];

        for (let i = 0; i < startDate.getDay() - 1; i++) {
            days.push(undefined);
        }

        for (let day = 1; day <= endDate.getDate(); day++) {
            days.push(day.toString());
        }

        const lastDayOfWeek = 7;
        const remainingEmptyDays = (lastDayOfWeek - endDate.getDay()) % 7;
        for (let i = 0; i < remainingEmptyDays; i++) {
            days.push(undefined);
        }

        return days;
    };

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);

    return (
        <div className={styles.calendar} style={{ width, height }}>
            <div className={styles.nav}>
                <div className={styles.date}>
                    <Text type="h2" fz="24px">
                        {months[currentMonth]}
                    </Text>
                    &nbsp;
                    <Text type="h2" fz="24px">
                        {currentYear}
                    </Text>
                </div>
                <div className={styles.arrows}>
                    <img
                        src={arrowLeft}
                        alt=""
                        onClick={() => handlePreviousMonth()}
                    />
                    <img
                        src={arrowRight}
                        alt=""
                        onClick={() => handleNextMonth()}
                    />
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
                            style={
                                day === undefined
                                    ? { cursor: "" }
                                    : { cursor: "pointer" }
                            }
                            key={day}
                            className={
                                selectedDay === day
                                    ? `${styles.item} ${styles.active}`
                                    : styles.item
                            }
                            onClick={() => handleSelectedDay(day)}
                        >
                            {day}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.line}></div>
            {info && (
                <>
                    <div className={styles.info}>
                        <div className={styles.box}>
                            <div className={styles.text}>
                                <Text type="p">Время начала:</Text>
                            </div>
                            <Input type="text" borderColor="#E9EAEB" />
                        </div>
                        <div className={styles.box}>
                            <div className={styles.text}>
                                <Text type="p">Конечное время:</Text>
                            </div>
                            <Input type="text" borderColor="#E9EAEB" />
                        </div>
                    </div>
                    <div className={styles.result}>
                        <Text type="p" fz="18px">
                            Вторник, 8 октября 15:00
                        </Text>
                    </div>
                </>
            )}
        </div>
    );
};
