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
