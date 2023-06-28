import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { Rating, Search } from "@/widgets";
import { Btn, Filter, Text } from "@/shared";

import arrowLeft from "/assets/arrow-left.svg";
import controler from "/assets/controler.svg";
import virusIcon from "/assets/virus-icon.jpg";
import styles from "./SearchPage.module.scss";

export const SearchPage: FC = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.back}>
                        <img src={arrowLeft} alt="" />
                    </div>
                    <Search />
                    <Btn width="160px" color="#0064FA">
                        <div className={styles.btn}>
                            <img src={controler} alt="" />
                            Фильтры
                        </div>
                    </Btn>
                </div>
                <div className={styles.main}>
                    <div className={styles.box}>
                        <Filter data={["Центры", "Клиника"]} />
                    </div>
                    <div className={styles.items}>
                        {[1, 2, 3, 4].map(() => (
                            <div className={styles.item}>
                                <img src={virusIcon} alt="" />
                                <div className={styles.content}>
                                    <Text
                                        type="h2"
                                        color="#262626"
                                        fz="20px"
                                        position="start"
                                    >
                                        Центр 259
                                    </Text>
                                    <div className={styles.text}>
                                        <Text type="p" color="#3C3D3E">
                                            Constraints автоматом выставляется у
                                            элементов, которые ручками
                                            добавляются, а вот у иконок, к
                                            примеру, которые через плагины
                                            добавляешь - нет. Поэтому регулярно
                                            бывает такое, что фрейм растягиваешь
                                            и все объекты остаются там, где и
                                            должны быть, а эти иконки сползают.
                                        </Text>
                                    </div>
                                    <div className={styles.rating}>
                                        <Rating defaultValue={5} />
                                        <div>
                                            <Text type="p" color="#7D7F82">
                                                Россия, Москва
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};
