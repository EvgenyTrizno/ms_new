import { FC } from "react";
import { Text } from "@/shared/ui/Text";

import { INoteStatus } from "./types";
import { SMALL_LAPTOP } from "@/shared/utils";

export const NoteStatus: FC<INoteStatus> = ({ status }) => {
    return (
        <Text type="h5" fz={SMALL_LAPTOP ? "14px" : "16px"} color="#D64657">
            {status}
        </Text>
    );
};
