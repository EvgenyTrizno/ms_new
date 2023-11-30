export type TFilter = "clinics" | "centers"; // "doctors";

export interface ISearchResultsListProps {
    filter: TFilter;
    search: string;
}
