import { FC } from "react";

import { Layout } from "../Layout";
import { Input } from "@/shared/ui/Input";
import { useAuth } from "@/shared/model/store/auth";

export const Email: FC = () => {
    const { user } = useAuth();

    return (
        <Layout
            input={<Input type="text" />}
            verify={!!user?.email}
            text="Эл. почта"
        />
    );
};
