import { FC } from "react";

import { Layout } from "../Layout";
import { MobileHeader } from "@/widgets/components/MobileHeader";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { MOBILE, TABLET } from "@/shared/utils";
import { Container } from "@/shared/ui/Container";
import { DoctorsFromUserCountry } from "@/widgets/components/DoctorsFromUserCountry";
import { Line } from "@/shared/ui/Line";
import { Posts } from "./ui/Posts";
import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";
import { Row } from "@/shared/ui/Row";

const MainPage: FC = () => {
    return (
        <Layout>
            {(MOBILE || TABLET) && <MobileHeader />}
            <Container height={MOBILE ? "calc(100% - 156px)" : ""}>
                <DoctorsFromUserCountry />
                {MOBILE && <Line />}
                <div className={styles.posts}>
                    <Row
                        gap={0}
                        style={{ justifyContent: "space-between" }}
                        className={styles.filters}
                    >
                        {(MOBILE || TABLET) && (
                            <Text type="h6" fz="15px">
                                Популярные посты
                            </Text>
                        )}
                        <FilterBtn
                            type={MOBILE ? "small" : "big"}
                            onClick={() => console.log("1")}
                        />
                    </Row>
                    <Posts />
                </div>
            </Container>
            {(MOBILE || TABLET) && <MobileMenu />}
        </Layout>
    );
};

export default MainPage;
