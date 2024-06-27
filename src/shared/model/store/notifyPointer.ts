import { Notification } from "@/shared/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface INotifyPointerStore {
    notification: null | Notification;
    setNotification: (notification: null | Notification) => void;
}

export const useNotifyPointer = create<INotifyPointerStore>()(
    immer((set) => ({
        notification: null,
        setNotification: (notification: Notification | null) => {
            set((state) => {
                state.notification = notification;
            });
        },
    }))
);




