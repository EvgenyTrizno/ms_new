import { FC } from "react";
import { ISeacrh } from "./types";

import { Input } from "@/shared";

import search from "/assets/search-gray.svg";
import styles from "./Search.module.scss";

export const Search: FC<ISeacrh> = ({ placeholder, height }) => {
    return (
        <div className={styles.box}>
            <button className={styles.btn}>
                <img src={search} alt="" />
            </button>
            <Input
                height={height}
                width="100%"
                borderColor="#E9EAEB"
                bl="none"
                borderRadius="0px 8px 8px 0px"
                btl="unset"
                bbl="unset"
                bgcolor="#fff"
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
};
