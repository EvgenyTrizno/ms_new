import { FC } from "react";

import { Rows } from "@/shared/ui/Rows";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Text } from "@/shared/ui/Text";
import { useStatsQuery } from "../../lib/hooks/useStatsQuery";

export const SiteVisit: FC = () => {
    const { data } = useStatsQuery();

    return (
        <Rows
            gap={10}
            rows={["auto"]}
            style={{ justifyContent: "space-between" }}
        >
            <WhiteContentBlock>
                <Rows gap={12} rows={["auto"]}>
                    <Text type="h4">Посещений за сутки</Text>
                    <Text type="h2" fz="24px">
                        13,856
                    </Text>
                </Rows>
            </WhiteContentBlock>
            <WhiteContentBlock>
                <Rows gap={12} rows={["auto"]}>
                    <Text type="h4">Зарегестрированные за сутки</Text>
                    <Text type="h2" fz="24px">
                        {data && data.data.created_today}
                    </Text>
                </Rows>
            </WhiteContentBlock>
            <WhiteContentBlock>
                <Rows gap={12} rows={["auto"]}>
                    <Text type="h4">Удаленные аккаунты за сутки</Text>
                    <Text type="h2" fz="24px">
                        13,856
                    </Text>
                </Rows>
            </WhiteContentBlock>
        </Rows>
    );
};
