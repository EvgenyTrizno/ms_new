import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { AdminPanelContainer, MailHeader, MailLayout } from "@/widgets";
import { Filter, Text } from "@/shared";

import styles from "./MailPage.module.scss";

const MailPage: FC = () => {
    return (
        <Layout>
            <AdminPanelContainer>
                <div className={styles.filter}>
                    <Filter
                        width="100%"
                        data={[
                            "Все сообщения (156)",
                            "Черновики",
                            "Избранное",
                            "Удаленные",
                        ]}
                    />
                </div>
                <Text type="p" position="center" color="#7D7F82">
                    Сегодня
                </Text>
                <MailLayout>
                    <MailHeader />
                </MailLayout>
            </AdminPanelContainer>
        </Layout>
    );
};

export default MailPage;
