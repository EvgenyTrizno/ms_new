import { FC } from "react";

import { Text } from "@/shared/ui/Text";

export const DistanceText: FC = () => {
    return (
        <Text type="p" position="center" color="#262626">
            {navigator.geolocation
                ? "Также в 300 км от вас находятся наши агенты но перед этим вам необходимо указать свое состояние на данный момент"
                : "Для того чтобы зарегестрироваться, вам необходимо указать свое состояние на данный момент"}
        </Text>
    );
};
