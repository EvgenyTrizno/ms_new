import { FC, useState, useRef } from "react";
import { MarkerF, StandaloneSearchBox } from "@react-google-maps/api";

import { CenterInfoCard, Map } from "../../widgets";

import circle from "/assets/circle-blue.svg";
import styles from "./SelectCenterMapPage.module.scss";

export const SelectCenterMapPage: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    const searchBoxRef = useRef(null);

    // const onPlaceChanged = () => {
    //     const places = searchBoxRef.current?.autocomplete.getPlace();
    //     if (places && places.length > 0) {
    //         const place = places[0];
    //         console.log("Выбранное место:", place);
    //     }
    // };

    return (
        <div className={styles.map}>
            <Map width="100vw" height="100vh">
                <StandaloneSearchBox
                    // onPlacesChanged={onPlaceChanged}
                    ref={searchBoxRef}
                >
                    <input type="text" className={styles.input} />
                </StandaloneSearchBox>
                {isOpen && (
                    <CenterInfoCard top={y} left={x} setIsOpen={setIsOpen} />
                )}
                <MarkerF
                    position={{ lat: 10, lng: 10 }}
                    icon={circle}
                    onClick={(e) => {
                        setY((e.domEvent as MouseEvent).clientY / 2);
                        setIsOpen(true);
                        setX((e.domEvent as MouseEvent).clientX / 2);
                    }}
                />
            </Map>
        </div>
    );
};
