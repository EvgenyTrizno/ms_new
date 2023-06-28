import { FC } from "react";

import { Confirmation } from "@/widgets";

import styles from "./Confirmation.module.scss";

export const ConfirmationPage: FC = () => {
    return (
        <div className={styles.container}>
            <Confirmation />
        </div>
    );
};
