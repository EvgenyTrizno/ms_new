import { FC } from "react";

import { Registration } from "../../../widgets/components/Auth/Registration/Registration";

import styles from "./RegistrationPage.module.scss";

export const RegistrationPage: FC = () => {
    return (
        <div className={styles.registrationPage}>
            <Registration />
        </div>
    );
};
