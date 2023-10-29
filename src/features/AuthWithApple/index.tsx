import { FC } from "react";

import { AuthWith } from "@/shared/ui/AuthWith";

import apple from "./assets/apple.svg";

export const AuthWithApple: FC = () => {
    return <AuthWith img={apple} text="Войти с помощью Apple" />;
};
