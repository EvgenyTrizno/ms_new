
import { FC } from "react";

import { AuthContainer } from "@/shared/ui/AuthContainer";
import { ClinicRegistrationForm } from "@/features/RegistrationClinic";
import { useClinicRegistration } from "@/shared/model/store/clinicRegistration";
import { ClinicActivity } from "@/features/ClinicActivity";


import styles from "./styles.module.scss"
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Text } from "@/shared/ui/Text";

const RegistrationClinicPage: FC = () => {
    const { workdays, worktime } = useClinicRegistration();
    return (
        <>
            {(workdays && worktime) && (
                <AuthContainer title="Регистрация клиники" >
                    <ClinicRegistrationForm />
                </AuthContainer>)}
            <div className={styles.container}>
                <WhiteContentBlock>
                    <ClinicActivity />
                </WhiteContentBlock>
            </div>
        </>

    );
};

export default RegistrationClinicPage;
