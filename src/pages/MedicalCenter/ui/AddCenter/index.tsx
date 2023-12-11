import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { FC } from "react";
import { AddBtn } from "../AddBtn";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";

export const AddCenter: FC = () => {
    return (
        <WhiteContentBlock style={{ padding: "24px 18px", width: "100%" }}>
            <Rows gap={24} rows={["auto"]}>
                <Text type="h5" color="#7D7F82" position="center">
                    Вы ещё не добавляли дополнительных центров
                </Text>
                <div style={{ margin: "0 auto" }}>
                    <AddBtn />
                </div>
            </Rows>
        </WhiteContentBlock>
    );
};
