import { FC } from "react";

import { RequestBlock } from "@/widgets";

import styles from "./styles.module.scss";

export const List: FC = () => {
    return (
        <div className={styles.list}>
            {[1, 2, 3, 4].map((item) => (
                <RequestBlock key={item} />
            ))}
        </div>
    );
};
