import { FC, useEffect, useState } from "react";

import { Calendar } from "@/widgets";

export const NoteCalendar: FC = () => {
    const [selectDate, setSelectDate] = useState<Date | undefined>();
    const [selectDateEnd, setSelectDateEnd] = useState<Date>();
    const [notifyDays, setNotifyDays] = useState<string>("");
    const [notifyMinutes, setNotifyMinutes] = useState<string>("");
    const [notify, setNotify] = useState<Date>();
    const [duration, setDuration] = useState<number>(0);

    useEffect(() => {
        if (notify && duration) {
            setNotifyDays("");
            setNotifyMinutes("");
        }
    }, []); // костыль

    useEffect(() => {
        if (selectDate) {
            const dateCopy: Date = new Date(selectDate);

            if (notifyMinutes && notifyDays) {
                const totalMinutesChange: number =
                    +notifyMinutes + +notifyDays * 24 * 60;
                const newDate: Date = new Date(
                    dateCopy.getTime() - totalMinutesChange * 60000
                );

                setNotify(newDate);
            } else if (notifyMinutes) {
                const minutesChange: number = +notifyMinutes;
                const newDate: Date = new Date(
                    dateCopy.getTime() - minutesChange * 60000
                );

                setNotify(newDate);
            } else if (notifyDays) {
                const daysChange: number = +notifyDays;
                const newDate: Date = new Date(
                    dateCopy.getTime() - daysChange * 24 * 60 * 60000
                );

                setNotify(newDate);
            }
        }
    }, [notifyDays, notifyMinutes, selectDate]);

    useEffect(() => {
        if (selectDate && selectDateEnd) {
            const dateCopyStart = new Date(selectDate);
            const dateCopyEnd = new Date(selectDateEnd);
            const diff = +dateCopyEnd - +dateCopyStart;
            const minutes = Math.floor(diff / (1000 * 60));

            setDuration(minutes);
        }
    }, [selectDate, selectDateEnd]);

    return (
        <Calendar
            setSelectDate={setSelectDate}
            selectDate={selectDate}
            setSelectDateEnd={setSelectDateEnd}
            width="100%"
            info
        />
    );
};
