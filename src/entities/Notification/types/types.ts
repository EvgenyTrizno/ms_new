import { ReactNode } from "react";

export interface INotificationLayoutProps {
    img: string | ReactNode;
    date: string;
    text: string;
    typeIcon: ReactNode;
}

export type INotificationProps = Omit<INotificationLayoutProps, "typeIcon">;
