import { FC } from "react";

import { NoteContainer } from "../NoteContainer";
import { Note } from "../Note";

export const Current: FC = () => {
    return (
        <NoteContainer text="Текущие">
            <Note />
            <Note />
            <Note />
        </NoteContainer>
    );
};
