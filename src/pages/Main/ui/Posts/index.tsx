import { FC } from "react";
import { Post } from "@/entities";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";
import { usePostsQuery } from "../../lib/hooks/usePostsQuery";

export const Posts: FC<PropsWithClassName> = ({ className }) => {
  const { data } = usePostsQuery();
  // const navigate = useNavigate();

  return (
    <div className={cn(styles.wrapper, className)}>
      {data?.data.map((el) => {
        const images = el.news_images.map((imgItem) => imgItem.image);
        const videos = el.news_videos.map((videoItem) => videoItem.video);

        return (
          <Post
            key={el.id}
            id={el.id}
            title={el.title || undefined}
            text={el.text || undefined}
            imgs={images}
            videos={videos}
          />
        );
      })}
    </div>
  );
};
