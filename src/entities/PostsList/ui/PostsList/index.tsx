import { FC } from "react";
import { IPostsListProps } from "./types";

import { Rows } from "@/shared/ui/Rows";

export const PostsList: FC<IPostsListProps> = ({ children }) => {
    return (
        <Rows gap={10} rows={["auto"]}>
            {children}
        </Rows>
    );
};
