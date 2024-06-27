
import { IUser } from ".";
export type Notification = {
    id: number;
    user?: IUser;
    text: string;
    created_at: Date;
};
