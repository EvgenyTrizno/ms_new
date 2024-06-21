import { FC } from "react";
import { IFilter } from "./types";

import { useAuth } from "@/shared/model/store/auth";

import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

export const Filter: FC<PropsWithClassName<IFilter>> = ({
    className,
    data,
    icons,
    setIsSelect,
    isSelect,
}) => {

    const active = `${styles.item} ${styles.active}`;


    return (
        <div className={cn(styles.container, className)}>
            {data.map((item, i) => (
                <div
                    className={`${isSelect === item
                        ? active : styles.item
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
