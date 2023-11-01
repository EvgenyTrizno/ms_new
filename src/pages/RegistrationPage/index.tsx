import { FC } from "react";

import { AuthContainer } from "@/shared/ui/AuthContainer";
import { Row } from "@/shared/ui/Row";
import { RegistrationForm } from "@/features/Registration";
import { RegistrationWithFacebook } from "@/features/RegistrationWithFacebook";
import { RegistrationWithApple } from "@/features/RegistrationWithApple";
import { RegistrationWithGoogle } from "@/features/RegistrationWithGoogle";

const RegistrationPage: FC = () => {
    return (
        <AuthContainer title="Регистрация">
            <RegistrationForm />
            <Row gap={16} style={{ justifyContent: "center" }}>
                <RegistrationWithGoogle />
                <RegistrationWithFacebook />
                <RegistrationWithApple />
            </Row>
        </AuthContainer>
    );
};

export default RegistrationPage;
