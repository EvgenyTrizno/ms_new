import { FC, useState, ChangeEvent } from "react";

import { Btn } from "@/shared/ui/Btn";
import { Input } from "@/shared/ui/Input";
import { Text } from "@/shared/ui/Text";
import { AuthContainer } from "@/shared/ui/AuthContainer";

export const Recovery: FC = () => {
    const [isSelect, setIsSelect] = useState<TypeOfSelectedMethod>("tel");

    return (
        <AuthContainer title="Восстановление">
            <Text type="h2" color="#262626" position="center" fz="16px">
                Не удается выполнить вход
            </Text>
            <Text type="p" position="center" fz="14px" color="#262626">
                Введите телефонный номер или электронную почту и мы отправим вам
                код для восстановления доступа к аккаунту.
            </Text>
        </AuthContainer>
    );
};
