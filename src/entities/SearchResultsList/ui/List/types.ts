export type TFilter = "clinics" | "centers" | "doctors" | "services";

export interface ISearchResultsListProps {
    filter: TFilter;
    search: string;
}
