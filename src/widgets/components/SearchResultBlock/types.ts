import { ReactNode } from "react";

export type TSearchTypes = "Центры" | "Клиники" | "Врачи";

export interface ISearchBlockProps {
    type: TSearchTypes;
    children?: ReactNode;
}
