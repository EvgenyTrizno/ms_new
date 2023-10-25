import { FC } from "react";
import { ICard } from "../types";

import { MOBILE } from "@/shared/utils";
import { Avatar } from "@/shared/ui/Avatar";
import { Username } from "@/shared/ui/Username";
import { UserRank } from "@/shared/ui/UserRank";

import styles from "./styles.module.scss";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";

export const Card: FC<ICard> = ({ checkbox, onClick, name }) => {
    return (
        <WhiteContentBlock className={styles.card} onClick={onClick}>
            <Avatar type="user" />
            <div className={styles.checkbox}>{checkbox}</div>
            <div className={styles.box}>
                {!MOBILE && <Username name={name} />}
                <UserRank rank="Хирург" />
            </div>
        </WhiteContentBlock>
    );
};
