import { FC } from "react";

import { Rows } from "@/shared/ui/Rows";
import { MailLayout, MailHeader } from "@/widgets";
import { IMailViewProps } from "./types";

export const MailView: FC<IMailViewProps> = ({
    messages,
    withHeader,
    date,
    gap,
}) => {
    return (
        <MailLayout>
            {withHeader && (
                <div style={{ marginBottom: gap }}>
                    <MailHeader date={date} />
                </div>
            )}
            <Rows gap={0} rows={["auto"]}>
                {messages}
            </Rows>
        </MailLayout>
    );
};
