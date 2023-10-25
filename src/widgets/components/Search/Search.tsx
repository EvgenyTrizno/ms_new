import { FC } from "react";
import { ISeacrh } from "./types";

import { Input } from "@/shared/ui/Input";
import { useUserCondition } from "@/shared/model/store";

import search from "/assets/search-gray.svg";
import styles from "./Search.module.scss";
import { LAPTOP } from "@/shared/utils";

export const Search: FC<ISeacrh> = ({ placeholder, height }) => {
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    return (
        <div
            className={styles.box}
            style={{ borderColor: sick ? "#F7E6E8" : "#EBF3FF" }}
        >
            <button className={styles.btn}>
                <img src={search} alt="" />
            </button>
            <Input
                height={height && parseInt(height) - 2 + "px"}
                width="100%"
                borderColor={sick ? "#F7E6E8" : "#EBF3FF"}
                bl="none"
                bb="none"
                bt="none"
                br="none"
                borderRadius="0px 12px 12px 0px"
                btl="unset"
                bbl="unset"
                padding={LAPTOP ? "10px 16px 10px 8px" : "12px 16px 12px 10px"}
                bgcolor="#fff"
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
};
