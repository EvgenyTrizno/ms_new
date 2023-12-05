import { FC } from "react";

import { Text } from "@/shared/ui/Text";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { ServerStatsBlock } from "../ServerStatsBlock";
import { Cols } from "@/shared/ui/Cols";

export const ServerStats: FC = () => {
    return (
        <WhiteContentBlock>
            <Text
                type="h4"
                fz="18px"
                style={{ marginBottom: 12 }}
                position="center"
            >
                Сервер
            </Text>
            <Cols gap={12} count={3} type="auto">
                <ServerStatsBlock name="SSD" maxSize={12} />
                <ServerStatsBlock name="SSD" maxSize={12} />
                <ServerStatsBlock name="SSD" maxSize={12} />
            </Cols>
        </WhiteContentBlock>
    );
};
