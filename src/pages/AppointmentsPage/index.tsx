import { ChangeEvent, FC, useState } from "react";

import { Layout } from "../Layout";
import { Filter } from "@/shared/ui/Filter";
import { MOBILE } from "@/shared/utils";
import { CustomMobileHeader } from "@/widgets";
import styles from "./styles.module.scss";
import { Appointment } from "./ui/Appointment";
import { Search } from "@/features/Search";
import { FilterBtn } from "@/shared/ui/FilterBtn";

const AppointmentsPage: FC = () => {
  const [filter, setFilter] = useState<string>("Предложения");
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Layout>
      <CustomMobileHeader back text="Назначения" />

      <div className={styles.content}>
        <Search
          placeholder="Введите запрос"
          height="48px"
          onChange={onChangeSearch}
          value={search}
          additionalBlock={
            MOBILE ? (
              <FilterBtn type="small" onClick={() => console.log("click")} />
            ) : undefined
          }
        />

        <Filter
          className={styles.filter}
          isSelect={filter}
          setIsSelect={setFilter}
          data={[
            "Предложения ",
            "Популярные",
            "Подписка ",
            "Платежи",
            "Задачи ",
            "Корзина",
          ]}
        />

        <div className={styles.list}>
          <Appointment />
          <Appointment />
          <Appointment />
          <Appointment />
        </div>
      </div>
    </Layout>
  );
};

export default AppointmentsPage;
