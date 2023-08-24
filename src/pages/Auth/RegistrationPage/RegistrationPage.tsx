import { FC } from "react";

import { RegistrationForPersonal } from "@/widgets";

import styles from "./RegistrationPage.module.scss";

const RegistrationPage: FC = () => {
    return (
        <div className={styles.registrationPage}>
            <RegistrationForPersonal />
        </div>
    );
};

export default RegistrationPage;
