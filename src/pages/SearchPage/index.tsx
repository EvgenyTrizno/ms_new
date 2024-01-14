import { FC, useState } from "react";

import { Layout } from "../Layout";
import { MobileHeader } from "@/widgets/components/MobileHeader";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import { MOBILE } from "@/shared/utils";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { Container } from "@/shared/ui/Container";
import { Search } from "@/features/Search";
import { Row } from "@/shared/ui/Row";
import { WithFilter } from "./ui/WithFilter";
import { SearchWithFilter } from "@/features/SearchWithFilter";

const SearchPage: FC = () => {
    const [search, setSearch] = useState<string>("");
    // const [filter, setFilter] = useState<string>("Центры");
    const [filter, setFilter] = useState<string>("Клиника");

    return (
        <Layout>
            {MOBILE && <MobileHeader />}
            <Container height="calc(100% - 156px)">
                <Row gap={10}>
                    {MOBILE ? (
                        <SearchWithFilter />
                    ) : (
                        <>
                            <Search
                                placeholder="Поиск чатов"
                                height="48px"
                                onChange={(e) =>
                                    setSearch((e && e.target.value) ?? "")
                                }
                            />
                            <FilterBtn
                                type="big"
                                onClick={() => console.log("1")}
                            />
                        </>
                    )}
                </Row>
                <WithFilter
                    search={search}
                    filter={filter}
                    setFilter={setFilter}
                />
                {MOBILE && <MobileMenu />}
            </Container>
        </Layout>
    );
};

export default SearchPage;
