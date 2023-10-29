import { FC } from "react";
import { Link } from "react-router-dom";

import { Text } from "@/shared/ui/Text";
import { Input } from "@/shared/ui/Input";
import { Btn } from "@/shared/ui/Btn";
import { AuthContainer } from "@/shared/ui/AuthContainer";
import { Rows } from "@/shared/ui/Rows";
import { PasswordInputField } from "../PasswordInputField/ui";
import { Row } from "@/shared/ui/Row";
import { Line } from "@/shared/ui/Line";

import styles from "./styles.module.scss";
import { AuthWithGoogle } from "@/features/AuthWithGoogle";
import { AuthWithFacebook } from "@/features/AuthWithFacebook";
import { AuthWithApple } from "@/features/AuthWithApple";

export const Login: FC = () => {
    return (
        <AuthContainer title="Вход">
            <Rows gap={10} rows={["auto"]}>
                <Input type="text" placeholder="Введите номер или почту" />
                <Rows gap={5} rows={["auto"]}>
                    <PasswordInputField />
                    <Link className={styles.link} to="/">
                        Забыли пароль?
                    </Link>
                </Rows>
            </Rows>
            <Btn color="#0064FA" padding="16px" disabled={true}>
                Войти
            </Btn>
            <Row gap={0} style={{ margin: "0 auto" }}>
                <Text type="p" position="center" color="#7D7F82" fz="14px">
                    Нет учетной записи?
                </Text>
                &nbsp;
                <Link
                    to="/auth/registration"
                    style={{ color: "#0064FA", fontSize: 14 }}
                    className={styles.link}
                >
                    Зарегистрироваться
                </Link>
            </Row>
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
