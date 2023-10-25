import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { Btn } from "@/shared/ui/Btn";
import { Text } from "@/shared/ui/Text";
import {
    MobileContainer,
    MobileHeader,
    MobileMenu,
    Slider,
    SliderArrows,
} from "@/widgets";
import { Card } from "@/entities/Card/ui";
import { PostLayout as Post } from "@/widgets/components/Post/ui";
import { MOBILE, PC, SMALL_LAPTOP } from "@/shared/utils";

import controller from "/assets/controler.svg";
import styles from "./MainPage.module.scss";

const MainPage: FC = () => {
    return (
        <Layout>
            {MOBILE && <MobileHeader />}
            <MobileContainer>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.nav}>
                            <Text type="p" color="#7D7F82" fz="14px">
                                Специалисты из Узбекистана
                            </Text>
                            <SliderArrows />
                        </div>
                        <Slider>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                                <Card checkbox name="" key={item} />
                            ))}
                        </Slider>
                    </div>
                    {MOBILE && (
                        <div
                            className={styles.line}
                            // style={{ backgroundColor: sick ? "#F7E6E8" : "" }}
                        ></div>
                    )}
                    {SMALL_LAPTOP && (
                        <div className={styles.filters}>
                            <Btn color="#0064FA" width="160px" height="56px">
                                <div className={styles.inner}>
                                    <img src={controller} alt="" />
                                    <Text type="p">Фильтры</Text>
                                </div>
                            </Btn>
                        </div>
                    )}
                    <div className={styles.posts}>
                        <div className={styles.filters}>
                            {PC ? (
                                <Btn
                                    color="#0064FA"
                                    height="48px"
                                    br="12px"
                                    padding="14px"
                                >
                                    <div className={styles.inner}>
                                        <img src={controller} alt="" />
                                        <Text type="p">Фильтры</Text>
                                    </div>
                                </Btn>
                            ) : (
                                MOBILE && (
                                    <Btn
                                        color="#0064FA"
                                        width="56px"
                                        height="56px"
                                        padding="0"
                                    >
                                        <img src={controller} alt="" />
                                    </Btn>
                                )
                            )}
                        </div>
                        {[1, 2, 3, 4].map((item) => (
                            <Post key={item} />
                        ))}
                    </div>
                </div>
            </MobileContainer>
            {MOBILE && <MobileMenu />}
        </Layout>
    );
};

export default MainPage;
