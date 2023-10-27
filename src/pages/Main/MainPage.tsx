import { FC } from "react";

import { Layout } from "../Layout";
import { Text } from "@/shared/ui/Text";
import { MobileHeader, MobileMenu, Slider, SliderArrows } from "@/widgets";
import { Card } from "@/shared/ui/Card";
import { Post } from "@/widgets/components/Post/ui";
import { getFullUsernameWithInitials } from "@/entities/User/lib/helpers/getFullUsernameWithInitials";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { Row } from "@/shared/ui/Row";
import { MOBILE } from "@/shared/utils";
import { Container } from "@/shared/ui/Container";

import styles from "./MainPage.module.scss";

const MainPage: FC = () => {
    return (
        <Layout>
            {MOBILE && <MobileHeader />}
            <Container>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <Row
                            gap={0}
                            style={{ justifyContent: "space-between" }}
                        >
                            <Text type="p" color="#7D7F82" fz="14px">
                                Специалисты из Узбекистана
                            </Text>
                            <SliderArrows />
                        </Row>
                        <Slider>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                                <Card
                                    checkbox
                                    name={getFullUsernameWithInitials(
                                        "Михайлова",
                                        "Татьяна",
                                        "Александровна"
                                    )}
                                    key={item}
                                />
                            ))}
                        </Slider>
                    </div>
                    {MOBILE && (
                        <div
                            className={styles.line}
                            // style={{ backgroundColor: sick ? "#F7E6E8" : "" }}
                        ></div>
                    )}

                    <div className={styles.posts}>
                        <div className={styles.filters}>
                            <FilterBtn onClick={() => console.log("1")} />
                        </div>
                        {[1, 2, 3, 4].map((item) => (
                            <Post key={item} />
                        ))}
                    </div>
                </div>
            </Container>
            {MOBILE && <MobileMenu />}
        </Layout>
    );
};

export default MainPage;
