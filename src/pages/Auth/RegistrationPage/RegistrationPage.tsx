import { FC } from "react";

import { Registration } from "@/widgets";

import styles from "./RegistrationPage.module.scss";

const RegistrationPage: FC = () => {
    return (
        <div className={styles.registrationPage}>
            <Registration />
        </div>
    );
};

export default RegistrationPage;
