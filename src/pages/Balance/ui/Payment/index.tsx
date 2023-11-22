import { FC } from "react";

import { BlueBox } from "@/shared/ui/BlueBox";
import { Text } from "@/shared/ui/Text";
import { formatNumberToCurrensy } from "@/shared/lib/helpers/formatNumberToCurrensy";

export const Payment: FC = () => {
    return (
        <BlueBox
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Text type="h5" fz="16px">
                Бонусная выплата. Третий этап
            </Text>
            <Text type="h3" fz="24px" style={{ display: "flex" }}>
                +{formatNumberToCurrensy(25)}
            </Text>
        </BlueBox>
    );
};
