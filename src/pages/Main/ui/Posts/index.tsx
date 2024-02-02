import { FC } from "react";
import { useNavigate } from "react-router";

import { Rows } from "@/shared/ui/Rows";
import { usePostsQuery } from "../../lib/hooks/usePostsQuery";
import { UserPost } from "@/widgets/components/UserPost";
import { MOBILE } from "@/shared/utils";

export const Posts: FC = () => {
  const { data } = usePostsQuery();
  const navigate = useNavigate();

  return (
    <Rows gap={10} rows={["auto"]} style={{ width: MOBILE ? "100%" : "" }}>
      {data &&
        data.data.map((item) => (
          <UserPost
            key={item.id}
            onClick={
              item.center
                ? () => navigate(`/center/${item.center?.id}/`)
                : () => navigate(`/clinic/${item.clinic?.id}/`)
            }
            creator={item.center ? "Центр" : "Клиника"}
            text={item.text}
            img={item.image}
            avatar={
              (!item.clinic ? item.center?.image : item.clinic.image) ?? ""
            }
            name={(!item.clinic ? item.center?.name : item.clinic.name) ?? ""}
          />
        ))}
    </Rows>
  );
};
