import { FC } from "react";

import { AuthWith } from "@/shared/ui/AuthWith";

import facebook from "./assets/facebook.svg";

export const AuthWithFacebook: FC = () => {
    return <AuthWith img={facebook} text="Войти с помощью Facebook" />;
};
