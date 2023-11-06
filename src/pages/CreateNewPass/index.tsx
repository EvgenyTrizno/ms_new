import { FC } from "react";

import { AuthContainer } from "@/shared/ui/AuthContainer";
import { ChangePassword } from "@/features/CreateNewPassword";

const CreateNewPass: FC = () => {
    return (
        <AuthContainer title="Создайте новый пароль">
            <ChangePassword />
        </AuthContainer>
    );
};

export default CreateNewPass;
