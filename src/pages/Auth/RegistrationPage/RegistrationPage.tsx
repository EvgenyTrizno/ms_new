import { FC } from "react";

import { Registration, RegistrationForPersonal } from "@/widgets";

import styles from "./RegistrationPage.module.scss";

const RegistrationPage: FC = () => {
    return (
        <div className={styles.registrationPage}>
            {/* <RegistrationForPersonal /> */}
            <Registration />
        </div>
    );
};

export default RegistrationPage;
