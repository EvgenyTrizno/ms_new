import { ChangeEvent, FC, useState } from "react";

import { Layout } from "../Layout";
import { MobileHeader } from "@/widgets/components/MobileHeader";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import { DESKTOP, MOBILE } from "@/shared/utils";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { Search } from "@/features/Search";
import { WithFilter } from "./ui/WithFilter";
import styles from "./styles.module.scss";

const SearchPage: FC = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Клиника");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Layout>
      <MobileHeader />
      <div className={styles.content}>
        <div className={styles.searchWrapper}>
          <Search
            className={styles.search}
            placeholder={filter == "Клиника" ?  "Поиск клиник" : "Поиск врачей"}
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

          {DESKTOP && (
            <FilterBtn
              className={styles.bigFilter}
              type="big"
              onClick={() => console.log("1")}
            />
          )}
        </div>

        <WithFilter
          className={styles.filter}
          search={search}
          filter={filter}
          setFilter={setFilter}
        />
      </div>

      {MOBILE && <MobileMenu />}
    </Layout>
  );
};

export default SearchPage;
