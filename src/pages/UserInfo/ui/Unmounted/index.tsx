import { FC } from "react";

import { NoteContainer } from "../NoteContainer";
import { Note } from "../Note";
import { INote } from "@/shared/types/note.interface";

interface IUmounted {
    umounted: INote[];
}

export const Unmounted: FC<IUmounted> = ({ umounted }) => {
    return (
        <NoteContainer text="Не установленные">
            {umounted.map((item) => (
                <Note
                    doctor={item?.doctor?.group?.name}
                    name={`${item?.doctor.first_name} ${item?.doctor.last_name} ${item?.doctor.surname}`}
                    key={item?.id}
                />
            ))}
        </NoteContainer>
    );
};
