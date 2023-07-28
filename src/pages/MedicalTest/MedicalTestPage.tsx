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

const MedicalTestPage: FC = () => {
    const data = [1, 2, 3];

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Search />
                    <Btn color="#0064FA" width="70px">
                        <img src={controler} alt="" />
                    </Btn>
                </div>
                <div className={styles.info}>
                    <div className={styles.data}>
                        <img src={virus} alt="" />
                        <div className={styles.text}>
                            <Text type="h2" fz="24px">
                                GGTD
                            </Text>
                            <Text type="p" color="#7D7F82" fz="18px">
                                Изучено заболеваний: 50
                            </Text>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <Text type="p" fz="18px">
                            Наблюдалось: 300 человек
                        </Text>
                        <Text type="p" fz="18px">
                            Лечилось: 196 пациентов
                        </Text>
                    </div>
                    <div className={styles.text}>
                        <Text type="p" fz="18px">
                            Кол-во специалистов: 11
                        </Text>
                        <Text type="p" fz="18px">
                            Успешно вылечилось: 167 пациентов
                        </Text>
                    </div>
                </div>
                <Filter data={["Онлайн", "Оффлайн"]} />
                <div className={styles.items}>
                    <div className={styles.item}>
                        <div className={styles.data}>
                            <Text type="p" color="#7D7F82" fz="14px">
                                Название
                            </Text>
                            <Text type="h2" fz="20px">
                                Центр Неврологии
                            </Text>
                            <div className={styles.status}>
                                <Text type="p" color="#7D7F82">
                                    Доступно:
                                </Text>
                                <span className={styles.online}>Online</span>
                                <div>/</div>
                                <span className={styles.offline}>Offline</span>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.text}>
                                <Text type="p">
                                    Помогло на 80%:
                                    <span className={styles.count}>300</span>
                                </Text>
                                <Text type="p">
                                    Помогло на 60%:
                                    <span className={styles.count}>700</span>
                                </Text>
                            </div>
                            <div className={styles.text}>
                                <Text type="p">
                                    Помогло на 40%:
                                    <span className={styles.count}>300</span>
                                </Text>
                                <Text type="p">
                                    Помогло на 20%:
                                    <span className={styles.count}>700</span>
                                </Text>
                            </div>
                            <div className={styles.text}>
                                <Text type="p">
                                    Публикации:
                                    <span className={styles.count}>300</span>
                                </Text>
                                <Text type="p">
                                    Выбор специалиста:
                                    <span className={styles.count}>
                                        На выбор
                                    </span>
                                </Text>
                            </div>
                        </div>
                        <div className={styles.btns}>
                            <Btn
                                color="#0064FA"
                                width="155px"
                                onClick={() => navigate(`/notes/name`)}
                            >
                                Продолжить
                            </Btn>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MedicalTestPage;
