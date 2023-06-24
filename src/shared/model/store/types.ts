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
