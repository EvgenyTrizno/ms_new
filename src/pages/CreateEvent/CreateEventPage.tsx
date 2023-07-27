import { FC, useEffect } from "react";

import { Layout } from "../Layout/Layout";
import { Btn, Filter, Switch, Text } from "@/shared";
import { Calendar, Card, Slider } from "@/widgets";
import { Account } from "@/shared/api/Account";
import { getRefreshTokenFromCookies } from "@/features";

import info from "/assets/info-circle.svg";
import styles from "./CreateEventPage.module.scss";

const CreateEventPage: FC = () => {
    const { getAllDoctors } = Account();

    useEffect(() => {
        if (getRefreshTokenFromCookies()) {
            getAllDoctors(getRefreshTokenFromCookies() as string).then((res) =>
                console.log(res)
            );
        }
    }, []);

    return (
        <Layout>
            <div className={styles.container}>
                <Text type="h2" fz="36px">
                    Создать событие
                </Text>
                <div className={styles.wrapper}>
                    <div className={styles.box}>
                        <div className={styles.text}>
                            <Text type="p" color="#7D7F82">
                                Выберите формат записи
                            </Text>
                            <img src={info} alt="" />
                        </div>
                        <div className={styles.calendar}>
                            <Filter data={["Онлайн", "Оффлайн"]} />
                            <Calendar info height="750px" width="100%" />
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.text}>
                            <Text type="p" color="#7D7F82">
                                Выберите специалиста
                            </Text>
                        </div>
                        <Slider container="960px">
                            {[1, 2, 3, 4, 5, 6].map(() => (
                                <Card checkbox />
                            ))}
                        </Slider>
                        <div className={styles.more}>
                            <div className={styles.text}>
                                <Text type="p" color="#7D7F82">
                                    Выберите формат записи
                                </Text>
                            </div>
                            <div className={styles.options}>
                                <div className={styles.item}>
                                    <Text type="p" fz="18px">
                                        Требуется ли переводчик
                                    </Text>
                                    <Switch />
                                </div>
                                <div className={styles.item}>
                                    <Text type="p" fz="18px">
                                        Уведомить
                                    </Text>
                                    <Switch />
                                </div>
                                <div className={styles.item}>
                                    <Text type="p" fz="18px">
                                        Добавить аккаунт
                                    </Text>
                                    <Switch />
                                </div>
                                <div className={styles.item}>
                                    <Text type="p" fz="18px">
                                        Прикрепить файл
                                    </Text>
                                    <Switch />
                                </div>
                            </div>
                        </div>
                        <Btn color="#0064FA">Записаться</Btn>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CreateEventPage;
