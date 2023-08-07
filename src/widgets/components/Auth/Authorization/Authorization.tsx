import { FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// import { useNavigate } from "react-router";
import { MarkerF } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { IGeocoderData } from "./types";
import { IVirusListData } from "@/shared/api/Virus/types";

import {
    Btn,
    Checkbox,
    Filter,
    MobileFilter,
    MobileSearch,
    Text,
} from "@/shared";
import { Modal } from "../../Modal/Modal";
import { useLocation } from "@/shared/hooks";
import { Map } from "../../Map/Map";
import { useFilter } from "@/shared/model/store";
import { MOBILE_SCREEN } from "@/shared/utils";
import { MobileModal } from "../../MobileModal/MobileModal";
import { ICentersData } from "@/shared/api/Centers/types";
import { useUserData } from "@/shared/model/store";
import { Centers } from "@/shared/api/Centers";
import { Auth } from "@/shared/api/Auth";
import { Virus } from "@/shared/api/Virus";

import styles from "./Authorization.module.scss";

export const Authorization: FC = () => {
    const [hasPermission, setHasPermission] = useState<boolean>(false);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [centers, setCenters] = useState<ICentersData[]>([]);
    const [distance, setDistance] = useState<string>("");
    const [virus, setVirus] = useState<IVirusListData[]>([]);
    const [value, setValue] = useState<string>("");
    const [filteredVirus, setFilteredVirus] = useState<IVirusListData[]>([]);

    const { getLocation } = useLocation();
    const { getVirusList } = Virus();

    // const navigate = useNavigate();
    const { isFilter } = useFilter();
    const {
        setPosition,
        position,
        pass1,
        pass2,
        number,
        group,
        setCenter,
        main_center,
    } = useUserData();
    const { getCentersByCity } = Centers();
    const { registration } = Auth();

    getLocation();

    useEffect(() => {
        const permission = "geolocation" in navigator;
        setHasPermission(!permission);

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
                        setHasPermission(true);
                        const addressComponents =
                            res.results[0].address_components;

                        for (const data of addressComponents) {
                            if (data.types.includes("locality")) {
                                city = data.long_name;
                            } else if (data.types.includes("country")) {
                                country = data.long_name;
                            }
                        }

                        getCentersByCity("Москва" || position.city).then(
                            (res) => setCenters(res)
                        );
                    });

                    setPosition(latitude, longitude, city, country);
                },
                (error: GeolocationPositionError) => {
                    console.error("Ошибка при получении геолокации:", error);
                    setHasPermission(false);
                }
            );
        } else {
            setHasPermission(false);
        }

        return () => {
            setHasPermission(false);
            setIsOpenModal(false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setPosition, position.city]);

    useEffect(() => {
        try {
            if (google && centers.length > 0 && position.lat && position.lng) {
                setDistance(
                    (
                        +google.maps.geometry.spherical.computeDistanceBetween(
                            { lat: position.lat, lng: position.lng },
                            { lat: +centers[0].lat, lng: +centers[0].lng }
                        ) / 1000
                    ).toFixed()
                );
            }
            // eslint-disable-next-line no-empty
        } catch (e) {}
    }, [centers, position.lat, position.lng]);

    useEffect(() => {
        isOpenModal &&
            virus.length === 0 &&
            getVirusList().then((res) => setVirus(res));

        return () => {
            setFilteredVirus([]);
            setValue("");
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpenModal]);

    useEffect(() => {
        value &&
            setFilteredVirus(
                virus.filter((item) =>
                    item.name.toLowerCase().includes(value.toLowerCase())
                )
            );
    }, [value, virus]);

    const handleSelectCenter = (id: number) => {
        if (main_center === null) setCenter(id);
        else {
            return;
        }
    };

    const handleClick = () => {
        if (main_center) {
            registration(number, pass1, pass2, 2, group, main_center).then(
                (res) => console.log(res)
            );
        }

        if (isFilter === "Болен") {
            setIsOpenModal(true);
        }
    };

    return (
        <>
            <div className={styles.authorization}>
                <Text color="#262626" type="h2" position="center" fz="28px">
                    Регистрация
                </Text>
                {!hasPermission ? (
                    <>
                        <div className={styles.box}>
                            <Text type="p" position="center" color="#262626">
                                Для того чтобы зарегестрироваться, вам
                                необходимо указать свое состояние на данный
                                момент
                            </Text>
                            {MOBILE_SCREEN ? (
                                <div>sdsdsd</div>
                            ) : (
                                <Filter
                                    width="100%"
                                    data={["Здоров", "Болен"]}
                                />
                            )}
                        </div>
                        <Btn color="#0064FA">Продолжить</Btn>
                    </>
                ) : (
                    <>
                        <div className={styles.box}>
                            <Text type="p" position="center" color="#262626">
                                Также в {distance} км от вас находятся наши
                                агенты но перед этим вам необходимо указать свое
                                состояние на данный момент
                            </Text>
                            <Map
                                width="100%"
                                height="430px"
                                position={{
                                    lat: position.lat,
                                    lng: position.lng,
                                }}
                                zoom={5}
                            >
                                <MarkerF
                                    position={{
                                        lat: position.lat,
                                        lng: position.lng,
                                    }}
                                />
                                {centers.map((item) => (
                                    <MarkerF
                                        key={item.id}
                                        onClick={() =>
                                            handleSelectCenter(item.id)
                                        }
                                        position={{
                                            lat: +item.lat,
                                            lng: +item.lng,
                                        }}
                                    />
                                ))}
                            </Map>
                            {MOBILE_SCREEN ? (
                                <MobileFilter data={["Здоров", "Болен"]} />
                            ) : (
                                <Filter
                                    width="100%"
                                    data={["Здоров", "Болен"]}
                                />
                            )}
                        </div>
                        <Btn onClick={handleClick} color="#0064FA">
                            Продолжить
                        </Btn>
                    </>
                )}
            </div>
            {isOpenModal && MOBILE_SCREEN && (
                <MobileModal setIsOpenModal={setIsOpenModal}>
                    <div className={styles.container}>
                        <Text
                            type="h3"
                            fz="17px"
                            color="#262626"
                            position="center"
                        >
                            Интерес к какому заболеванию у вас имеется?
                        </Text>
                        <MobileSearch
                            filterBtn={false}
                            placeholder="Поиск"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <div className={styles.status}>
                            <Text
                                type="p"
                                fz="12px"
                                color="#0064FA"
                                position="end"
                            >
                                Отсутствует
                            </Text>
                        </div>
                        <Btn color="#0064FA" height="45px" br="12px">
                            Продолжить
                        </Btn>
                    </div>
                </MobileModal>
            )}
            {isOpenModal && (
                <Modal width="500px" setIsOpenModal={setIsOpenModal}>
                    <Text type="h2" fz="26px" position="center">
                        Интерес к какому заболеванию у вас имеется?
                    </Text>
                    <div className={styles.input}>
                        <MobileSearch
                            filterBtn={false}
                            placeholder="Поиск"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    <div className={styles.resultBox}>
                        <AnimatePresence initial>
                            {value &&
                                filteredVirus.map((item) => (
                                    <motion.div
                                        className={styles.result}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        key={item.id}
                                    >
                                        <label className={styles.label}>
                                            <Checkbox />
                                            {item.name}
                                        </label>
                                    </motion.div>
                                ))}
                        </AnimatePresence>
                    </div>
                    <div className={styles.btns}>
                        <Btn
                            color="transparent"
                            border="1px solid #0064FA"
                            textColor="#0064FA"
                        >
                            Отсутствует
                        </Btn>
                        <Btn color="#0064FA">Продолжить</Btn>
                    </div>
                </Modal>
            )}
        </>
    );
};
