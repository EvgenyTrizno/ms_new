import { NoteBlock } from "@/entities";
import { useQuery } from "react-query";
import { getNotes } from "@/shared/api";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { DataListWrapper } from "@/widgets/components/DataListWrapper";


type NotesListProps = {
    filter: string
}

export const NotesList = (props: NotesListProps) => {
    const { getCookie } = useCookie();
    const { data: notesData } = useQuery(
        ["notes"],
        () => getNotes(getCookie("access_token") as string),
        {
            keepPreviousData: true,
            staleTime: 5 * 60 * 1000,
            cacheTime: 30 * 60 * 1000,
        }
    );

    return (
        <DataListWrapper
            listIsUndefined={!notesData?.data ? true : false}
            listLength={notesData?.data.length || 0}
            emptyText="Нет записей"
        >
            {props.filter == "Текущие" ?
                <>
                    {notesData?.data.
                        filter((note) => Date.parse(note.time_start) > Date.now()).
                        map((note) => (
                            <NoteBlock key={note.id} data={note} />
                        ))}
                </> : <>
                    {notesData?.data.
                        map((note) => (
                            <NoteBlock key={note.id} data={note} />
                        ))}

                </>

            }
        </DataListWrapper>
    );
};
