import { FC } from "react";
import { INoteParamProps } from "./types";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Text } from "@/shared/ui/Text";
import { Switch } from "@/shared/ui/Switch/Switch";
import { Row } from "@/shared/ui/Row";

import styles from "./styles.module.scss";

export const NoteParam: FC<INoteParamProps> = ({
    title,
    subtitle,
    content,
}) => {
    return (
        <WhiteContentBlock className={styles.item}>
            <Row gap={0} style={{ justifyContent: "space-between" }}>
                <Text type="p">{title}</Text>
                <Switch />
            </Row>
            <div className={styles.content} style={{ height: 0 }}>
                <div style={{ minHeight: 0 }}>
                    <div
                        className={styles.label}
                        style={{
                            transition: "ease .5s",
                            pointerEvents: "none",
                            opacity: 0,
                        }}
                    >
                        <Text type="p" fz="15px" color="#7D7F82">
                            {subtitle}
                        </Text>
                    </div>
                    {content}
                </div>
            </div>
        </WhiteContentBlock>
    );
};
