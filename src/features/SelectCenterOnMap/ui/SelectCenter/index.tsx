import { FC, useEffect, useState } from "react";
import Geocode from "react-geocode";
import { IGeocoderData } from "../Map/types";

import { Rows } from "@/shared/ui/Rows";
import { DistanceText } from "../DistanceText";
import { SelectCenterMap } from "../Map";
import { SetCondition } from "../SetCondition";
import { Btn } from "@/shared/ui/Btn";

export const SelectCenter: FC = () => {
    const [isMap, setIsMap] = useState<boolean>(false);
    const [city, setCity] = useState<string>("");
    const [condition, setCondition] = useState<"Здоров" | "Болен">("Здоров");

    useEffect(() => {
        const permission = "geolocation" in navigator;

        if (permission) {
            navigator.geolocation.getCurrentPosition(
                (pos: GeolocationPosition) => {
                    const { latitude, longitude } = pos.coords;
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
                                setCity(data.long_name);
                            } else if (data.types.includes("country")) {
                                country = data.long_name;
                            }
                        }
                    });

                    setIsMap(permission);
                }
            );
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Rows gap={20} rows={["auto"]}>
            <DistanceText />
            {isMap && <SelectCenterMap city={city} allowed={isMap} />}
            <SetCondition setCondition={setCondition} />
            <Btn color="#0064FA">Продолжить</Btn>
        </Rows>
    );
};
