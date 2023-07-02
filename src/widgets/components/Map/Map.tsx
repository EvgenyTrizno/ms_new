import { FC } from "react";
import { IMap } from "./types";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import styles from "./Map.module.scss";

export const Map: FC<IMap> = ({
    children,
    width,
    height,
    position,
    zoom = 14,
}) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        libraries: ["places"],
    });

    const containerStyle = {
        width: "100%",
        height: "100%",
    };

    console.log(import.meta.env.VITE_GOOGLE_API_KEY);

    return (
        <div className={styles.map} style={{ width, height }}>
            {isLoaded && (
                <GoogleMap
                    zoom={zoom}
                    center={position}
                    mapContainerStyle={containerStyle}
                    options={{ disableDefaultUI: true }}
                >
                    {children}
                </GoogleMap>
            )}
        </div>
    );
};
