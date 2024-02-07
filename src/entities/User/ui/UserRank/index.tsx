import { FC } from "react";
import { IUserRankProps } from "./types";
import styles from "./styles.module.scss";

import { Text } from "../../../../shared/ui/Text";

export const UserRank: FC<IUserRankProps> = ({
  rank,
  position,
  fz = "14px",
}) => {
  return (
    <Text
      className={styles.text}
      type="p"
      fz={fz}
      color="#B1B2B4"
      position={position}
    >
      {rank}
    </Text>
  );
};
