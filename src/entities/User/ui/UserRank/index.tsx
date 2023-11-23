import { FC } from "react";
import { IUserRankProps } from "./types";

import { Text } from "../../../../shared/ui/Text";

export const UserRank: FC<IUserRankProps> = ({
    rank,
    position,
    fz = "14px",
}) => {
    return (
        <Text type="p" fz={fz} color="#3C3D3E" position={position}>
            {rank}
        </Text>
    );
};
