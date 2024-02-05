import { useQuery } from "react-query";

import { getNotes } from "../../api/notes";

export const useNotesQuery = () => {
  return useQuery({ queryFn: getNotes, queryKey: ["notes"] });
};
