import { FC } from "react";

import { Layout } from "../Layout";
import { Text } from "@/shared/ui/Text";
import { MobileHeader, MobileMenu, SliderArrows } from "@/widgets";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { Row } from "@/shared/ui/Row";
import { MOBILE } from "@/shared/utils";
import { Container } from "@/shared/ui/Container";
import { List as DoctorsFromUserCountry } from "@/widgets/components/DoctorsFromUserCountry";
import { Line } from "@/shared/ui/Line";
import { Posts } from "@/widgets/components/Posts";

import styles from "./styles.module.scss";

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
                        <DoctorsFromUserCountry />
                    </div>
                    {MOBILE && <Line />}
                    <div className={styles.posts}>
                        <div className={styles.filters}>
                            <FilterBtn onClick={() => console.log("1")} />
                        </div>
                        <Posts />
                    </div>
                </div>
            </Container>
            {MOBILE && <MobileMenu />}
        </Layout>
    );
};

export default MainPage;
