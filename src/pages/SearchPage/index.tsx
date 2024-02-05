import { ChangeEvent, FC, useState } from "react";

import { Layout } from "../Layout";
import { MobileHeader } from "@/widgets/components/MobileHeader";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import { DESKTOP, MOBILE } from "@/shared/utils";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { Container } from "@/shared/ui/Container";
import { Search } from "@/features/Search";
import { WithFilter } from "./ui/WithFilter";

const SearchPage: FC = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Клиника");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      {MOBILE && <MobileHeader />}

      <Layout>
        <Container>
          <Search
            placeholder="Поиск чатов"
            height="48px"
            onChange={onChangeSearch}
            value={search}
            showSearchByScroll={false}
            additionalBlock={
              MOBILE ? (
                <FilterBtn type="small" onClick={() => console.log("click")} />
              ) : undefined
            }
          />

          {DESKTOP && <FilterBtn type="big" onClick={() => console.log("1")} />}

          <WithFilter search={search} filter={filter} setFilter={setFilter} />
        </Container>
      </Layout>

      {MOBILE && <MobileMenu />}
    </>
  );
};

export default SearchPage;
