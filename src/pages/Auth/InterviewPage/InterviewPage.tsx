import { FC } from "react";

import { Interview } from "@/widgets";

import styles from "./InterviewPage.module.scss";

export const InterviewPage: FC = () => {
    return (
        <div className={styles.interview}>
            <Interview />
        </div>
    );
};
