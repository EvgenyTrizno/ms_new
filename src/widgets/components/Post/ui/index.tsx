import { FC } from "react";

import { InfoText } from "@/shared/ui/InfoText";
import { Repost } from "@/features/Repost/ui";
import { Like } from "@/features/Like/ui";
import { AddToArchive } from "@/features/AddToArchive/ui";

import "swiper/css/pagination";
import { PostLayout } from "@/entities/Post/ui";

export const Post: FC = () => {
    return (
        <PostLayout
            actionsGUI={
                <>
                    <Like />
                    <Repost />
                    <AddToArchive />
                </>
            }
            postInfo={<InfoText text="Подробнее" />}
        />
    );
};
