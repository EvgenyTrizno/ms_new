import { FC } from "react";
import { IColNameProps } from "./types";

import { Text } from "@/shared/ui/Text";

export const ColName: FC<IColNameProps> = ({ name }) => {
    return (
        <Text type="p" fz="14px" color="#7D7F82">
            {name}
        </Text>
    );
};
