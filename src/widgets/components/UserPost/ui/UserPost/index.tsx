import { FC } from "react";

import { InfoText } from "@/shared/ui/InfoText";
import { Repost } from "@/features/Repost/ui";
import { Like } from "@/features/Like/ui";
import { AddToArchive } from "@/features/AddToArchive/ui";
import { PostLayout } from "@/entities/Post/ui";

import "swiper/css/pagination";
import { IUserPost } from "./types";

export const UserPost: FC<IUserPost> = ({
    text,
    img,
    avatar,
    name,
    creator,
    onClick,
}) => {
    return (
        <PostLayout
            text={text}
            img={img}
            name={name}
            avatar={avatar}
            creator={creator}
            onClick={onClick}
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
