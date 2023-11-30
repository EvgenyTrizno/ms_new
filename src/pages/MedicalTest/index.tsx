import { FC } from "react";
import { useNavigate } from "react-router";

import { Layout } from "../Layout";
// import { Filter } from "@/shared";
import { Text } from "@/shared/ui/Text";
import { Btn } from "@/shared/ui/Btn";
import { Search } from "@/features/Search";
import { FilterBtn } from "@/shared/ui/FilterBtn";

import arrow from "/assets/arrow-right-black.svg";
import virus from "/assets/virus-icon.jpg";
import styles from "./styles.module.scss";

const MedicalTestPage: FC = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Search />
                    <FilterBtn onClick={() => ({})} type="small" />
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
                {/* <Filter data={["Онлайн", "Оффлайн"]} /> */}
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
