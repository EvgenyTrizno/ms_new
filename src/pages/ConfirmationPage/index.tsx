import { FC } from "react";
import { Link } from "react-router-dom";

import { Text } from "@/shared/ui/Text";
import { AuthContainer } from "@/shared/ui/AuthContainer";
import { RegistrationConfirmation } from "@/widgets/components/RegistrationConfirmation";
import { Row } from "@/shared/ui/Row";
import { ConfirmationTextWithNumber } from "@/widgets/components/RegistrationConfirmation/ui/ConfirmationTextWithNumber";

const ConfirmationPage: FC = () => {
    return (
        <AuthContainer title="Завершение">
            <ConfirmationTextWithNumber number="+7-900-100-10-10" />
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
