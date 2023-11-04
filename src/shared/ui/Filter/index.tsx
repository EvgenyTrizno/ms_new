import { FC } from "react";
import { IFilter } from "./types";

import styles from "./styles.module.scss";

export const Filter: FC<IFilter> = ({
    style,
    data,
    width,
    icons,
    setIsSelect,
    isSelect,
}) => {
    const active = `${styles.item} ${styles.active}`;
    const activeRed = `${styles.item} ${styles.activeRed}`;

    const sick = "";

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
                    }}
                >
                    <span>{item}</span>
                    {item && icons && icons[i]}
                </div>
            ))}
        </div>
    );
};
