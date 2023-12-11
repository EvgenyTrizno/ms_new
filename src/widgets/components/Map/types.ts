import { ReactNode } from "react";

export interface IPosition {
    lat: number;
    lng: number;
}
export interface IMap {
    width?: string | number;
    height?: string | number;
    children?: ReactNode;
    position?: IPosition;
    zoom?: number;
    mapStyles?: google.maps.MapTypeStyle[];
}
