import { INotificationLayoutProps } from "../../types/types";

export type INewPostNotificationProps = Omit<
    INotificationLayoutProps,
    "typeIcon"
>;
