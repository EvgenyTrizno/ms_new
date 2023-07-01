import { FC } from "react";

import { Text } from "@/shared";

import avatar from "/assets/woman.jpg";
import post from "/assets/post.jpg";
import heart from "/assets/heart.svg";
import send from "/assets/send.svg";
import archive from "/assets/archive-add.svg";
import arrowRight from "/assets/arrow-right-blue.svg";
import styles from "./Post.module.scss";

export const Post: FC = () => {
    return (
        <div className={styles.post}>
            <div className={styles.user}>
                <img src={avatar} alt="" />
                <div className={styles.data}>
                    <Text type="h2" color="#262626" fz="24px">
                        Яковенко А. С.
                    </Text>
                    <Text type="p" color="#00000080">
                        Пользователь
                    </Text>
                </div>
            </div>
            <div className={styles.descr}>
                <Text type="p" fz="18px" color="#3C3D3E">
                    Lorem Ipsum является текст-заполнитель обычно используется в
                    графических, печать и издательской индустрии для
                    предварительного просмотра макета
                </Text>
            </div>
            <div className={styles.img}>
                <img src={post} alt="" />
            </div>
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
                <div className={styles.more}>
                    Подробнее
                    <img src={arrowRight} alt="" />
                </div>
            </div>
        </div>
    );
};
