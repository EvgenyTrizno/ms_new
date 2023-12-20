import { FC } from "react";

import { IFilterWithIconsProps } from "./types";
import { useAuth } from "@/shared/model/store/auth";

import styles from "./styles.module.scss";

export const FilterWithIcons: FC<IFilterWithIconsProps> = ({
    width,
    data,
    isSelect,
    // setIsSelect,
}) => {
    const { user } = useAuth();

    const active = `${styles.item} ${styles.active}`;
    const activeRed = `${styles.item} ${styles.activeRed}`;

    const sick = user && user.disease.length;

    return (
        <div
            className={styles.container}
            style={{ width, borderColor: sick ? "#F7E6E8" : "" }}
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
                    key={i}
                    onClick={() => {
                        // setIsSelect(item);
                    }}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};
