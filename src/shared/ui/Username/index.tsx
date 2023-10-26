import { FC } from "react";
import { IUsernameProps } from "./types";

import { Text } from "../Text";

export const Username: FC<IUsernameProps> = ({ name, fz }) => {
    return (
        <Text type="h2" fz={fz ?? "14px"}>
            {name}
        </Text>
    );
};
