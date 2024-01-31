import { FC } from "react";
import { IDoctorCardProps } from "./types";

import { CardLayout } from "@/entities/Card";
import { Username, UserRank } from "@/entities/User/ui";
import { getFullUsernameWithInitials } from "@/entities/User/lib/helpers/getFullUsernameWithInitials";
import { Avatar } from "@/shared/ui/Avatar";
import { LAPTOP, MOBILE } from "@/shared/utils";

export const DoctorCard: FC<IDoctorCardProps> = ({
  name,
  surname,
  patronymic,
  avatar,
  rank,
}) => {
  const surnameLength = surname.length >= 8;

  return (
    <CardLayout
      username={
        !MOBILE && (
          <Username
            name={
              surnameLength
                ? `${surname}...`
                : getFullUsernameWithInitials(surname, name, patronymic)
            }
            fz="12px"
          />
        )
      }
      userAvatar={<Avatar type="user" img={avatar} size="M" />}
      userRank={
        <UserRank
          rank={rank}
          position="center"
          fz={LAPTOP ? "10px" : MOBILE ? "12px" : "14px"}
        />
      }
    />
  );
};
