import { FC } from "react";

import { Rows } from "@/shared/ui/Rows";
import { Row } from "@/shared/ui/Row";
import { Text } from "@/shared/ui/Text";
import { User } from "../User";

export const NoAccepted: FC = () => {
    return (
        <Rows gap={10} rows={["auto"]}>
            <Row gap={0}>
                <Text type="p" fz="14px" color="#7D7F82">
                    Не Принятые:
                </Text>
            </Row>
            <User />
        </Rows>
    );
};
