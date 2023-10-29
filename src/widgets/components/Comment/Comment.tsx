import { FC } from "react";

import { Like } from "@/features/Like/ui";
import { Dislike } from "@/features/Dislike/Dislike";
import { Text } from "@/shared/ui/Text";
import { Rating } from "../../../features/Rating/ui";
import { IComment } from "./types";

import styles from "./Comment.module.scss";

export const Comment: FC<IComment> = ({ title, children, name }) => {
    return (
        <div className={styles.item}>
            <div className={styles.reaction}>
                <div className={styles.count}>
                    <Like />
                    <span>30</span>
                </div>
                <div className={styles.count}>
                    <Dislike />
                    <span>30</span>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.name}>
                    <Text type="h3" color="#7D7F82" fz="16px">
                        {name}
                    </Text>
                </div>
                <div className={styles.comment}>
                    <Text type="h2" fz="20px">
                        {title}
                    </Text>
                    <Text type="p" color="#7D7F82">
                        {children}
                    </Text>
                </div>
            </div>
            <div className={styles.rating}>
                <Rating defaultValue={4} disabled />
                <Text type="p" color="#7D7F82">
                    4.0
                </Text>
            </div>
        </div>
    );
};
