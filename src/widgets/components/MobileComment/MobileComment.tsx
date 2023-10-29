import { FC } from "react";

import { Like } from "@/features/Like/ui";
import { Dislike } from "@/features/Dislike/Dislike";
import { Text } from "@/shared/ui/Text";

import styles from "./MobileComment.module.scss";
import { Rating } from "../../../features/Rating/ui";

export const MobileComment: FC = () => {
    return (
        <div className={styles.comment}>
            <div className={styles.reactions}>
                <div className={styles.box}>
                    <Like />
                    <span>30</span>
                </div>
                <div className={styles.box}>
                    <Dislike />
                    <span>30</span>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <Text type="p" fz="12px" color="#7D7F82">
                        Александр Петров
                    </Text>
                    <Text type="h2" fz="17px">
                        Классные специалисты!
                    </Text>
                </div>
                <div className={styles.descr}>
                    <Text type="p" color="#7D7F82" fz="12px">
                        Lorem Ipsum является текст-заполнитель обычно
                        используется в графических, печать и издательской
                        индустрии для...
                    </Text>
                </div>
            </div>
            <div className={styles.rating}>
                <Rating defaultValue={4} disabled width="20px" height="20px" />
                <Text type="p" fz="13px">
                    4.0
                </Text>
            </div>
        </div>
    );
};
