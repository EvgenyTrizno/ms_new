import { FC } from "react";

import { Confirmation } from "@/widgets";

import styles from "./Confirmation.module.scss";

const ConfirmationPage: FC = () => {
    return (
        <div className={styles.container}>
            <Confirmation />
        </div>
    );
};

export default ConfirmationPage;
