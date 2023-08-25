import { FC } from "react";
import { ISeacrh } from "./types";

import { Input } from "@/shared";
import { useUserCondition } from "@/shared/model/store";

import search from "/assets/search-gray.svg";
import styles from "./Search.module.scss";

export const Search: FC<ISeacrh> = ({ placeholder, height }) => {
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    return (
        <div className={styles.box}>
            <button
                className={styles.btn}
                style={{ borderColor: sick ? "#F7E6E8" : "#EBF3FF" }}
            >
                <img src={search} alt="" />
            </button>
            <Input
                height={height}
                width="100%"
                borderColor={sick ? "#F7E6E8" : "#EBF3FF"}
                bl="none"
                borderRadius="0px 15px 15px 0px"
                btl="unset"
                bbl="unset"
                bgcolor="#fff"
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
};
