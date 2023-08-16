import { FC } from "react";

import { Recovery, RecoveryForPersonal } from "@/widgets";

import styles from "./RecoveryPage.module.scss";

const RecoveryPage: FC = () => {
    return (
        <div className={styles.recoveryPage}>
            <RecoveryForPersonal />
        </div>
    );
};

export default RecoveryPage;
