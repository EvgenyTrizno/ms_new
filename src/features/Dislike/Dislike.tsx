import { FC } from "react";

import dislike from "/assets/dislike.svg";
import styles from "./Dislike.module.scss";

export const Dislike: FC = () => {
    return (
        <div className={styles.dislike} onClick={() => console.log("dislike")}>
            <img src={dislike} alt="" />
        </div>
    );
};
