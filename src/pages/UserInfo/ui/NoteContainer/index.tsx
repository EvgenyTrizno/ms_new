import { FC, PropsWithChildren } from "react";

import { BlueBox } from "@/shared/ui/BlueBox";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";

export const NoteContainer: FC<PropsWithChildren & { text: string }> = ({
    children,
    text,
}) => {
    return (
        <BlueBox>
            <Rows gap={16} rows={["auto"]}>
                <Text type="h5" fz="16px">
                    {text}
                </Text>
                {children}
            </Rows>
        </BlueBox>
    );
};
