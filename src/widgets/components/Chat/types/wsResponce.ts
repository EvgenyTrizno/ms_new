import { ACTIONS } from "../utils/actions";

interface IUser {
    first_name: string | null;
    number: string;
}

type Keys = keyof typeof ACTIONS;

export interface IWSResponse {
    action: (typeof ACTIONS)[Keys];
    chat: string;
    online_users: IUser[];
}
