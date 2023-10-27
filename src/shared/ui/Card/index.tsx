import { FC } from "react";
import { ICard } from "./types";

import { MOBILE } from "@/shared/utils";
import { Avatar } from "@/shared/ui/Avatar";
import { Username } from "@/entities/User/ui/Username";
import { UserRank } from "@/entities/User/ui/UserRank";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "../Rows";

import woman from "/assets/woman.jpg";
import styles from "./styles.module.scss";

export const Card: FC<ICard> = ({ checkbox, onClick, name }) => {
    return (
        <WhiteContentBlock className={styles.card} onClick={onClick}>
            <Avatar type="user" img={woman} size="M" />
            <div className={styles.checkbox}>{checkbox}</div>
            <Rows gap={5} rows={["auto", "auto"]}>
                {!MOBILE && <Username name={name} />}
                <UserRank rank="Хирург" position="center" />
            </Rows>
        </WhiteContentBlock>
    );
};
