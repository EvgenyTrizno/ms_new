import { FC, useState } from "react";

import { Layout } from "../Layout";
import { MobileHeader } from "@/widgets/components/MobileHeader";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import { MOBILE } from "@/shared/utils";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { Container } from "@/shared/ui/Container";
import { Search } from "@/features/Search";
import { WithFilter } from "./ui/WithFilter";
import { SearchWithFilter } from "@/features/SearchWithFilter";
import { useBurgerMenu } from "@/shared/model/store/burgerMenu";
import styles from "./styles.module.scss";
import { Clinic } from "@/widgets";

const SearchPage: FC = () => {
  const [search, setSearch] = useState<string>("");
  // const [filter, setFilter] = useState<string>("Центры");
  const { isOpen, setIsOpen } = useBurgerMenu();
  const [filter, setFilter] = useState<string>("Клиника");

  return (
    <>
      {MOBILE && <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen} />}

      <Layout>
        <Container>
          {MOBILE ? (
            <SearchWithFilter
              placeholder="Поиск чатов"
              showByScroll={false}
              onChange={(e) => console.log(e.target.value)}
              value=""
            />
          ) : (
            <>
              <Search
                placeholder="Поиск чатов"
                height="48px"
                onChange={(e) => setSearch((e && e.target.value) ?? "")}
              />
              <FilterBtn type="big" onClick={() => console.log("1")} />
            </>
          )}

          <WithFilter search={search} filter={filter} setFilter={setFilter} />

          <div className={styles.list}>
            <Clinic />
            <Clinic />
            <Clinic />
            <Clinic />
          </div>
        </Container>
      </Layout>

      {MOBILE && <MobileMenu />}
    </>
  );
};

export default SearchPage;
