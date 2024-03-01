import { FC } from "react";
import styles from "./styles.module.scss";
import { LikeIcon, SaveIcon, TelegramIcon } from "@/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  avatar: string;
  fio: string;
  rank: string;
  text: string;
  imgs: string[];
};

export const Post: FC<Props> = ({ id, avatar, fio, rank, text, imgs }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <img className={styles.userAvatar} src={avatar} alt="avatar" />
        <div className={styles.userContent}>
          <p>{fio}</p>
          <span>{rank}</span>
        </div>
      </div>

      <p className={styles.text}>{text}</p>

      <Swiper spaceBetween={10}>
        {imgs.map((el, idx) => (
          <SwiperSlide>
            <img className={styles.img} src={el} alt="post-img" key={idx} />
          </SwiperSlide>
        ))}
      </Swiper>

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
