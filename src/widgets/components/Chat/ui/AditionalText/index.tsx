import { FC } from "react";

import { Text } from "@/shared/ui/Text";
import { IAditionalText } from "./types";

export const AditionalText: FC<IAditionalText> = ({ text }) => {
    return (
        <Text type="p" fz="14px" position="center" color="#0064FA">
            {text}
        </Text>
    );
};
