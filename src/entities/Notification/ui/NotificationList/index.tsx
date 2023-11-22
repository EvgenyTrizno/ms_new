import { FC } from "react";

import { useNotificationsQuery } from "../../lib/hooks/useNotificationsQuery";
import { Rows } from "@/shared/ui/Rows";
import { NewsPostNotification } from "../NewsNotification";
import { MedCommentNotification } from "../MedCommentNotification";
import { ReminderNotification } from "../ReminderNotification";
import { CanceledNoteNotification } from "../CanceledNoteNotification";

import styles from "./styles.module.scss";
import { FeedbackNotification } from "../FeedbackNotification";
import { CommentNotification } from "../CommentNotification";
import { AdditionalCheckNotification } from "../AdditionalCheckNotification";
import { SubsNotification } from "../SubsNotification";
import { CraeteNoteNotification } from "../CreateNoteNotification";
import { NewUserNotification } from "../NewUserNotification";
import { AdedNewDoctorNotification } from "../AddedNewDoctorNotification";
import { ExtracallNotification } from "../ExtracallNotification";
import { AddedCenterNotification } from "../AddedCenterNotification";
import { FineNotification } from "../FineNotification";

export const NotificationList: FC = () => {
    const { data } = useNotificationsQuery();

    const messages = {
        post: "Вышел новый пост у ",
        commentMed: "Комментарии к мед карте были получены",
        reminder: "Напоминание о записи",
        cenceled: "Запись была отклонена вашим центром",
        feedback: "Был получен новый отзыв",
        comment: "Был получен комментарий от",
        additional: "Требуется дополнительная проверка записи ",
        subs: "На вас подписался",
        createNote: "создал запись в вашу клинику",
        newUser: "Добавился новый пользователь к вам в ведущий центр",
        doctor: "К вам в центр был добавлен новый врач",
        extra: "звонил экстренно в скорую",
        addedCenter: "Ваш центр был добавлен дополнительным центром у",
        fine: "Ваша клиника была оштрафована",
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
                      ) : checkComment(item.text, messages.commentMed) ? (
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
            <FeedbackNotification />
            <CommentNotification />
            <AdditionalCheckNotification />
            <SubsNotification />
            <CraeteNoteNotification />
            <NewUserNotification />
            <AdedNewDoctorNotification />
            <ExtracallNotification />
            <AddedCenterNotification />
            <FineNotification />
        </Rows>
    );
};
