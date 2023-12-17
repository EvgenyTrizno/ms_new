import { FC } from "react";

import { Rows } from "@/shared/ui/Rows";

import { IChatLayoutProps } from "./types";

export const ChatLayout: FC<IChatLayoutProps> = ({ children }) => {
    return (
        <Rows gap={0} rows={["auto"]}>
            {children}
        </Rows>
    );
};
