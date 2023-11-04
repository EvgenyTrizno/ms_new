import { FC, InputHTMLAttributes } from "react";
import { IMobileSearch } from "./types";

import controller from "/assets/controler.svg";
import search from "/assets/search-gray.svg";
import styles from "./MobileSearch.module.scss";

export const MobileSearch: FC<
    IMobileSearch & InputHTMLAttributes<HTMLInputElement>
> = ({ onClick, onChange, placeholder, filterBtn = true, width }) => {
    return (
        <div
            className={styles.search}
            style={{
                padding: filterBtn === false ? "16px" : "",
                width,
                borderColor: condition === "Болен" ? "#F7E6E8" : "",
            }}
        >
            <button className={styles.icon}>
                <img src={search} alt="" />
            </button>
            <input type="text" placeholder={placeholder} onChange={onChange} />
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
