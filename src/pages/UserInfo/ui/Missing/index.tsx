import { FC } from "react";

import { Note } from "../Note";
import { NoteContainer } from "../NoteContainer";

export const Missing: FC = () => {
    return (
        <NoteContainer text="Пропущенные">
            <Note />
            <Note />
            <Note />
        </NoteContainer>
    );
};
