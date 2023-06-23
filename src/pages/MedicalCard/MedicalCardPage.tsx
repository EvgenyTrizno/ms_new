import { FC } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

import { Calendar, Search } from "../../widgets";
import { Layout } from "../Layout/Layout";
import { Btn, Text } from "../../shared";

import arrow from "/assets/arrow-right.svg";
import styles from "./MedicalCardPage.module.scss";

export const MedicalCardPage: FC = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Search />
                    <Btn color="#0064FA" width="60px">
                        <IoAddCircleOutline size={24} />
                    </Btn>
                </div>
                <div className={styles.wrapper}>
                    <Calendar height="500px" info={false} />
                    <div className={styles.list}>
                        {[1, 2, 3, 4, 5].map(() => (
                            <div className={styles.item}>
                                <div className={styles.deadline}>
                                    <Text type="p">14:00 - 15:00</Text>
                                    <span className={styles.status}>
                                        Online
                                    </span>
                                </div>
                                <Text type="h2" fz="20px">
                                    Лорем Ипсум #1
                                </Text>
                                <div className={styles.descr}>
                                    <Text type="p">
                                        Lorem Ipsum является текст-заполнитель
                                        обычно используется в графических
                                        печатей...
                                    </Text>
                                </div>
                                <img
                                    src={arrow}
                                    alt=""
                                    className={styles.arrow}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};
