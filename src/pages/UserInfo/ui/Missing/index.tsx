import { FC } from "react";

import { Note } from "../Note";
import { NoteContainer } from "../NoteContainer";
import { INote } from "@/shared/types/note.interface";

interface IMissingProps {
    missing: INote[];
}

export const Missing: FC<IMissingProps> = ({ missing }) => {
    return (
        <NoteContainer text="Пропущенные">
            {missing.map((item) => (
                <Note
                    doctor={item?.doctor.group.name}
                    name={`${item?.doctor.first_name} ${item?.doctor.last_name} ${item?.doctor.surname}`}
                    key={item?.id}
                />
            ))}
        </NoteContainer>
    );
};
