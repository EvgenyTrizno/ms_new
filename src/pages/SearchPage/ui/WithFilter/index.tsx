import { FC } from "react";
import { IFilterObj, IWithFilterProps } from "./types";

import { Filter } from "@/shared/ui/Filter";
import { SearchResultsList } from "@/entities/SearchResultsList";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

export const WithFilter: FC<PropsWithClassName<IWithFilterProps>> = ({
    className,
    setFilter,
    filter,
    search,
}) => {
    const filters = ["Клиника", "Врачи", "Услуги"];
    const filterObj: IFilterObj = {
        [filters[0]]: "clinics",
        [filters[1]]: "doctors",
        [filters[2]]: "services"
    };

    return (
        <div className={cn(styles.wrapper, className)}>
            <Filter
                className={styles.filter}
                data={filters}
                style={{ margin: "0 auto" }}
                isSelect={filter}
                setIsSelect={setFilter}
            />
            <SearchResultsList search={search} filter={filterObj[filter]} />
        </div>
    );
};
