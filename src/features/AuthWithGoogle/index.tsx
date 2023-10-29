import { FC } from "react";

import { AuthWith } from "@/shared/ui/AuthWith";

import google from "./assets/google.svg";

export const AuthWithGoogle: FC = () => {
    return <AuthWith img={google} text="Войти с помощью Google" />;
};
