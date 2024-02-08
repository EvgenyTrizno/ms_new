import { INote } from "@/shared/types/notes.types";

export interface INotesList {
    missing: INote[];
    current: INote[];
    umounted: INote[];
}
