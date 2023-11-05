import { FC } from "react";
import { Link } from "react-router-dom";

import { Text } from "@/shared/ui/Text";
import { AuthContainer } from "@/shared/ui/AuthContainer";
import { RegistrationConfirmation } from "@/features/RegistrationConfirmation/ui/Confirmation";
import { Row } from "@/shared/ui/Row";

const ConfirmationPage: FC = () => {
    return (
        <AuthContainer title="Завершение">
            <RegistrationConfirmation />
            <Row gap={0} style={{ justifyContent: "center" }}>
                <Text type="p" fz="14px" color="#7D7F82">
                    Уже имеется аккаунт?
                </Text>
                &nbsp;
                <Link
                    to="/login"
                    style={{ color: "#0064FA", fontSize: 14, fontWeight: 500 }}
                >
                    Войти
                </Link>
            </Row>
        </AuthContainer>
    );
};

export default ConfirmationPage;
