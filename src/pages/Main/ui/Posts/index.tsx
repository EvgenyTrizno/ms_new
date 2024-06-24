import { FC, useEffect } from "react";
import { Post } from "@/entities";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";
import { usePostsQuery } from "../../lib/hooks/usePostsQuery";
import { useNewsQuery, useSavedQuery } from "@/shared/lib/hooks";
import { useLikesQuery } from "@/shared/lib/hooks/useLikesQuery";
import { useAuth } from "@/shared/model/store/auth";

export const Posts: FC<PropsWithClassName> = ({ className }) => {
    const { data } = useNewsQuery();
    const { isAuth } = useAuth();
    const { data: saves } = useSavedQuery();
    const { data: likes } = useLikesQuery();



    return (
        <div className={cn(styles.wrapper, className)}>
            {data?.data.map((el) => {
                const images = el.news_images.map((imgItem) => imgItem.image);
                const videos = el.news_videos.map((videoItem) => videoItem.video);
                const save = saves?.data.find((save) => save.news === el.id);
                const like = likes?.data.find((like) => like.news === el.id);

                return (
                    <Post
                        key={el.id}
                        id={el.id}
                        title={el.title || undefined}
                        text={el.text || undefined}
                        imgs={images}
                        videos={videos}
                        isSave={Boolean(save)}
                        isLike={Boolean(like)}
                        saveId={save?.id}
                        likeId={like?.id}
                    />
                );
            })}
        </div>
    );
};
