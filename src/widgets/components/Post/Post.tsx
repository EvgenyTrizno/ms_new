import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { Text } from "@/shared";
import { useUserCondition } from "@/shared/model/store";

import avatar from "/assets/woman.jpg";
import post from "/assets/post.jpg";
import heart from "/assets/heart.svg";
import send from "/assets/send.svg";
import archive from "/assets/archive-add.svg";
import arrowRight from "/assets/arrow-right-blue.svg";
import arrowRightRed from "/assets/arrow-right-red.svg";
import styles from "./Post.module.scss";
import "swiper/css/pagination";

export const Post: FC = () => {
    const { condition } = useUserCondition();

    const sick = condition === "Болен";
    const pagination = {
        clickable: true,
        renderBullet: () => {
            return `<span class="${`${styles.pagination} ${styles.paginationRed}`}"></span>`;
        },
    };

    console.log();

    return (
        <div className={styles.post}>
            <div className={styles.user}>
                <img src={avatar} alt="" />
                <div className={styles.data}>
                    <Text type="h2" color="#262626" fz="18px">
                        Яковенко А. С.
                    </Text>
                    <Text type="p" fz="14px" color="#00000080">
                        Пользователь
                    </Text>
                </div>
            </div>
            <div className={styles.descr}>
                <Text type="p" fz="14px" color="#3C3D3E">
                    Lorem Ipsum является текст-заполнитель обычно используется в
                    графических, печать и издательской индустрии для
                    предварительного просмотра макета
                </Text>
            </div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className={styles.slider}
            >
                <SwiperSlide>
                    <img src={post} alt="" className={styles.img} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={post} alt="" className={styles.img} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={post} alt="" className={styles.img} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={post} alt="" className={styles.img} />
                </SwiperSlide>
            </Swiper>
            <div className={styles.managment}>
                <div className={styles.btns}>
                    <div className={styles.btn}>
                        <img src={heart} alt="" />
                    </div>
                    <div className={styles.btn}>
                        <img src={send} alt="" />
                    </div>
                    <div className={styles.btn}>
                        <img src={archive} alt="" />
                    </div>
                </div>
                <div
                    className={
                        sick ? `${styles.more} ${styles.moreRed}` : styles.more
                    }
                >
                    Подробнее
                    <img src={sick ? arrowRightRed : arrowRight} alt="" />
                </div>
            </div>
        </div>
    );
};
