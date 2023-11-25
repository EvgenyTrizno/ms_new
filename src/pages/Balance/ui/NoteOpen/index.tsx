import { FC } from "react";

import { Step } from "../Step";
import { Cols } from "@/shared/ui/Cols";
import { Rows } from "@/shared/ui/Rows";
import { Row } from "@/shared/ui/Row";
import { Text } from "@/shared/ui/Text";

export const NoteOpen: FC = () => {
    return (
        <Rows gap={16} rows={["auto"]}>
            <Cols gap={10} type="auto" count={3}>
                <Step text="Первый этап" />
                <Step text="Второй этап" />
                <Step text="Третий этап" />
            </Cols>
            <Row gap={5} style={{ alignItems: "baseline" }}>
                <Text type="h4" fz="18px">
                    До конца выполнения заданий осталось
                </Text>
                <Text type="h2" fz="36px">
                    72:00
                </Text>
            </Row>
        </Rows>
    );
};
