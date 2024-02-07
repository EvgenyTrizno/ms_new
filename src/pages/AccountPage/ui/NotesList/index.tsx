import { NoteBlock } from "@/entities";
import styles from "./styles.module.scss";
import { useQuery } from "react-query";
import { getNotes } from "@/shared/api";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { DataListWrapper } from "@/widgets/components/DataListWrapper";

export const NotesList = () => {
  const { getCookie } = useCookie();
  const {
    data: notesData,
    isLoading: notesIsLoading,
    isRefetching: notesIsRefetching,
  } = useQuery(["notes"], () => getNotes(getCookie("access_token") as string), {
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
  });

  const notesLoading = notesIsLoading || notesIsRefetching;

  return (
    <div className={styles.notesList}>
      <DataListWrapper
        listIsUndefined={notesData?.data.length === undefined ? true : false}
        isLoading={notesLoading}
        listLength={notesData?.data.length || 0}
        emptyText="Нет записей"
      >
        <>
          {notesData?.data.map((note) => (
            <NoteBlock key={note.id} data={note} />
          ))}
        </>
      </DataListWrapper>

      {notesData?.data.map((note) => (
        <NoteBlock key={note.id} data={note} />
      ))}
    </div>
  );
};
