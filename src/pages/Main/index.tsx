import { FC } from "react";

import { Layout } from "../Layout";
import { MobileHeader } from "@/widgets";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { MOBILE, TABLET } from "@/shared/utils";
import { Container } from "@/shared/ui/Container";
import { DoctorsFromUserCountry } from "@/widgets/components/DoctorsFromUserCountry";
import { Line } from "@/shared/ui/Line";
import { Posts } from "./ui/Posts";

import styles from "./styles.module.scss";

const MainPage: FC = () => {
    return (
        <Layout>
            {(MOBILE || TABLET) && <MobileHeader />}
            <Container height={MOBILE || TABLET ? "calc(100% - 180px)" : ""}>
                <DoctorsFromUserCountry />
                {MOBILE && <Line />}
                <div className={styles.posts}>
                    <div className={styles.filters}>
                        <FilterBtn
                            type="big"
                            onClick={() => console.log("1")}
                        />
                    </div>
                    <Posts />
                </div>
            </Container>
            {(MOBILE || TABLET) && <MobileMenu />}
        </Layout>
    );
};

export default MainPage;
