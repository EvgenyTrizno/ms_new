import { FC } from "react";
import { MarkerF } from "@react-google-maps/api";

import { Map } from "@/widgets/components/Map";
import { IMapProps } from "./types";
import { useCentersQuerys } from "../../lib/hooks/useCentersQuerys";

export const SelectCenterMap: FC<IMapProps> = ({
    allowed,
    city,
    setCenter,
}) => {
    const { data } = useCentersQuerys(city, allowed);

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
            {data &&
                data.data.map((center) => (
                    <MarkerF
                        key={center.id}
                        position={{ lat: +center.lat, lng: +center.lng }}
                        onClick={() => setCenter(center.id)}
                    />
                ))}
        </Map>
    );
};
