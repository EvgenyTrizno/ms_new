import { FC, useEffect } from "react";
import { MarkerF } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { IGeocoderData } from "./types";

import { Map } from "@/widgets";

export const SelectCenterMap: FC = () => {
    useEffect(() => {
        const permission = "geolocation" in navigator;

        if (permission === true) {
            navigator.geolocation.getCurrentPosition(
                (pos: GeolocationPosition) => {
                    const { latitude, longitude } = pos.coords;
                    let city = "";
                    let country = "";

                    Geocode.setApiKey(import.meta.env.VITE_GOOGLE_MAP_API_KEY);
                    Geocode.setLanguage("ru");
                    Geocode.fromLatLng(
                        latitude.toString(),
                        longitude.toString()
                    ).then((res: IGeocoderData) => {
                        const addressComponents =
                            res.results[0].address_components;

                        for (const data of addressComponents) {
                            if (data.types.includes("locality")) {
                                city = data.long_name;
                            } else if (data.types.includes("country")) {
                                country = data.long_name;
                            }
                        }
                    });
                },
                (error: GeolocationPositionError) => {
                    console.error("Ошибка при получении геолокации:", error);
                }
            );
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Map
            width="100%"
            height="430px"
            position={{
                lat: 0,
                lng: 0,
            }}
            zoom={5}
        >
            <MarkerF
                position={{
                    lat: 0,
                    lng: 0,
                }}
            />
            <MarkerF
                // key={item.id}
                position={{
                    lat: 0,
                    lng: 0,
                }}
            />
        </Map>
    );
};
