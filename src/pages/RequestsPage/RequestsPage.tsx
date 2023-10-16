import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { Filter } from "@/shared";

import styles from "./RequestsPage.module.scss";
import { AdminPanelContainer, Cols, RequestBlock, Search } from "@/widgets";

const RequestsPage: FC = () => {
    return (
        <Layout>
            <AdminPanelContainer>
                <div className={styles.top}>
                    <Filter
                        width="100%"
                        data={[
                            "Все (156)",
                            "Центры",
                            "Клиники",
                            "Инвесторы",
                            "Аптеки",
                            "Реаб.центры",
                            "Больницы",
                        ]}
                    />
                    <Search placeholder="Поиск специалиста или пациента" />
                </div>
                <Cols type="auto" count={4} gap={10}>
                    {[1, 2, 3, 4].map((item) => (
                        <RequestBlock key={item} />
                    ))}
                </Cols>
            </AdminPanelContainer>
        </Layout>
    );
};

export default RequestsPage;
