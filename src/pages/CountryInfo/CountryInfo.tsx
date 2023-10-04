import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { BlueSliderArrows, WhiteContentBlock } from "@/widgets";
import { Text } from "@/shared";

import styles from "./CountryInfo.module.scss";

const CountryInfo: FC = () => {
    return (
        <Layout>
            <WhiteContentBlock>
                <Text type="h2" fz="18px">
                    Все города по количеству пользователей, клиник и врачей
                </Text>
                <div className={styles.box}></div>
                <BlueSliderArrows />
            </WhiteContentBlock>
        </Layout>
    );
};

export default CountryInfo;
