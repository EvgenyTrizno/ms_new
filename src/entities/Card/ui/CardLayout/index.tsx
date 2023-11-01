import { FC } from "react";
import { ICardProps } from "./types";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";

import styles from "./styles.module.scss";

export const CardLayout: FC<ICardProps> = ({
    userAvatar,
    username,
    userRank,
}) => {
    return (
        <WhiteContentBlock className={styles.card}>
            {userAvatar}
            <Rows gap={5} rows={["auto", "auto"]}>
                {username}
                {userRank}
            </Rows>
        </WhiteContentBlock>
    );
};
