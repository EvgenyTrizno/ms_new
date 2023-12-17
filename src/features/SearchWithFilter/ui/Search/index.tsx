import { FC } from "react";

import { Input } from "@/shared/ui/Input";

import styles from "./styles.module.scss";
import { FilterBtn } from "@/shared/ui/FilterBtn";

export const SearchWithFilter: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Input
                type="text"
                className={styles.search}
                border="none"
                padding="0px"
                borderRadius="none"
            />
            <div className={styles.fbtn}>
                <FilterBtn type="small" onClick={() => ({})} />
            </div>
        </div>
    );
};
