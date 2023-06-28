import { FC } from "react";

import { VirusList } from "@/widgets";

import styles from "./VirusListPage.module.scss";

export const VirusListPage: FC = () => {
    return (
        <div className={styles.container}>
            <VirusList />
        </div>
    );
};
