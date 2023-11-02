export interface IPlusCodeData {
    compound_code: string;
    global_code: string;
}

export interface IGeocoderData extends google.maps.GeocoderResponse {
    plus_code: IPlusCodeData;
    status: string;
}
