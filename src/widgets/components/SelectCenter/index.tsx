import { FC } from "react";

import { Btn } from "@/shared/ui/Btn";
import { Text } from "@/shared/ui/Text";
import { AuthContainer } from "@/shared/ui/AuthContainer";
import { SelectCenterMap } from "./ui/SelectCenterMap";

export const SelectCenter: FC = () => {
    return (
        <AuthContainer title="Центр №3">
            <Text type="p" position="center" color="#262626">
                {navigator.geolocation
                    ? "Также в 300 км от вас находятся наши агенты но перед этим вам необходимо указать свое состояние на данный момент"
                    : "Для того чтобы зарегестрироваться, вам необходимо указать свое состояние на данный момент"}
            </Text>
            <SelectCenterMap />

            <Btn onClick={() => ({})} color="#0064FA">
                Продолжить
            </Btn>
        </AuthContainer>
    );
};
