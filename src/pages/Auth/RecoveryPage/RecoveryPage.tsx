import { FC } from "react";

import { Recovery } from "@/widgets";

import styles from "./RecoveryPage.module.scss";

export const RecoveryPage: FC = () => {
    return (
        <div className={styles.recoveryPage}>
            <Recovery />
        </div>
    );
};
