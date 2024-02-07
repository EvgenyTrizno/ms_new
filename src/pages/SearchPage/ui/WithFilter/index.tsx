import { FC } from "react";
import { IFilterObj, IWithFilterProps } from "./types";

import { Filter } from "@/shared/ui/Filter";
import { SearchResultsList } from "@/entities/SearchResultsList";
import styles from "./styles.module.scss";

export const WithFilter: FC<IWithFilterProps> = ({
  setFilter,
  filter,
  search,
}) => {
  const filters = ["Клиника", "Врачи"];
  const filterObj: IFilterObj = {
    [filters[0]]: "clinics",
    [filters[1]]: "doctors",
  };

  return (
    <div className={styles.wrapper}>
      <Filter
        data={filters}
        style={{ margin: "0 auto" }}
        isSelect={filter}
        setIsSelect={setFilter}
      />
      <SearchResultsList search={search} filter={filterObj[filter]} />
    </div>
  );
};
