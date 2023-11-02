import { FC } from "react";

import { AuthContainer } from "@/shared/ui/AuthContainer";
import { UserLogin } from "@/features/UserLogin";
import { Row } from "@/shared/ui/Row";
import { Text } from "@/shared/ui/Text";
import { AuthWithApple } from "@/features/AuthWithApple";
import { AuthWithGoogle } from "@/features/AuthWithGoogle";
import { AuthWithFacebook } from "@/features/AuthWithFacebook";
import { Line } from "@/shared/ui/Line";
import { Rows } from "@/shared/ui/Rows";

const LoginPage: FC = () => {
    return (
        <AuthContainer title="Вход">
            <UserLogin />
            <Row gap={20}>
                <Line color="#D6E7FF" />
                <Text type="p" fz="14px" color="#D6E7FF">
                    Или
                </Text>
                <Line color="#D6E7FF" />
            </Row>
            <Rows gap={16} rows={["auto"]}>
                <AuthWithGoogle />
                <AuthWithFacebook />
                <AuthWithApple />
            </Rows>
        </AuthContainer>
    );
};

export default LoginPage;
