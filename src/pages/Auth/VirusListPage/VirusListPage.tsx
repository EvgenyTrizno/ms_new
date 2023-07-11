import { FC } from "react";

import { VirusList } from "@/widgets";

import styles from "./VirusListPage.module.scss";

const VirusListPage: FC = () => {
    return (
        <div className={styles.container}>
            <VirusList />
        </div>
    );
};

export default VirusListPage;
