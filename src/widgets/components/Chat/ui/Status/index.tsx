import { FC } from "react";
import { IStatusProps } from "./types";

import { Text } from "@/shared/ui/Text";

export const Status: FC<IStatusProps> = ({ status }) => {
    return (
        <Text type="p" fz="14px" color="#00CC5E">
            {status ? "Online" : "Offline"}
        </Text>
    );
};
