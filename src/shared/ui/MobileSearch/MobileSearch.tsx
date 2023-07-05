import { FC } from "react";
import { IMobileSearch } from "./types";

import { Icons } from "../Icons/Icons";
import { useUserCondition } from "@/shared/model/store";

import styles from "./MobileSearch.module.scss";

export const MobileSearch: FC<IMobileSearch> = ({
    icon,
    onClick,

    placeholder,
}) => {
    const { condition } = useUserCondition();

    return (
        <div className={styles.search}>
            <button className={styles.icon}>
                <Icons icon="search" />
            </button>
            <input type="text" placeholder={placeholder} />
            <button
                onClick={onClick}
                style={
                    condition === "Болен" ? { backgroundColor: "#D64657" } : {}
                }
                className={styles.btn}
            >
                <img src={icon} alt="" />
            </button>
        </div>
    );
};
