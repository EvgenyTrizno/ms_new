import { FC } from "react";

import { PostsList } from "@/entities/PostsList";
import { UserPost } from "@/widgets/components/UserPost";

export const Posts: FC = () => {
    return (
        <PostsList>
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <UserPost key={item} />
            ))}
        </PostsList>
    );
};
