import { INote } from "@/shared/types/notes";

export interface INotesList {
    missing: INote[];
    current: INote[];
    umounted: INote[];
}
