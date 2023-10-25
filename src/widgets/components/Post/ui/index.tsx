import { FC, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { PaginationOptions } from "swiper/types";

import { getFullUsernameWithInitials } from "@/entities/User/lib/helpers/getFullUsernameWithInitials";
import { Text } from "@/shared/ui/Text";
import { InfoText } from "@/shared/ui/InfoText";
import { Repost } from "@/features/Repost/ui";
import { Like } from "@/features/Like/ui";
import { AddToArchive } from "@/features/AddToArchive/ui";
import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";
import { Avatar } from "@/shared/ui/Avatar";
import { Username } from "@/shared/ui/Username";
import { useUserCondition } from "@/shared/model/store"; // убрать

import post from "/assets/post.jpg";
import styles from "./styles.module.scss";

import "swiper/css/pagination";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";

export const PostLayout: FC = () => {
    const [paginationKey, setPaginationKey] = useState<number>(0);
    const { condition } = useUserCondition();

    const sick = condition === "Болен";
    const pagination: PaginationOptions = {
        clickable: true,
        bulletClass: styles.pagination,
        bulletActiveClass: sick ? styles.paginationRed : styles.paginationBlue,
        renderBullet: (_, className: string) => {
            return `<span class="${`${className}`}"></span>`;
        },
    };

    useEffect(() => {
        if (condition === "Болен") {
            setPaginationKey(1);
        } else {
            setPaginationKey(0);
        }
    }, [condition]);

    return (
        <WhiteContentBlock className="post">
            <Row gap={20}>
                <Avatar type="user" />
                <Rows gap={10} rows={["auto", "auto"]}>
                    <Username
                        name={getFullUsernameWithInitials(
                            "Яковенко",
                            "Александра",
                            "Сергеевна"
                        )}
                    />
                </Rows>
            </Row>
            <div className={styles.descr}>
                <Text type="p" fz="14px" color="#3C3D3E">
                    Lorem Ipsum является текст-заполнитель обычно используется в
                    графических, печать и издательской индустрии для
                    предварительного просмотра макета
                </Text>
            </div>
            <div className={styles.images}>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className={styles.slider}
                    key={paginationKey}
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
            </div>
            <Row gap={0} style={{ justifyContent: "space-between" }}>
                <Row gap={15}>
                    <Like />
                    <Repost />
                    <AddToArchive />
                </Row>
                <InfoText text="Подробнее" />
            </Row>
        </WhiteContentBlock>
    );
};
