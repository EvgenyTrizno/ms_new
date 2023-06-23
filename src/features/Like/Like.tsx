import { FC } from "react";

import like from "/assets/like.svg";
import styles from "./Like.module.scss";

export const Like: FC = () => {
    return (
        <div className={styles.like} onClick={() => console.log("like")}>
            <img src={like} alt="" />
        </div>
    );
};
