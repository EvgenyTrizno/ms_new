import { NoteBlock } from "@/entities";
import styles from "./styles.module.scss";
import { useQuery } from "react-query";
import { getNotes } from "@/shared/api";
import { useCookie } from "@/shared/lib/hooks/useCookie";

export const NotesList = () => {
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
    <div className={styles.notesList}>
      {notesData?.data.map((note) => (
        <NoteBlock key={note.id} data={note} />
      ))}
    </div>
  );
};
