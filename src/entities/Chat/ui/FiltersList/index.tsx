import { FC } from "react";

import styles from "./styles.module.scss";
import { MessageFilter } from "../MessageFilter";

export const FiltersList: FC = () => {
    const filters = ["Город", "Пользователи", "Клиники", "Центры", "Звонки"];

    return (
        <div className={styles.list}>
            <div className={styles.selected}></div>
            <div className={styles.filters}>
                {filters.map((filter) => (
                    <MessageFilter text={filter} />
                ))}
            </div>
        </div>
    );
};
