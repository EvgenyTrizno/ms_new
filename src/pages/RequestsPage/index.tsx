import { FC } from "react";

import { Layout } from "../Layout";

import { CustomMobileHeader } from "@/widgets";
import { MOBILE, TABLET } from "@/shared/utils";
import { Search } from "@/features/Search";
import { Container } from "@/shared/ui/Container";
import { Filter } from "@/shared/ui/Filter";
import { List } from "./ui/List";
import { SliderFilter } from "./ui/SliderFilter";

import styles from "./styles.module.scss";

const RequestsPage: FC = () => {
    const data = [
        "Все (156)",
        "Центры",
        "Клиники",
        "Инвесторы",
        "Аптеки",
        "Реаб.центры",
        "Больницы",
    ];

    return (
        <Layout>
            {(MOBILE || TABLET) && <CustomMobileHeader back text="Запросы" />}
            <Container>
                {!MOBILE && !TABLET ? (
                    <div className={styles.top}>
                        <Filter
                            width="100%"
                            data={data}
                            isSelect={""}
                            setIsSelect={() => ({})}
                        />
                        <Search placeholder="Поиск специалиста или пациента" />
                    </div>
                ) : (
                    <SliderFilter data={data} />
                )}
                <List />
            </Container>
        </Layout>
    );
};

export default RequestsPage;
