import { FC } from "react";

import { Rows } from "@/shared/ui/Rows";
import { IChatListProps } from "./types";

export const ChatList: FC<IChatListProps> = ({ children }) => {
    return (
        <Rows gap={0} rows={["auto"]}>
            {children}
        </Rows>
    );
};
