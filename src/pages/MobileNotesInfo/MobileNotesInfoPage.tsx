import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
    Circle,
    CustomMobileHeader,
    MobileCard,
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
                    <BackArrow path="/m/" />
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
                            centeredSlides={true}
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
                            </div>
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
                            </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </MobileContainer>
        </div>
    );
};

export default MobileNotesInfoPage;
