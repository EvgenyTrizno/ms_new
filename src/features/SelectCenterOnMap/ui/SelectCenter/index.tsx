import { FC, useEffect, useState } from "react";
import Geocode from "react-geocode";
import { IGeocoderData } from "../Map/types";
import { TCondition } from "@/shared/types/condition.type";

import { Rows } from "@/shared/ui/Rows";
import { DistanceText } from "../DistanceText";
import { SelectCenterMap } from "../Map";
import { SetCondition } from "../SetCondition";
import { Btn } from "@/shared/ui/Btn";
import { PickDisease } from "@/features/PickDisease";
import { useSelectCenterMutate } from "../../lib/hooks/useSelectCenterMutate";

export const SelectCenter: FC = () => {
    const [isMap, setIsMap] = useState<boolean>(false);
    const [city, setCity] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [main_center, setMain_center] = useState<number>(0);
    const [condition, setCondition] = useState<TCondition>("Здоров");
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [disease, setDisease] = useState<number[]>([]);

    const { mutate } = useSelectCenterMutate(2, disease, city, main_center);

    console.log(city, country);

    useEffect(() => {
        const permission = "geolocation" in navigator;

        if (permission) {
            navigator.geolocation.getCurrentPosition(
                (pos: GeolocationPosition) => {
                    const { latitude, longitude } = pos.coords;

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
                                setCountry(data.long_name);
                            }
                        }
                    });

                    setIsMap(permission);
                }
            );
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = () => {
        if (condition === "Болен") {
            setIsOpenModal(true);
        }
    };

    console.log(disease);

    return (
        <Rows gap={20} rows={["auto"]}>
            <DistanceText />
            {isMap && (
                <SelectCenterMap
                    city={"Москва"}
                    allowed={isMap}
                    setCenter={setMain_center}
                />
            )}
            <SetCondition condition={condition} setCondition={setCondition} />
            <Btn
                color="#0064FA"
                onClick={handleClick}
                disabled={main_center === 0}
            >
                Продолжить
            </Btn>
            <PickDisease
                setDisease={setDisease}
                setIsOpenModal={setIsOpenModal}
                text="Интерес к какому заболеванию у вас имеется?"
                btns={
                    <>
                        <Btn
                            color="transparent"
                            textColor="#0064FA"
                            border="1px solid #0064FA"
                            onClick={() => setIsOpenModal(false)}
                        >
                            Отсутствует
                        </Btn>
                        <Btn color="#0064FA" onClick={() => mutate()}>
                            Продолжить
                        </Btn>
                    </>
                }
                isOpen={isOpenModal}
            />
        </Rows>
    );
};
