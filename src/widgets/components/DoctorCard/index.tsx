import { FC } from "react";
import { IDoctorCardProps } from "./types";

import { CardLayout } from "@/entities/Card";
import { UserRank } from "@/entities/User/ui";
import { Avatar } from "@/shared/ui/Avatar";
import { MOBILE } from "@/shared/utils";

export const DoctorCard: FC<IDoctorCardProps> = ({ avatar, rank }) => {
  return (
    <CardLayout
      userAvatar={<Avatar type="user" img={avatar} size="M" />}
      userRank={
        <UserRank rank={rank} position="center" fz={MOBILE ? "10px" : "14px"} />
      }
    />
  );
};
