import { INotificationProps } from "../../types/types";

export type IReminderNotificationProps = Omit<
    INotificationProps,
    "typeIcon" | "img"
>;
