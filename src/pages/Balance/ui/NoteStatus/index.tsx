import { FC } from "react";
import { Text } from "@/shared/ui/Text";

import { INoteStatus } from "./types";

export const NoteStatus: FC<INoteStatus> = ({ status }) => {
    return (
        <Text type="h5" fz="16px" color="#D64657">
            {status}
        </Text>
    );
};
