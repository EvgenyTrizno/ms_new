import { Dispatch, SetStateAction } from "react";

export interface IPlusCodeData {
    compound_code: string;
    global_code: string;
}

export interface IGeocoderData extends google.maps.GeocoderResponse {
    plus_code: IPlusCodeData;
    status: string;
}

export interface IMapProps {
    allowed: boolean;
    city: string;
    setCenter: Dispatch<SetStateAction<number>>;
}
