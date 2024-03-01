import { FC } from "react";
import { Post } from "@/entities";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

export const Posts: FC<PropsWithClassName> = ({ className }) => {
  // const { data } = usePostsQuery();
  // const navigate = useNavigate();

  return (
    <div className={cn(styles.wrapper, className)}>
      <Post
        key={1}
        id={1}
        avatar="/assets/avatar.png"
        fio="Петров Петр Петрович"
        rank="Пользователь"
        text="Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета"
        imgs={["/assets/clinic-post.jpg", "/assets/clinic-post.jpg"]}
      />
    </div>
  );
};
