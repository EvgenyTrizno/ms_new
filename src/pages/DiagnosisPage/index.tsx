import { CustomMobileHeader } from "@/widgets";
import { Layout } from "../Layout";
import styles from "./styles.module.scss";
import { MOBILE } from "@/shared/utils";
import { ROUTES } from "@/shared/utils/PATHS";
import { Container } from "@/shared/ui/Container";
import { ChangeEvent, useState } from "react";
import { Search } from "@/features/Search";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { Filter } from "@/shared/ui/Filter";
import { MedTask } from "@/entities";

const DiagnosisPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Предположения");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Layout>
      {MOBILE && (
        <CustomMobileHeader back text={ROUTES.pacientDiagnosis.label} />
      )}

      <Container>
        <div className={styles.content}>
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

          <Filter
            isSelect={filter}
            setIsSelect={setFilter}
            data={["Предположения", "Установленные"]}
            width="100%"
          />
          
          <div className={styles.list}>
            <MedTask />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default DiagnosisPage;
