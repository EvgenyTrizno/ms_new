import { FC, useState } from "react";
import { ICard } from "../types";

import { MOBILE, SMALL_LAPTOP, PC } from "@/shared/utils";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";
import { Avatar } from "@/shared/ui/Avatar";

export const Card: FC<ICard> = ({ checkbox, onClick }) => {
    return (
        <div
            className={styles.card}
            onClick={onClick}
            // style={{
            //     borderColor: sick ? "#F7E6E8" : "",
            // }}
        >
            <Avatar type="user" />
            <div className={styles.checkbox}>{checkbox}</div>
            <div className={styles.box}>
                {!MOBILE && (
                    <Text
                        type="h3"
                        fz={PC ? "13px" : SMALL_LAPTOP ? "13px" : "13px"}
                    >
                        Михайлова Т. А.
                    </Text>
                )}
                <Text
                    type="p"
                    position="center"
                    fz={PC ? "12px" : MOBILE ? "10px" : "10px"}
                >
                    Хирург
                </Text>
            </div>
        </div>
    );
};
