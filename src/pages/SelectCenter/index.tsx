import { FC } from "react";

import { SelectCenterMap } from "@/widgets/components/SelectCenter/ui/SelectCenterMap";
import { AuthContainer } from "@/shared/ui/AuthContainer";
import { Text } from "@/shared/ui/Text";
import { Btn } from "@/shared/ui/Btn";
import { SetCondition } from "@/widgets/components/SelectCenter/ui/SetCondition";

const SelectCenterPage: FC = () => {
    return (
        <AuthContainer title="Центр №3">
            <Text type="p" position="center" color="#262626">
                {navigator.geolocation
                    ? "Также в 300 км от вас находятся наши агенты но перед этим вам необходимо указать свое состояние на данный момент"
                    : "Для того чтобы зарегестрироваться, вам необходимо указать свое состояние на данный момент"}
            </Text>
            <SelectCenterMap />
            <SetCondition />
            <Btn onClick={() => ({})} color="#0064FA">
                Продолжить
            </Btn>
        </AuthContainer>
    );
};

export default SelectCenterPage;
