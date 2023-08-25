import { FC } from "react";

import { Text } from "@/shared";
import { useUserCondition } from "@/shared/model/store";
import { TABLET } from "@/shared/utils";

import woman from "/assets/woman.jpg";
import post from "/assets/post.jpg";
import marks from "/assets/archive-add.svg";
import sender from "/assets/send.svg";
import heart from "/assets/heart.svg";
import styles from "./MobilePost.module.scss";

export const MobilePost: FC = () => {
    const { condition } = useUserCondition();

    return (
        <div className={styles.mobilePost}>
            <div className={styles.user}>
                <img src={woman} alt="" />
                <div className={styles.data}>
                    <Text
                        type="h2"
                        color="#262626"
                        fz={TABLET ? "17px" : "14px"}
                    >
                        Яковенко А. С.
                    </Text>
                    <Text type="p" color="#7D7F82">
                        Пользователь
                    </Text>
                </div>
            </div>
            <div className={styles.descr}>
                <Text
                    type="p"
                    fz={
                        window.matchMedia(
                            "(min-width: 576px) and (max-width: 768px)"
                        ).matches
                            ? "16px"
                            : "14px"
                    }
                >
                    Lorem Ipsum является текст-заполнитель обычно используется в
                    графических, печать и издательской индустрии для
                    предварительного просмотра макета
                </Text>
            </div>
            <div className={styles.images}>
                <img src={post} alt="" />
            </div>
            <div className={styles.managment}>
                <div className={styles.btns}>
                    <div className={styles.btn}>
                        <img src={marks} alt="" />
                    </div>
                    <div className={styles.btn}>
                        <img src={sender} alt="" />
                    </div>
                    <div className={styles.btn}>
                        <img src={heart} alt="" />
                    </div>
                </div>
                <div className={styles.more}>
                    <Text
                        type="h4"
                        color={`${
                            condition === "Болен" ? "#D64657" : "#0064FA"
                        }`}
                        fz={TABLET ? "15px" : "13px"}
                    >
                        Подробнее
                    </Text>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.92893 2.92893L15 10L7.92893 17.0711"
                            stroke={`${
                                condition === "Болен" ? "#D64657" : "#0064FA"
                            }`}
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};
