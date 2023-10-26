import { FC } from "react";

import { Layout } from "../Layout";
import { Text } from "@/shared/ui/Text";
import { Input } from "@/shared/ui/Input";

import woman from "/assets/woman.jpg";
import styles from "./AboutCenterPage.module.scss";
import { PersonalCard, Slider } from "@/widgets";

const AboutCenterPage: FC = () => {
    const placeholders = [
        "Название клиники",
        "Страна",
        "Город",
        "Адрес/регистрация на карте",
        "Количество работников в клинике",
    ];

    return (
        <Layout>
            <div className={styles.wrapper}>
                <Text type="p" color="#7D7F82">
                    О клинике
                </Text>
                <div className={styles.content}>
                    <form>
                        {placeholders.map((item) => (
                            <Input
                                borderColor="#D6E7FF"
                                borderRadius="16px"
                                type="text"
                                placeholder={item}
                            />
                        ))}
                    </form>
                </div>
                <Text type="p" color="#7D7F82">
                    Обо мне
                </Text>
                <div className={styles.content}>
                    <div className={styles.position}>
                        <Text type="p" color="#0064FA" fz="14px">
                            Главный врач
                        </Text>
                    </div>
                    <div className={styles.inner}>
                        <img src={woman} alt="" />
                        <div className={styles.data}>
                            <Text type="h2" fz="24px">
                                Зайцева Елена Юрьевна
                            </Text>
                            <div className={styles.info}>
                                <div className={styles.text}>
                                    <Text type="h4" fz="20px">
                                        Должность
                                    </Text>
                                    <Text type="p" color="#3C3D3E">
                                        Врач-хирург
                                    </Text>
                                </div>
                                <div className={styles.text}>
                                    <Text type="h4" fz="20px">
                                        Дата рождения
                                    </Text>
                                    <Text type="p" color="#3C3D3E">
                                        23.07.1987
                                    </Text>
                                </div>
                                <div className={styles.text}>
                                    <Text type="h4" fz="20px">
                                        Местоположение
                                    </Text>
                                    <Text type="p" color="#3C3D3E">
                                        Самара, Российская Федерация
                                    </Text>
                                </div>
                                <div className={styles.text}>
                                    <Text type="h4" fz="20px">
                                        Номер телефона
                                    </Text>
                                    <Text type="p" color="#3C3D3E">
                                        +7-(900)-000-00-00
                                    </Text>
                                </div>
                                <div className={styles.text}>
                                    <Text type="h4" fz="20px">
                                        Опыт работы
                                    </Text>
                                    <Text type="p" color="#3C3D3E">
                                        23 года
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.date}>
                                <Text type="p" fz="14px" color="#B1B2B4">
                                    Зарегистрирован(-а) с 23 мая 2017
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
                <Text type="p" color="#7D7F82">
                    О сотрудниках
                </Text>
                <Slider gap={20}>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <PersonalCard key={item} />
                    ))}
                </Slider>
            </div>
        </Layout>
    );
};

export default AboutCenterPage;
