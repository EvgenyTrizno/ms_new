
import { FC } from "react";

import { AuthContainer } from "@/shared/ui/AuthContainer";
import { ClinicRegistrationForm } from "@/features/RegistrationClinic";
import { useClinicRegistration } from "@/shared/model/store/clinicRegistration";
import { ClinicActivity } from "@/features/ClinicActivity";



const RegistrationClinicPage: FC = () => {
    const { workdays, worktime } = useClinicRegistration();
    return (
        <AuthContainer title={(workdays && worktime) ? "Регистрация клиники" : "Укажите активность своей клиники"} >
            {(workdays && worktime) ? <ClinicRegistrationForm /> : <ClinicActivity />}
        </AuthContainer >
    );
};

export default RegistrationClinicPage;
