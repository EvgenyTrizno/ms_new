import { FC, useState } from "react";

import styles from "./styles.module.scss";
import { useAuth } from "@/shared/model/store/auth";
import { IDayBtn } from "./types";

export const DayBtn: FC<IDayBtn> = ({ day }) => {
    const { user } = useAuth();
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className={active == false ? styles.day : styles.day_active} onClick={() => setActive(!active)}>
            <div className={active == false ? styles.day_text : styles.day_text_active}>
                {day}
            </div>
        </div>
    );
};
