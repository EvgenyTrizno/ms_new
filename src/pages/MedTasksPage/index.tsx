import { MOBILE } from "@/shared/utils";
import { Layout } from "../Layout";
import { CustomMobileHeader } from "@/widgets";
import { ROUTES } from "@/shared/utils/PATHS";
import styles from "./styles.module.scss";
import { Search } from "@/features/Search";
import { ChangeEvent, useState } from "react";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { Filter } from "@/shared/ui/Filter";
import { MedTask } from "@/entities";
import { Link } from "react-router-dom";

const MedTasksPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("Выполняются");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Layout>
      <CustomMobileHeader
        back
        text={ROUTES.medTasks.label}
        btn={
          <Link to={ROUTES.createMedTask.path}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 20V11M11 2V11M11 11H2M11 11H20"
                stroke="#262626"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        }
      />

      <div className={styles.content}>
        <Search
          placeholder="Поиск чатов"
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
          isSelect={filter}
          setIsSelect={setFilter}
          width="100%"
          data={["Выполняются", "Требуется"]}
        />

        <div className={styles.list}>
          <MedTask />
          <MedTask />
          <MedTask />
          <MedTask />
          <MedTask />
          <MedTask />
        </div>
      </div>
    </Layout>
  );
};

export default MedTasksPage;
