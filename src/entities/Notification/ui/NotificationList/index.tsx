import { FC } from "react";

import { useNotificationsQuery } from "../../lib/hooks/useNotificationsQuery";
import { Rows } from "@/shared/ui/Rows";

export const NotificationList: FC = () => {
    const { data } = useNotificationsQuery();

    return (
        <Rows gap={20} rows={["auto"]}>
            {data && !data.data.length
                ? "Список уведомлений пуст"
                : data && data.data.map((item) => <div>{item.text}</div>)}
        </Rows>
    );
};
