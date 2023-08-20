import { FC, useEffect } from "react";

import { Layout } from "../Layout/Layout";
import { Btn, Text } from "@/shared";
import { Card, Post, Slider } from "@/widgets";
import { News } from "@/shared/api/News";
import { getAccessTokenFromCookies } from "@/features";
import { useUserData } from "@/shared/model/store";
import { PC } from "@/shared/utils";

import controller from "/assets/controler.svg";
import styles from "./MainPage.module.scss";

const MainPage: FC = () => {
    const { getNews } = News();
    const { img } = useUserData();

    const token = getAccessTokenFromCookies();

    useEffect(() => {
        token && img && getNews(token).then((res) => console.log(res));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [img, token]);

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.box}>
                    <Text type="p" color="#7D7F82">
                        Специалисты из Узбекистана
                    </Text>
                    <Slider container="100%">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                            <Card checkbox={false} key={item} />
                        ))}
                    </Slider>
                </div>
                <div className={styles.posts}>
                    <div className={styles.filters}>
                        {PC ? (
                            <Btn color="#0064FA">
                                <div className={styles.inner}>
                                    <img src={controller} alt="" />
                                    Фильтры
                                </div>
                            </Btn>
                        ) : (
                            <Btn
                                color="#0064FA"
                                width="56px"
                                height="56px"
                                padding="0"
                            >
                                <img src={controller} alt="" />
                            </Btn>
                        )}
                    </div>
                    {[1].map((item) => (
                        <Post key={item} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default MainPage;
