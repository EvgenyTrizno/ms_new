import { IUserData } from ".";

export type Notification = {
  id: number;
  user?: IUserData;
  text: string;
  created_at: Date;
};
