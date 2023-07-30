import { FC } from "react";
import { IMobileSearch } from "./types";

import { Icons } from "../Icons/Icons";
import { useUserCondition } from "@/shared/model/store";

import controller from "/assets/controler.svg";
import styles from "./MobileSearch.module.scss";

export const MobileSearch: FC<IMobileSearch> = ({
    onClick,
    placeholder,
    filterBtn = true,
}) => {
    const { condition } = useUserCondition();

    return (
        <div
            className={styles.search}
            style={filterBtn === false ? { padding: "15px" } : {}}
        >
            <button className={styles.icon}>
                <Icons icon="search" />
            </button>
            <input type="text" placeholder={placeholder} />
            {filterBtn && (
                <button
                    onClick={onClick}
                    style={
                        condition === "Болен"
                            ? { backgroundColor: "#D64657" }
                            : {}
                    }
                    className={styles.btn}
                >
                    <img src={controller} alt="" />
                </button>
            )}
        </div>
    );
};
