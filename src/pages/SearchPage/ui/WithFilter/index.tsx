import { FC } from "react";
import { IFilterObj, IWithFilterProps } from "./types";

import { Filter } from "@/shared/ui/Filter";
import { SearchResultsList } from "@/entities/SearchResultsList";

export const WithFilter: FC<IWithFilterProps> = ({
    setFilter,
    filter,
    search,
}) => {
    const filters = ["Центры", "Клиника", "Врачи"];
    const filterObj: IFilterObj = {
        Центры: "centers",
        Клиника: "clinics",
        Врачи: "doctors",
    };

    return (
        <>
            <Filter
                data={filters}
                style={{ margin: "0 auto" }}
                isSelect={filter}
                setIsSelect={setFilter}
            />
            <SearchResultsList search={search} filter={filterObj[filter]} />
        </>
    );
};
