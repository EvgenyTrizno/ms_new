import { FC } from "react";
import { ISeacrh } from "../types";
import { useAuth } from "@/shared/model/store/auth";

import { Image } from "@/shared/ui/Image";

import search from "../assets/search-gray.svg";
import styles from "./styles.module.scss";

export const Search: FC<ISeacrh> = ({
    placeholder,
    onChange,
    width,
    className,
}) => {
    const { user } = useAuth();

    const sick = user && user.disease.length;

    return (
        <div
            className={`${className} ${styles.search} ${sick && styles.sick}`}
            style={{ width }}
        >
            <Image src={search} alt="magnifying glass" width={16} height={16} />
            <input
                style={{ width: "100%" }}
                type="text"
                placeholder={placeholder}
                height="100%"
                onChange={onChange}
            />
        </div>
    );
};
