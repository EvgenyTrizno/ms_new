import { FC } from "react";
import { IChatContainerProps } from "./types";

import { Cols } from "@/shared/ui/Cols";

export const ChatContainer: FC<IChatContainerProps> = ({ children }) => {
    return (
        <Cols
            type="custom"
            gap={0}
            cols={["480px", "1fr"]}
            style={{
                position: "fixed",
                top: "65px",
                right: 0,
                width: "calc(100% - 256px)",
                height: "100%",
            }}
        >
            {children}
        </Cols>
    );
};
