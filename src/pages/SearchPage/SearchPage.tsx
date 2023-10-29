import { FC } from "react";

import { Layout } from "../Layout";
import { MobileHeader, MobileMenu } from "@/widgets";
import { MOBILE } from "@/shared/utils";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { Filter } from "@/shared/ui/Filter";
import { Container } from "@/shared/ui/Container";
import { Search } from "@/features/Search";
import { Row } from "@/shared/ui/Row";
import { SearchResult } from "@/shared/ui/SearchResult";

import styles from "./SearchPage.module.scss";

const SearchPage: FC = () => {
    const data = [1, 2, 3, 4, 5];

    return (
        <Layout>
            {MOBILE && <MobileHeader />}
            <Container>
                <Row gap={10}>
                    <Search placeholder="Поиск чатов" height="48px" />
                    <FilterBtn onClick={() => console.log("1")} />
                </Row>
                <Filter
                    data={["Центры", "Клиника", "Врачи"]}
                    style={{ margin: "0 auto" }}
                />
                <div className={styles.items}>
                    {data.map((item) => (
                        <SearchResult key={item} />
                    ))}
                </div>
                {MOBILE && <MobileMenu />}
            </Container>
        </Layout>
    );
};

export default SearchPage;
