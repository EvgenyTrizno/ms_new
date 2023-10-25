import { FC } from "react";
import { IUsernameProps } from "./types";

import { Text } from "../Text";

export const Username: FC<IUsernameProps> = ({ name }) => {
    return (
        <Text type="h2" fz="16px">
            {name}
        </Text>
    );
};
