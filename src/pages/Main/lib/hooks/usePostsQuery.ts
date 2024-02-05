import { useQuery } from "react-query";

import { getPost } from "../../api/posts";

export const usePostsQuery = () => {
  return useQuery({
    queryFn: getPost,
    queryKey: ["posts"],
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
  });
};
