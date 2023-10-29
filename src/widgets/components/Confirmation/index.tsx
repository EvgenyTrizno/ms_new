import { FC } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { Btn } from "@/shared/ui/Btn";
import { Text } from "@/shared/ui/Text";
import { AuthContainer } from "@/shared/ui/AuthContainer";
import { CodeInputs } from "./ui/CodeInputs";
import { Rows } from "@/shared/ui/Rows";
import { Timer } from "./ui/Timer";
import { Row } from "@/shared/ui/Row";

import styles from "./styles.module.scss";

export const Confirmation: FC = () => {
    const [searchParams] = useSearchParams();

    const redirect = searchParams.get("redirect");

    return (
        <AuthContainer title="Завершение">
            <Text type="p" fz="14px" position="center" color="#262626">
                Введите код, который был отправлен вам на номер
                <br />
                +7-900-100-10-10. Никому не сообщайте код.
            </Text>
            <Rows gap={16} rows={["auto"]}>
                <CodeInputs />
                <Timer />
            </Rows>
            <Btn color="#0064FA" disabled={true}>
                {redirect === "registration"
                    ? "Зарегестрироваться"
                    : "Продолжить"}
            </Btn>
            <Row gap={0} style={{ justifyContent: "center" }}>
                <Text type="p" fz="14px" color="#7D7F82">
                    Уже имеется аккаунт?
                </Text>
                &nbsp;
                <Link to="/auth/login" className={styles.link}>
                    Войти
                </Link>
            </Row>
        </AuthContainer>
    );
};
