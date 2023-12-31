import { FC, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { IPostLayoutProps } from "../types";
import { PaginationOptions } from "swiper/types";

import { Text } from "@/shared/ui/Text";
import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";
import { Avatar } from "@/shared/ui/Avatar";
import { Username } from "@/entities/User/ui/Username";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { UserGroup } from "@/entities/User/ui/UserGroup";
import { useAuth } from "@/shared/model/store/auth";
import { MOBILE, SMALL_LAPTOP } from "@/shared/utils";

import styles from "./styles.module.scss";
import "swiper/css/pagination";
import { Image } from "@/shared/ui/Image";

export const PostLayout: FC<IPostLayoutProps> = ({
    actionsGUI,
    postInfo,
    text,
    img,
    name,
    avatar,
    creator,
    onClick,
}) => {
    const [paginationKey, setPaginationKey] = useState<number>(0);
    const { user } = useAuth();

    const sick = user && user.disease.length;
    const pagination: PaginationOptions = {
        clickable: true,
        bulletClass: styles.pagination,
        bulletActiveClass: sick ? styles.paginationRed : styles.paginationBlue,
        renderBullet: (_, className: string) => {
            return `<span class="${`${className}`}"></span>`;
        },
    };

    useEffect(() => {
        if (sick) {
            setPaginationKey(1);
        } else {
            setPaginationKey(0);
        }
    }, [sick]);

    return (
        <WhiteContentBlock className={`${styles.post} ${sick && styles.sick}`}>
            <Row gap={10}>
                <Avatar
                    type={MOBILE ? "custom" : "user"}
                    img={avatar}
                    size={MOBILE ? 42 : "M"}
                    onClick={onClick}
                />
                <Rows gap={5} rows={["auto", "auto"]}>
                    <Username name={name} fz={SMALL_LAPTOP ? "16px" : "18px"} />
                    <UserGroup
                        group={creator}
                        fz={SMALL_LAPTOP ? "12px" : "14px"}
                    />
                </Rows>
            </Row>
            <div className={styles.descr}>
                <Text type="p" color="#3C3D3E">
                    {text}
                </Text>
            </div>
            <div className={styles.images}>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className={styles.slider}
                    key={paginationKey}
                >
                    {img &&
                        img.map((item) => (
                            <SwiperSlide>
                                <Image key={item} src={item} alt="" />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            <Row gap={0} style={{ justifyContent: "space-between" }}>
                <Row gap={MOBILE ? 6 : 15}>{actionsGUI}</Row>
                {postInfo}
            </Row>
        </WhiteContentBlock>
    );
};
