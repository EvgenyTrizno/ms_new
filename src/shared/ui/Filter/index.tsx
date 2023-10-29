import { FC, useState, useEffect } from "react";
import { IFilter } from "./types";

import { useFilter } from "@/shared/model/store";
import { useUserCondition } from "@/shared/model/store";

import styles from "./styles.module.scss";

export const Filter: FC<IFilter> = ({ style, data, width, icons }) => {
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
        <div
            className={styles.container}
            style={{ ...style, width, borderColor: sick ? "#F7E6E8" : "" }}
        >
            {data.map((item, i) => (
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
                    <span>{item}</span>
                    {item && icons && icons[i]}
                </div>
            ))}
        </div>
    );
};
