import { FC } from "react";
import { ISeacrh } from "./types";

import { Input, Icons } from "@/shared";

import styles from "./Search.module.scss";

export const Search: FC<ISeacrh> = ({ placeholder, height }) => {
    return (
        <div className={styles.box}>
            <button className={styles.btn}>
                <Icons icon="search" />
            </button>
            <Input
                height={height}
                width="100%"
                borderColor="#E9EAEB"
                bl="none"
                btl="unset"
                bbl="unset"
                bgcolor="#fff"
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
};
