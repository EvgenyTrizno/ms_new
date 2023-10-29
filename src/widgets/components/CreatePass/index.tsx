import { FC } from "react";

import { Btn } from "@/shared/ui/Btn";
import { AuthContainer } from "@/shared/ui/AuthContainer";
import { CreatePassForm } from "./ui/CreatePasswordForm";

export const CreatePass: FC = () => {
    return (
        <AuthContainer title="Создайте новый пароль">
            <CreatePassForm />
            <Btn color="#0064FA" type="submit">
                Изменить пароль
            </Btn>
        </AuthContainer>
    );
};
