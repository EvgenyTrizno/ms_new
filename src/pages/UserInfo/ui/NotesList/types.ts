import { INote } from "@/shared/types/note.interface";

export interface INotesList {
    missing: INote[];
    current: INote[];
    umounted: INote[];
}
