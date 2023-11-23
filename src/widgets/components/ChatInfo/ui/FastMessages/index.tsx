import { FC } from "react";

import { Input } from "@/shared/ui/Input";
import { Rows } from "@/shared/ui/Rows";
import { Row } from "@/shared/ui/Row";
import { CreateBtn } from "../CreateBtn";

export const FastMessages: FC = () => {
    return (
        <Rows gap={8} rows={["auto"]}>
            <Row gap={8}>
                <Input
                    type="text"
                    placeholder="Новый быстрый ответ"
                    padding="12px 16px"
                />
                <CreateBtn />
            </Row>
        </Rows>
    );
};
