import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { Text } from "@/shared";
import { Card, Post, Slider } from "@/widgets";

import styles from "./MainPage.module.scss";

export const MainPage: FC = () => {
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
                    {[1].map((item) => (
                        <Post key={item} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};
