import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { Btn, Filter, Text } from "@/shared";
import { Search } from "@/widgets";

import add from "/assets/add-circle.svg";
import ghost from "/assets/ghost.svg";
import setting from "/assets/setting.svg";
import plane from "/assets/paper-plane.svg";
import arrowRight from "/assets/arrow-right.svg";
import loading from "/assets/loading.svg";
import styles from "./MedicalTestPage.module.scss";

export const MedicalTestPage: FC = () => {
    const data = [1, 2, 3];

    return (
        <Layout>
            <div className={styles.medical}>
                <div className={styles.header}>
                    <Search placeholder="Введите запрос" />
                    <Btn color="#0064FA" width="60px" padding="0px">
                        <img src={add} alt="" />
                    </Btn>
                </div>
                <Filter data={["Предстоящие", "История"]} />
                <div
                    className={styles.items}
                    style={
                        data.length === 0
                            ? { display: "block" }
                            : { display: "grid" }
                    }
                >
                    {data.length === 0 ? (
                        <div className={styles.empty}>
                            <div className={styles.inner}>
                                <img src={ghost} alt="" />
                                <Text type="h2" color="#262626" fz="32px">
                                    Ничего нетS
                                </Text>
                                <div className={styles.text}>
                                    <Text
                                        type="p"
                                        fz="24px"
                                        position="center"
                                        color="#26262680"
                                    >
                                        Список пуст, создайте запись нажав на
                                        кнопку “Плюс”
                                    </Text>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            {data.map((item) => (
                                <div className={styles.item} key={item}>
                                    <div className={styles.management}>
                                        <div className={styles.item}>
                                            <img src={setting} alt="" />
                                        </div>
                                        <div className={styles.item}>
                                            <img src={plane} alt="" />
                                        </div>
                                        <div className={styles.item}>
                                            <img src={loading} alt="" />
                                        </div>
                                        <div className={styles.item}>
                                            <img src={arrowRight} alt="" />
                                        </div>
                                    </div>
                                    <div className={styles.box}>
                                        <div className={styles.text}>
                                            <Text
                                                type="p"
                                                color="#9B9B9B"
                                                fz="12px"
                                            >
                                                Название записи
                                            </Text>
                                            <Text
                                                type="h2"
                                                color="#000"
                                                fz="17px"
                                            >
                                                Восстановление
                                            </Text>
                                        </div>
                                        <ul className={styles.list}>
                                            <li className={styles.li}>
                                                <Text type="p">Запись:</Text>
                                                <Text
                                                    type="p"
                                                    color="#00CC5E"
                                                    fz="13px"
                                                >
                                                    Online
                                                </Text>
                                            </li>
                                            <li className={styles.li}>
                                                <Text type="p">
                                                    Предоставляет:
                                                </Text>
                                                <Text type="p">
                                                    Московский Центр
                                                </Text>
                                            </li>
                                            <li className={styles.li}>
                                                <Text type="p">Ведущий:</Text>
                                                <Text type="p">
                                                    Иван Иванов
                                                </Text>
                                            </li>
                                            <li className={styles.li}>
                                                <Text type="p">Причина:</Text>
                                                <Text type="p">
                                                    Проверка мышц спины
                                                </Text>
                                            </li>
                                        </ul>
                                        <div>
                                            <Text
                                                type="p"
                                                color="#9B9B9B"
                                                fz="12px"
                                            >
                                                Дата и время
                                            </Text>
                                            <ul className={styles.list}>
                                                <li className={styles.li}>
                                                    <Text type="p">Дата:</Text>
                                                    <Text type="p">
                                                        Не установлено
                                                    </Text>
                                                </li>
                                                <li className={styles.li}>
                                                    <Text type="p">
                                                        Начало:
                                                    </Text>
                                                    <Text type="p">
                                                        Не установлено
                                                    </Text>
                                                </li>
                                                <li className={styles.li}>
                                                    <Text type="p">
                                                        Длительность:
                                                    </Text>
                                                    <Text type="p">
                                                        40 минут
                                                    </Text>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.btns}>
                                        <Btn color="#0064FA" width="210px">
                                            Подтвердить
                                        </Btn>
                                        <Btn
                                            color="#fff"
                                            width="210px"
                                            textColor="#0064FA"
                                            border="2px solid #0064FA"
                                        >
                                            Отменить
                                        </Btn>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
};
