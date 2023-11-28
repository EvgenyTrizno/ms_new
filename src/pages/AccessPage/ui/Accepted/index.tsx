import { FC } from "react";

import { Rows } from "@/shared/ui/Rows";
import { Row } from "@/shared/ui/Row";
import { Text } from "@/shared/ui/Text";
import { AddBtn } from "@/shared/ui/AddBtn";
import { User } from "../User";

export const Accepted: FC = () => {
    return (
        <Rows gap={10} rows={["auto"]}>
            <Row gap={0} style={{ justifyContent: "space-between" }}>
                <Text type="p" fz="14px" color="#7D7F82">
                    Принятые:
                </Text>
                <AddBtn />
            </Row>
            <User />
        </Rows>
    );
};
