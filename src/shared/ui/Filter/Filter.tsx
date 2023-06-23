import { FC, useState } from "react";
import { IFilter } from "./types";

import styles from "./Filter.module.scss";

export const Filter: FC<IFilter> = ({ data }) => {
    const [isSelect, setIsSelect] = useState<string>(data[0]);

    return (
        <div className={styles.container}>
            {data.map((item) => (
                <div
                    className={`${
                        isSelect === item
                            ? `${styles.item} ${styles.active}`
                            : styles.item
                    }`}
                    key={item}
                    onClick={() => setIsSelect(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};
