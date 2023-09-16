import { FC } from "react";

import { RecoveryForPersonal, Recovery } from "@/widgets";

import styles from "./RecoveryPage.module.scss";

const RecoveryPage: FC = () => {
    return (
        <div className={styles.recoveryPage}>
            <Recovery />
        </div>
    );
};

export default RecoveryPage;
