import { FC } from "react";

import { Layout } from "../Layout";
import { MobileHeader, MobileMenu } from "@/widgets";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { MOBILE } from "@/shared/utils";
import { Container } from "@/shared/ui/Container";
import { DoctorsFromUserCountry } from "@/widgets/components/DoctorsFromUserCountry";
import { Line } from "@/shared/ui/Line";
import { Posts } from "@/widgets/components/Posts";

import styles from "./styles.module.scss";

const MainPage: FC = () => {
    return (
        <Layout>
            {MOBILE && <MobileHeader />}
            <Container>
                <div className={styles.container}>
                    <DoctorsFromUserCountry />
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
