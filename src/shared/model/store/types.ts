export interface IDiseasesStore {
    diseases: string[];
    setDiseases: (arg: string) => void;
}

export type TIsSelect =
    | "Создать событие"
    | "Главная"
    | "Поиск"
    | "Аккаунт"
    | "Записи"
    | "Медицинская карта"
    | "Местоположение"
    | "Сообщения"
    | "Настройки";
export interface IMenuStore {
    isSelect: TIsSelect;
    setIsSelect: (arg: TIsSelect) => void;
}

export interface IFilterStore {
    isFilter: string;
    setIsFilter: (arg: string) => void;
}

export interface IExtraCall {
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
}

export type TUserConditionStatus = "Здоров" | "Болен";
export interface IUserCondition {
    condition: TUserConditionStatus;
    setCondition: (arg: TUserConditionStatus) => void;
}

export interface INotificationStore {
    isNotification: boolean;
    setIsNotification: (bool: boolean) => void;
}

export type TGroups = "Пользователи" | "Врачи" | "Администраторы";

export interface IUserPosition {
    lat: number;
    lng: number;
    city: string;
    counrty: string;
}

export interface IUserData {
    center_id: number[];
    disease_id: number[];
    group: TGroups;
    number: string;
    position: IUserPosition;
    setCenter: (centerId: number) => void;
    setDiseases: (diseaseId: number) => void;
    setGroup: (group: TGroups) => void;
    setNumber: (phone: string) => void;
    setPosition: (
        lat: number,
        lng: number,
        city: string,
        counrty: string
    ) => void;
}

export interface IIsProfile {
    isProfile: boolean;
    setIsProfile: (arg: boolean) => void;
}
