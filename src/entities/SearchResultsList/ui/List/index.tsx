import { Cols } from "@/shared/ui/Cols";
import { FC } from "react";
import { useResultsQuery } from "../../lib/hooks/useResultsQuery";
import { ISearchResultsListProps } from "./types";
import { Clinic } from "@/widgets";
import { DataListWrapper } from "@/widgets/components/DataListWrapper";

export const SearchResultsList: FC<ISearchResultsListProps> = ({
  filter,
  search,
}) => {
  const { data, isLoading, isRefetching } = useResultsQuery();

  return (
    <>
      {filter === "clinics" && (
        <DataListWrapper
          listIsUndefined={data === undefined ? true : false}
          isLoading={isLoading || isRefetching}
          listLength={data?.data.clinics.length || 0}
        >
          <Cols gap={10} type="auto" count={1}>
            {data?.data.clinics
              .filter((el) =>
                Object.values(el).some((value) => {
                  if (typeof value === "string") {
                    return value.toLowerCase().includes(search.toLowerCase());
                  }
                })
              )
              .map((el) => {
                return <Clinic key={el.id} data={el} />;
              })}
          </Cols>
        </DataListWrapper>
      )}

      {filter === "doctors" && (
        <DataListWrapper
          listIsUndefined={data === undefined ? true : false}
          isLoading={isLoading || isRefetching}
          listLength={data?.data.doctors.length || 0}
        >
          <Cols gap={10} type="auto" count={1}>
            {data?.data.doctors.map((el) => {
              return <div key={el.id}></div>;
            })}
          </Cols>
        </DataListWrapper>
      )}
    </>
  );
};
