import { FC } from "react";

import { Layout } from "../Layout";
import { Container } from "@/shared/ui/Container";
import { MOBILE, TABLET } from "@/shared/utils";
import { CustomMobileHeader } from "@/widgets";
import { Text } from "@/shared/ui/Text";
import { MainData } from "./ui/MainData";
import { Interest } from "./ui/Interest";
import { Protection } from "@/widgets/components/Protection";

import styles from "./styles.module.scss";

const AccountPage: FC = () => {
    return (
        <Layout>
            {(MOBILE || TABLET) && <CustomMobileHeader back text="Профиль" />}
            <Container>
                <Text type="p" color="#7D7F82">
                    Основная информация
                </Text>
                <MainData />
                <div className={styles.interest}>
                    <Text type="p" color="#7D7F82">
                        Интерес
                    </Text>
                    <Interest />
                </div>
                <Text type="p" color="#7D7F82">
                    Защита профиля
                </Text>
                <Protection />
            </Container>
        </Layout>
    );
};

export default AccountPage;
