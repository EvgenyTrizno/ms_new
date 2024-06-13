
import { FC, useEffect, useState } from "react";

import { AuthContainer } from "@/shared/ui/AuthContainer";
import { ClinicRegistrationForm } from "@/features/RegistrationClinic";
import { useClinicRegistration } from "@/shared/model/store/clinicRegistration";
import { ClinicActivity } from "@/features/ClinicActivity";


import styles from "./styles.module.scss"
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Text } from "@/shared/ui/Text";

const RegistrationClinicPage: FC = () => {
    const { workdays, worktime, setWorkdays, setWorktime } = useClinicRegistration();
    const [form, setForm] = useState<boolean>(false);

    useEffect(() => {
        console.log(workdays)
        setWorkdays([])
    }, [])
    return (
        <>
            {form && (
                <AuthContainer title="Регистрация клиники" >
                    <ClinicRegistrationForm />
                </AuthContainer>)}
            <div className={styles.container}>
                <WhiteContentBlock>
                    <ClinicActivity setForm={setForm} />
                </WhiteContentBlock>
            </div>
        </>

    );
};

export default RegistrationClinicPage;
