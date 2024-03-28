import { FC } from "react";
import styles from "./styles.module.scss";
import { LikeIcon, SaveIcon, TelegramIcon } from "@/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";

type Props = {
  id: number;
  avatar?: string;
  title?: string;
  rank?: string;
  text?: string;
  imgs: string[];
  videos: string[];
};

export const Post: FC<Props> = ({
  id,
  avatar,
  title,
  rank,
  text,
  imgs,
  videos,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        {avatar && (
          <img className={styles.userAvatar} src={avatar} alt="avatar" />
        )}
        <div className={styles.userContent}>
          {title && <p>{title}</p>}
          {rank && <p>{title}</p>}
        </div>
      </div>

      <p className={styles.text}>{text}</p>

      {imgs.length && (
        <Swiper
          spaceBetween={10}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {imgs.map((el, idx) => (
            <SwiperSlide>
              <img className={styles.img} src={el} alt="post-img" key={idx} />
            </SwiperSlide>
          ))}

          {videos.map((el, idx) => (
            <SwiperSlide>
              <video className={styles.img} src={el} key={idx} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className={styles.footer}>
        <div className={styles.btns}>
          <div className={styles.btn}>
            <SaveIcon />
          </div>
          <div className={styles.btn}>
            <TelegramIcon />
          </div>
          <div className={styles.btn}>
            <LikeIcon />
          </div>
        </div>

        <Link className={styles.moreDetailsLink} to={`/posts/${id}`}>
          <span>Подробнее</span>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.92893 2.92893L15 10L7.92893 17.0711"
              stroke="#0064FA"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
