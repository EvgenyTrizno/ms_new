import { FC } from "react";
import { IVerifyBlockProps } from "./types";

import { Text } from "@/shared/ui/Text";
import { Image } from "@/shared/ui/Image";

import circleDefault from "./assets/tick-circle.svg";
import circleVerify from "./assets/tick-circle-verify.svg";
import styles from "./styles.module.scss";

export const Layout: FC<IVerifyBlockProps> = ({ input, verify, text }) => {
    return (
        <div className={`${styles.protection} ${verify && styles.verify}`}>
            <Text type="p" fz="14px" color="#7D7F82">
                {text}
            </Text>
            {input}
            <Image src={!verify ? circleDefault : circleVerify} alt="" />
        </div>
    );
};
