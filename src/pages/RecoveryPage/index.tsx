import { FC } from "react";

import { AuthContainer } from "@/shared/ui/AuthContainer";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { Recovery } from "@/features/ResetPassword";

const RecoveryPage: FC = () => {
    return (
        <AuthContainer title="Восстановление">
            <Rows gap={10} rows={["auto"]}>
                <Text type="h2" color="#262626" position="center" fz="16px">
                    Не удается выполнить вход
                </Text>
                <Text type="p" position="center" fz="14px" color="#262626">
                    Введите телефонный номер или электронную почту и мы отправим
                    вам код для восстановления доступа к аккаунту.
                </Text>
            </Rows>
            <Recovery />
        </AuthContainer>
    );
};

export default RecoveryPage;
