import { FC } from "react";

import { Layout } from "../Layout";
// import { Filter } from "@/shared";

import { AdminPanelContainer, RequestBlock } from "@/widgets";
import { LAPTOP, SMALL_LAPTOP } from "@/shared/utils";
import { Search } from "@/features/Search";
import { Cols } from "@/shared/ui/Cols";

import styles from "./styles.module.scss";

const RequestsPage: FC = () => {
    const topContent = {
        content: [
            // <Filter
            //     width="100%"
            //     data={[
            //         "Все (156)",
            //         "Центры",
            //         "Клиники",
            //         "Инвесторы",
            //         "Аптеки",
            //         "Реаб.центры",
            //         "Больницы",
            //     ]}
            // />,
            <Search
                height="52px"
                placeholder="Поиск специалиста или пациента"
            />,
        ],
    };

    return (
        <Layout>
            <AdminPanelContainer>
                <div className={styles.top}>
                    {LAPTOP || SMALL_LAPTOP
                        ? topContent.content
                              .reverse()
                              .map((item) => <>{item}</>)
                        : topContent.content.map((item) => <>{item}</>)}
                </div>
                <Cols type="auto" count={SMALL_LAPTOP ? 3 : 4} gap={10}>
                    {[1, 2, 3, 4].map((item) => (
                        <RequestBlock key={item} />
                    ))}
                </Cols>
            </AdminPanelContainer>
        </Layout>
    );
};

export default RequestsPage;
