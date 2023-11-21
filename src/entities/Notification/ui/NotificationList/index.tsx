import { FC } from "react";

import { useNotificationsQuery } from "../../lib/hooks/useNotificationsQuery";
import { Rows } from "@/shared/ui/Rows";
import { NewsPostNotification } from "../NewsNotification";
import { MedCommentNotification } from "../MedCommentNotification";
import { ReminderNotification } from "../ReminderNotification";
import { CanceledNoteNotification } from "../CanceledNoteNotification";

import styles from "./styles.module.scss";

export const NotificationList: FC = () => {
    const { data } = useNotificationsQuery();

    const messages = {
        post: "Вышел новый пост у ",
        comment: "Комментарии к мед карте были получены",
        reminder: "Напоминание о записи",
        cenceled: "Запись была отклонена вашим центром",
    };

    const checkComment = (itemText: string, text: string) => {
        return itemText.indexOf(text) <= 0;
    };

    return (
        <Rows gap={20} rows={["auto"]} className={styles.list}>
            {data && !data.data.length
                ? "Список уведомлений пуст"
                : data &&
                  data.data.map((item) =>
                      checkComment(item.text, messages.post) ? (
                          <NewsPostNotification
                              key={item.id}
                              img={item.user.image}
                              date={item.created_at}
                              text={item.text}
                          />
                      ) : checkComment(item.text, messages.comment) ? (
                          <MedCommentNotification
                              key={item.id}
                              img={item.user.image}
                              text={item.text}
                              date={item.created_at}
                          />
                      ) : null
                  )}
            <ReminderNotification
                date={new Date().toISOString()}
                text={"Напоминание о записи завтра в 12:00"}
            />
            <CanceledNoteNotification
                date={new Date().toISOString()}
                text="Запись была отклонена вашим центром."
            />
        </Rows>
    );
};
