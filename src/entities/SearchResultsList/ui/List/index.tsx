import { FC } from "react";
import { useResultsQuery } from "../../lib/hooks/useResultsQuery";
import { ISearchResultsListProps } from "./types";
import { Clinic } from "@/widgets";
import { DataListWrapper } from "@/widgets/components/DataListWrapper";
import { useNavigate } from "react-router";
import { DoctorMore } from "@/entities";
import styles from "./styles.module.scss";

export const SearchResultsList: FC<ISearchResultsListProps> = ({
  filter,
  search,
}) => {
  const { data, isLoading, isRefetching } = useResultsQuery();
  const navigate = useNavigate();

  return (
    <>
      {filter === "clinics" && (
        <DataListWrapper
          listIsUndefined={data === undefined ? true : false}
          isLoading={isLoading || isRefetching}
          listLength={data?.data.clinics.length || 0}
        >
          <div className={styles.list}>
            {data?.data.clinics
              .filter((el) =>
                Object.values(el).some((value) => {
                  if (typeof value === "string") {
                    return value.toLowerCase().includes(search.toLowerCase());
                  }
                })
              )
              .map((el) => {
                return (
                  <Clinic
                    key={el.id}
                    data={el}
                    onClick={() => navigate(`/clinic/${el.id}`)}
                  />
                );
              })}
          </div>
        </DataListWrapper>
      )}

      {filter === "doctors" && (
        <DataListWrapper
          listIsUndefined={data === undefined ? true : false}
          isLoading={isLoading || isRefetching}
          listLength={data?.data.doctors.length || 0}
        >
          <div className={styles.list}>
            {data?.data.doctors
              .filter((el) =>
                Object.values(el).some((value) => {
                  if (typeof value === "string") {
                    return value.toLowerCase().includes(search.toLowerCase());
                  }
                })
              )
              .map((el) => {
                return <DoctorMore key={el.id} data={el} />;
              })}
          </div>
        </DataListWrapper>
      )}
    </>
  );
};
