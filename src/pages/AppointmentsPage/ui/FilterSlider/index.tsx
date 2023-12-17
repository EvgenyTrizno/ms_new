import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IFilterSlider } from "./types";

import { useAuth } from "@/shared/model/store/auth";

import styles from "./styles.module.scss";

export const SliderFilter: FC<IFilterSlider> = ({
    data,
    isSelect,
    setIsSelect,
}) => {
    const { user } = useAuth();

    const active = `${styles.item} ${styles.active}`;
    const activeRed = `${styles.item} ${styles.activeRed}`;

    const sick = user && user.disease.length;

    return (
        <Swiper
            className={styles.container}
            style={{ borderColor: sick ? "#F7E6E8" : "", overflow: "unset" }}
            slidesPerView={2.5}
        >
            {data.map((item, i) => (
                <SwiperSlide>
                    <div
                        className={`${
                            isSelect === item && sick
                                ? activeRed
                                : isSelect === item && !sick
                                ? active
                                : styles.item
                        }`}
                        key={i}
                        onClick={() => {
                            setIsSelect(item);
                        }}
                    >
                        {item}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
