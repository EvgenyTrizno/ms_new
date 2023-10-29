import { FC, useState } from "react";
import { IRatingProps } from "../types";

import styles from "./styles.module.scss";

export const Rating: FC<IRatingProps> = ({
    defaultValue,
    onChange,
    disabled,
    width = "24px",
    height = "24px",
    gap,
}) => {
    const [value, setValue] = useState(defaultValue);
    const stars = [];

    const handleClick = (newValue: number) => {
        if (disabled) return;

        setValue(newValue);

        if (onChange) {
            onChange(newValue);
        }
    };

    for (let i = 1; i <= 5; i++) {
        const starClass = i <= value ? `${styles.active}` : "";
        stars.push(
            <span key={i} className={starClass} onClick={() => handleClick(i)}>
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 22 20"
                    fill="none"
                >
                    <path
                        d="M10.5194 0.674641C10.6579 0.191876 11.3421 0.191876 11.4806 0.674641L13.361 7.22682C13.4243 7.44738 13.6296 7.59655 13.8589 7.58859L20.6715 7.35221C21.1734 7.33479 21.3848 7.98542 20.9685 8.26637L15.3181 12.0795C15.1279 12.2078 15.0495 12.4492 15.1279 12.6648L17.4579 19.0709C17.6296 19.5429 17.0761 19.945 16.6803 19.6359L11.3077 15.4403C11.1269 15.2991 10.8731 15.2991 10.6923 15.4403L5.31972 19.6359C4.92387 19.945 4.37042 19.5429 4.54209 19.0709L6.8721 12.6648C6.95053 12.4492 6.87211 12.2078 6.6819 12.0795L1.03149 8.26637C0.615163 7.98542 0.826564 7.33479 1.32851 7.35221L8.14107 7.58859C8.3704 7.59655 8.57571 7.44738 8.63901 7.22682L10.5194 0.674641Z"
                        fill="#E9EAEB"
                    />
                </svg>
            </span>
        );
    }

    return (
        <div
            className="rating"
            style={{ display: "flex", gridGap: gap, alignItems: "center" }}
        >
            {stars}
        </div>
    );
};
