import { FC, useState } from "react";

import styles from "./styles.module.scss";
import { useAuth } from "@/shared/model/store/auth";
import { IDayBtn } from "./types";
import { useClinicRegistration } from "@/shared/model/store/clinicRegistration";

export const DayBtn: FC<IDayBtn> = ({ day }) => {
    const { user } = useAuth();
    const [active, setActive] = useState<boolean>(false);
    const { workdays, setWorkdays } = useClinicRegistration();

    const changeStateClinic = (day: string) => {
        if (active === true) {
            setWorkdays(workdays.filter((workday) => {
                return workday !== day
            }))
        } else if (active === false) {
            setWorkdays([...workdays, day])
        }

        setActive(!active)

    }

    return (
        <div className={active == false ? styles.day : styles.day_active} onClick={() => changeStateClinic(day)}>
            <div className={active == false ? styles.day_text : styles.day_text_active}>
                {day}
            </div>
        </div >
    );
};
