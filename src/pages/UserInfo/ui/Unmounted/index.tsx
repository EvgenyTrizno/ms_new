import { FC } from "react";

import { NoteContainer } from "../NoteContainer";
import { Note } from "../Note";

export const Unmounted: FC = () => {
    return (
        <NoteContainer text="Не установленные">
            <Note />
            <Note />
            <Note />
        </NoteContainer>
    );
};
