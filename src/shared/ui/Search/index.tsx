import { FC } from "react";
import { ISeacrh } from "./types";

import { Input } from "../Input";
import { Image } from "../Image";

import search from "./assets/search-gray.svg";
import styles from "./styles.module.scss";

export const Search: FC<ISeacrh> = ({ placeholder }) => {
    return (
        <div className={styles.search}>
            <Image src={search} alt="magnifying glass" width={16} height={16} />
            <Input
                type="text"
                placeholder={placeholder}
                height="100%"
                padding="0px"
                border="none"
                borderRadius="0px"
            />
        </div>
    );
};
