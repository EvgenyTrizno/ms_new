import { FC, useState, useEffect, useMemo } from "react";
import { IFilter } from "./types";

import { useFilter } from "@/shared/model/store";

import styles from "./Filter.module.scss";

export const Filter: FC<IFilter> = ({ data, width }) => {
    const [isSelect, setIsSelect] = useState<string>(data[0]);
    const { setIsFilter } = useFilter();

    useEffect(() => {
        setIsFilter(data[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const active = useMemo(() => `${styles.item} ${styles.active}`, []);

    return (
        <div className={styles.container} style={{ width }}>
            {data.map((item) => (
                <div
                    className={`${isSelect === item ? active : styles.item}`}
                    key={item}
                    onClick={() => {
                        setIsSelect(item);
                        setIsFilter(item);
                    }}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};
