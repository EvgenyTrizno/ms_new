export interface IExtraCallBtnPositionData {
    x: number;
    y: number;
}

export interface IExtraCallBtnIconData {
    healthy: string;
    sick: string;
}

export interface IExtraCallBtnData {
    icon: string;
    id: string;
    position: IExtraCallBtnPositionData;
}
