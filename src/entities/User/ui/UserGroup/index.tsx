import { FC } from "react";
import { IUserGroupProps } from "./types";

import { Text } from "../../../../shared/ui/Text";

export const UserGroup: FC<IUserGroupProps> = ({ group, fz }) => {
    return (
        <Text type="p" fz={fz ?? "16px"} color="#7D7F82">
            {group}
        </Text>
    );
};
