import { FC } from "react";
import { IUserRankProps } from "./types";

import { Text } from "../Text";

export const UserRank: FC<IUserRankProps> = ({ rank }) => {
    return (
        <Text type="p" fz="14px" color="#7D7F82">
            {rank}
        </Text>
    );
};
