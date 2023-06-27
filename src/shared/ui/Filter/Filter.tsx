import { FC, useState } from "react";
import { IFilter } from "./types";

import { useFilter } from "../../../shared/model/store";

import styles from "./Filter.module.scss";

export const Filter: FC<IFilter> = ({ data, width }) => {
    const [isSelect, setIsSelect] = useState<string>(data[0]);
    const { setIsFilter } = useFilter();

    return (
        <div className={styles.container} style={{ width }}>
            {data.map((item) => (
                <div
                    className={`${
                        isSelect === item
                            ? `${styles.item} ${styles.active}`
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
