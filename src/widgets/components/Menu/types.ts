import { ReactElement } from "react";

export enum EActive {
    HOME = "/",
    SEARCH = "/search",
    SMS = "/messages",
    NOTE = "/notes",
    MEDICALCARD = "/medical-card",
    LOCATION = "/location",
    SETTINGS = "/settings",
    LOGOUT = "/logout",
    PROFILE = "/profile",
    USERS = "/users",
    CALENDAR = "/calendar",
}

export interface IData {
    id: string;
    label: string;
    path: EActive | string;
    icon: ReactElement;
}
export interface IMenuData {
    default: IData[];
    personal: IData[];
}
