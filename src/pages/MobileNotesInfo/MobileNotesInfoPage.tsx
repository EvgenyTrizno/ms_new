import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
    Circle,
    CustomMobileHeader,
    MobileCard,
    MobileComment,
    MobileContainer,
} from "@/widgets";
import { BackArrow, MobileFilter, MobileSearch, Text } from "@/shared";

import photo from "/assets/center-icon.jpg";
import styles from "./MobileNotesInfoPage.module.scss";

const MobileNotesInfoPage: FC = () => {
    return (
        <div className={styles.info}>
            <CustomMobileHeader>
                <div className={styles.header}>
                    <BackArrow />
                    <Text type="h2" fz="19px">
                        Создать запись
                    </Text>
                </div>
            </CustomMobileHeader>
            <MobileContainer>
                <div className={styles.container}>
                    <MobileSearch filterBtn placeholder="Введите запрос" />
                    <div className={styles.info}>
                        <div className={styles.top}>
                            <img src={photo} alt="" />
                            <div className={styles.data}>
                                <Text type="h3" fz="17px">
                                    Центр Неврологии
                                </Text>
                                <Text type="p" color="#7D7F82" fz="12px">
                                    Изучено заболеваний: 50
                                </Text>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <Text type="p" color="#B1B2B4" fz="12px">
                                        Наблюдалось:
                                    </Text>
                                    <Text type="p" fz="12px">
                                        300 пациентов
                                    </Text>
                                </li>
                                <li>
                                    <Text type="p" color="#B1B2B4" fz="12px">
                                        Лечилось:
                                    </Text>
                                    <Text type="p" fz="12px">
                                        196 пациентов
                                    </Text>
                                </li>
                                <li>
                                    <Text type="p" color="#B1B2B4" fz="12px">
                                        Кол-во специалистов:
                                    </Text>
                                    <Text type="p" fz="12px">
                                        11
                                    </Text>
                                </li>
                                <li>
                                    <Text type="p" color="#B1B2B4" fz="12px">
                                        Успешно вылечилось:
                                    </Text>
                                    <Text type="p" fz="12px">
                                        167 пациентов
                                    </Text>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <Text type="p" fz="14px" color="#7D7F82">
                            Все сотрудники центра
                        </Text>
                        <Swiper
                            style={{ margin: 0 }}
                            slidesPerView={4}
                            spaceBetween={8}
                        >
                            {[1, 2, 3, 4, 5].map((item) => (
                                <SwiperSlide
                                    style={{
                                        width: 76,
                                    }}
                                    key={item}
                                >
                                    <MobileCard />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <MobileFilter data={["Онлайн", "Оффлайн"]} />
                    <div className={styles.box}>
                        <Text type="p" fz="14px" color="#7D7F82">
                            Статистика о записи
                        </Text>
                        <div className={styles.stats}>
                            <div className={styles.block}>
                                <Circle
                                    size={76}
                                    percentColor="#D64657"
                                    percent={40}
                                    strokeWidth={5}
                                    circleColor="#E9EAEB"
                                    textColor="#262626"
                                    fontSize="16px"
                                />
                                <div className={styles.text}>
                                    <Text type="h5" fz="11px">
                                        Помогло на 40%
                                    </Text>
                                    <Text type="p" fz="10px" color="#D64657">
                                        600 пациентов
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.block}>
                                <Circle
                                    size={76}
                                    percentColor="#0064FA"
                                    percent={60}
                                    strokeWidth={5}
                                    circleColor="#E9EAEB"
                                    textColor="#262626"
                                    fontSize="16px"
                                />
                                <div className={styles.text}>
                                    <Text type="h5" fz="11px">
                                        Помогло на 40%
                                    </Text>
                                    <Text type="p" fz="10px" color="#0064FA">
                                        600 пациентов
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.block}>
                                <Circle
                                    size={76}
                                    percentColor="#00CC5E"
                                    percent={80}
                                    strokeWidth={5}
                                    circleColor="#E9EAEB"
                                    textColor="#262626"
                                    fontSize="16px"
                                />
                                <div className={styles.text}>
                                    <Text type="h5" fz="11px">
                                        Помогло на 40%
                                    </Text>
                                    <Text type="p" fz="10px" color="#00CC5E">
                                        600 пациентов
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <Text type="p" fz="14px" color="#7D7F82">
                            Статистика посещений
                        </Text>
                        <div className={styles.stats}>график</div>
                    </div>
                    <div className={styles.box}>
                        <Text type="p" fz="14px" color="#7D7F82">
                            Публикации
                        </Text>
                        <div className={styles.gallery}>
                            <Swiper
                                style={{ margin: 0 }}
                                slidesPerView={4}
                                spaceBetween={8}
                            >
                                <SwiperSlide className={styles.slide}>
                                    <div className={styles.photo}></div>
                                </SwiperSlide>
                                <SwiperSlide className={styles.slide}>
                                    <div className={styles.photo}></div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.nav}>
                            <Text type="p" fz="14px" color="#7D7F82">
                                Отзывы пользователей
                            </Text>
                            <Text type="h3" fz="14px" color="#7D7F82">
                                Посмотреть все
                            </Text>
                        </div>
                        <div className={styles.comments}>
                            <Swiper
                                style={{ margin: 0 }}
                                slidesPerView={1}
                                spaceBetween={8}
                            >
                                {[1, 2, 3, 4].map((item) => (
                                    <SwiperSlide className={styles.slide}>
                                        <MobileComment key={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </MobileContainer>
        </div>
    );
};

export default MobileNotesInfoPage;
