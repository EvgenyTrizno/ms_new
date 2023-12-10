import { Cols } from "@/shared/ui/Cols";
import { FC } from "react";
import { useResultsQuery } from "../../lib/hooks/useResultsQuery";
import { ISearchResultsListProps } from "./types";
import { SearchResult } from "../SearchResult";
import { MOBILE } from "@/shared/utils";

export const SearchResultsList: FC<ISearchResultsListProps> = ({
    filter,
    search,
}) => {
    const { data } = useResultsQuery();

    return (
        <Cols gap={10} type="auto" count={MOBILE ? 1 : 3}>
            {data &&
                filter &&
                data.data[filter]
                    .filter((item) =>
                        Object.entries(item)
                            .flat(Infinity)
                            .toString()
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
                    .map((item) => <SearchResult key={item.id} />)}
        </Cols>
    );
};
