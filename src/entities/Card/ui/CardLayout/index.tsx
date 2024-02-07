import { FC } from "react";
import { ICardProps } from "./types";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";

import styles from "./styles.module.scss";

export const CardLayout: FC<ICardProps> = ({
  userAvatar,
  userRank,
}) => {
  return (
    <WhiteContentBlock className={styles.card}>
      {userAvatar}
      {userRank}
    </WhiteContentBlock>
  );
};
