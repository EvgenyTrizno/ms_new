import { FC, useState, useRef } from "react";
import { MarkerF, StandaloneSearchBox } from "@react-google-maps/api";
import { ISelectCenterMapProps } from "./types";

import { CenterInfoCard, Map } from "@/widgets";
import { Btn, Text } from "@/shared";

import circle from "/assets/circle-blue.svg";
import controler from "/assets/controler.svg";
import search from "/assets/search-gray.svg";
import styles from "./SelectCenterMap.module.scss";

export const SelectCenterMap: FC<ISelectCenterMapProps> = ({ setMap }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [y, setY] = useState<number>(0);
    const [isLat, setIsLat] = useState<number>(0);
    const [isLng, setIsLng] = useState<number>(0);

    const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null);

    const onPlacesChanged = () => {
        if (searchBoxRef.current) {
            const places = searchBoxRef.current.getPlaces();
            if (places && places.length > 0) {
                setIsLat(places[0]?.geometry?.location?.lat() || 0);
                setIsLng(places[0]?.geometry?.location?.lng() || 0);
            }
        }
    };

    const handleSearchBoxLoad = (ref: google.maps.places.SearchBox) => {
        searchBoxRef.current = ref;
    };

    return (
        <div className={styles.map}>
            <Map
                height="100%"
                width="100%"
                zoom={5}
                position={{ lat: isLat, lng: isLng }}
            >
                <StandaloneSearchBox
                    onPlacesChanged={onPlacesChanged}
                    onLoad={handleSearchBoxLoad}
                >
                    <div className={styles.inner}>
                        <div className={styles.search}>
                            <div className={styles.btn}>
                                <img src={search} alt="" />
                            </div>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Поиск чатов"
                            />
                        </div>
                        <Btn
                            color="#0064FA"
                            width="132px"
                            br="12px"
                            padding="14px 18px"
                            height="48px"
                            fz="14px"
                        >
                            <div className={styles.box}>
                                <img src={controler} alt="" />
                                <Text type="p">Фильтры</Text>
                            </div>
                        </Btn>
                    </div>
                </StandaloneSearchBox>
                {isOpen && (
                    <CenterInfoCard
                        setIsCardOpen={setIsOpen}
                        onClick={setMap}
                        top={y}
                    />
                )}
                <MarkerF
                    position={{ lat: isLat, lng: isLng }}
                    icon={circle}
                    onClick={(e) => {
                        setY((e.domEvent as MouseEvent).clientY / 2);
                        setIsOpen(true);
                    }}
                />
            </Map>
        </div>
    );
};
