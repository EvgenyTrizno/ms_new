import { FC } from "react";

import { Layout } from "../Layout/Layout";
import {
    AdminPanelContainer,
    MailHeader,
    MailLayout,
    MailMessage,
} from "@/widgets";
// import { Filter, Text } from "@/shared";
import { Text } from "@/shared/ui/Text";

import styles from "./MailPage.module.scss";
import { LAPTOP, SMALL_LAPTOP } from "@/shared/utils";

const MailPage: FC = () => {
    return (
        <Layout>
            <AdminPanelContainer>
                <div className={styles.filter}>
                    {/* <Filter
                        width="100%"
                        data={[
                            "Все сообщения (156)",
                            "Черновики",
                            "Избранное",
                            "Удаленные",
                        ]}
                    /> */}
                </div>
                <Text
                    type="p"
                    position="center"
                    fz={SMALL_LAPTOP || LAPTOP ? "14px" : ""}
                    color="#7D7F82"
                >
                    Сегодня
                </Text>
                <MailLayout>
                    <MailHeader date={SMALL_LAPTOP ? false : true} />
                    <div className={styles.list}>
                        {[1, 2, 3, 4].map((item) => (
                            <MailMessage
                                date={SMALL_LAPTOP ? false : true}
                                key={item}
                            />
                        ))}
                    </div>
                </MailLayout>
                <Text
                    type="p"
                    position="center"
                    fz={SMALL_LAPTOP || LAPTOP ? "14px" : ""}
                    color="#7D7F82"
                >
                    Полученные ранее
                </Text>
                <MailLayout>
                    {[1, 2, 3, 4].map((item) => (
                        <MailMessage
                            date={SMALL_LAPTOP ? false : true}
                            key={item}
                        />
                    ))}
                </MailLayout>
            </AdminPanelContainer>
        </Layout>
    );
};

export default MailPage;
