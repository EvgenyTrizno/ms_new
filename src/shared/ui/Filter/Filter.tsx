import { FC, useState, useEffect } from "react";
import { IFilter } from "./types";

import { useFilter } from "@/shared/model/store";
import { useUserCondition } from "@/shared/model/store";

import styles from "./Filter.module.scss";

export const Filter: FC<IFilter> = ({ data, width }) => {
    const [isSelect, setIsSelect] = useState<string>(data[0]);
    const { setIsFilter } = useFilter();
    const { condition } = useUserCondition();

    useEffect(() => {
        setIsFilter(data[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const active = `${styles.item} ${styles.active}`;
    const activeRed = `${styles.item} ${styles.activeRed}`;
    const sick = condition === "Болен";

    return (
        <div className={styles.container} style={{ width }}>
            {data.map((item) => (
                <div
                    className={`${
                        isSelect === item && sick
                            ? activeRed
                            : isSelect === item && !sick
                            ? active
                            : styles.item
                    }`}
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
