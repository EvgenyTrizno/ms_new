import { FC } from "react";
import { INoteProps } from "./types";

import { Rows } from "@/shared/ui/Rows";
import { Avatar } from "@/shared/ui/Avatar";
import { InfoText } from "@/shared/ui/InfoText";
import { Row } from "@/shared/ui/Row";
import { Text } from "@/shared/ui/Text";

export const Note: FC<INoteProps> = ({ doctor, name }) => {
    return (
        <Rows gap={10} rows={["auto"]}>
            <Row gap={10}>
                <Avatar img="" size="S" type="user" />
                <Rows gap={5} rows={["auto"]}>
                    <Text type="h5" fz="15px">
                        {doctor}
                    </Text>
                    <Text type="p" fz="14px">
                        {name}
                    </Text>
                </Rows>
            </Row>
            <Row gap={0} style={{ justifyContent: "space-between" }}>
                <Text type="p" fz="14px" color="#7D7F82">
                    23.07.23
                </Text>
                <InfoText text="Перейти к записи" />
            </Row>
        </Rows>
    );
};
