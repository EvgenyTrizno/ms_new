import { FC } from "react";
import { Link } from "react-router-dom";

import { Text } from "@/shared/ui/Text";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Row } from "@/shared/ui/Row";

import styles from "./styles.module.scss";

export const Policy: FC = () => {
    return (
        <Row
            gap={10}
            style={{ alignItems: "initial", justifyContent: "center" }}
        >
            <Checkbox checked={false} onChange={() => ({})} />
            <Row gap={0}>
                <Text color="#7D7F82" type="p" fz="14px">
                    Я согласен со&nbsp;
                </Text>
                <Link to="/" className={styles.link}>
                    всеми условиями сайта
                </Link>
            </Row>
        </Row>
    );
};
