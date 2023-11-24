import { FC } from "react";
import { IColNameProps } from "./types";

import { Text } from "@/shared/ui/Text";
import { SMALL_LAPTOP } from "@/shared/utils";

export const ColName: FC<IColNameProps> = ({ name }) => {
    return (
        <Text type="p" fz={SMALL_LAPTOP ? "13px" : "14px"} color="#7D7F82">
            {name}
        </Text>
    );
};
