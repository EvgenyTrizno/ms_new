import { FC } from "react";

import styles from "./VirusListPage.module.scss";
import { VirusList } from "../../../widgets";

export const VirusListPage: FC = () => {
    return (
        <div className={styles.container}>
            <VirusList />
        </div>
    );
};
