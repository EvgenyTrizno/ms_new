import { FC } from "react";
import { IUserGroupProps } from "./types";

import { Text } from "../Text";

export const UserGroup: FC<IUserGroupProps> = ({ group }) => {
    return (
        <Text type="p" fz="16px" color="#7D7F82">
            {group}
        </Text>
    );
};
