import { FC } from "react";

import { Row } from "@/shared/ui/Row";
import { AuthContainer } from "@/shared/ui/AuthContainer";
import { RegistrationForm } from "./ui/RegistrationForm";
import { RegistrationWithGoogle } from "@/features/RegistrationWithGoogle";
import { RegistrationWithFacebook } from "@/features/RegistrationWithFacebook";
import { RegistrationWithApple } from "@/features/RegistrationWithApple";

export const Registration: FC = () => {
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
{
    /* {isOpenModal && (
    <Modal setIsOpenModal={setIsOpenModal}>
        <Text type="h2" position="center" fz="24px">
            Предупреждение
        </Text>
        <div className={styles.warning}>
            <Text type="p" position="center" fz="14px">
                Лица не достигшие 18 лет , могут находится на сайте
                только с позволения родителей
            </Text>
        </div>
        <Btn color="#0064FA">Продолжить</Btn>
    </Modal>
)} */
}
