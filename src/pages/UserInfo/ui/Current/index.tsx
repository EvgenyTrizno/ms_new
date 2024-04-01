import { FC } from "react";

import { NoteContainer } from "../NoteContainer";
import { Note } from "../Note";
import { INote } from "@/shared/types/notes.types";

interface ICurrentProps {
    current: INote[];
}

export const Current: FC<ICurrentProps> = ({ current }) => {
    return (
        <NoteContainer text="Текущие">
            {current.map((item) => (
                <Note
                    doctor={item?.doctor.group?.name || "-"}
                    name={`${item?.doctor.first_name} ${item?.doctor.last_name} ${item?.doctor.surname}`}
                    key={item?.id}
                />
            ))}
        </NoteContainer>
    );
};
