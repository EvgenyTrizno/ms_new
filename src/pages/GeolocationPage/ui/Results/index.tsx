import { FC } from "react";

import styles from "./styles.module.scss";
import { ResultBlock } from "../ResultBlock";

export const Results: FC = () => {
    return (
        <div className={styles.results}>
            {[1, 2, 3, 4, 5].map((item) => (
                <ResultBlock key={item} />
            ))}
        </div>
    );
};
