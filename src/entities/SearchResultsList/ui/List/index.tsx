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
  const { data, isLoading } = useResultsQuery();

  return (
    <>
      {filter === "clinics" && (
        <DataListWrapper
          listIsUndefined={data === undefined ? true : false}
          isLoading={isLoading}
          listLength={data?.data.clinics.length || 0}
        >
          <Cols gap={10} type="auto" count={1}>
            {data?.data.clinics.map((el) => {
              return <Clinic data={el} />;
            })}
          </Cols>
        </DataListWrapper>
      )}

      {filter === "centers" && (
        <DataListWrapper
          listIsUndefined={data === undefined ? true : false}
          isLoading={isLoading}
          listLength={data?.data.centers.length || 0}
        >
          <Cols gap={10} type="auto" count={1}>
            {data?.data.centers.map((el) => {
              return <div></div>;
            })}
          </Cols>
        </DataListWrapper>
      )}

      {filter === "doctors" && (
        <DataListWrapper
          listIsUndefined={data === undefined ? true : false}
          isLoading={isLoading}
          listLength={data?.data.doctors.length || 0}
        >
          <Cols gap={10} type="auto" count={1}>
            {data?.data.doctors.map((el) => {
              return <div></div>;
            })}
          </Cols>
        </DataListWrapper>
      )}
    </>
  );
};
