import { useQuery } from "react-query";

import { getPost } from "../../api/posts";

export const usePostsQuery = () => {
    return useQuery({ queryFn: getPost, queryKey: ["posts"] });
};
