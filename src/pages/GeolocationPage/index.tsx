import { FC } from "react";

import { Map } from "@/widgets/components/Map";
import { SearchWithFilter } from "./ui/Search";
import { Results } from "./ui/Results";
import { OverlayView } from "@react-google-maps/api";
import { ExtraCallBtn } from "@/widgets/components/ExtraCallBtn";

import styles from "./styles.module.scss";
import { MOBILE, TABLET } from "@/shared/utils";

const GeolocationPage: FC = () => {
    const config = [
        {
            elementType: "geometry",
            stylers: [
                {
                    color: "#f5f5f5",
                },
            ],
        },
        {
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#616161",
                },
            ],
        },
        {
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#f5f5f5",
                },
            ],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#bdbdbd",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
                {
                    color: "#eeeeee",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#757575",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
                {
                    color: "#e5e5e5",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#9e9e9e",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {
                    color: "#ffffff",
                },
            ],
        },
        {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#757575",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
                {
                    color: "#dadada",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#616161",
                },
            ],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#9e9e9e",
                },
            ],
        },
        {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
                {
                    color: "#e5e5e5",
                },
            ],
        },
        {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
                {
                    color: "#eeeeee",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    color: "#c9c9c9",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#9e9e9e",
                },
            ],
        },
    ];

    return (
        <div className={styles.container}>
            <Map
                width="100%"
                height="100%"
                zoom={5}
                position={{ lat: 0, lng: 0 }}
                mapStyles={config}
            >
                <SearchWithFilter />
                <Results />
                <OverlayView
                    mapPaneName="markerLayer"
                    position={{ lat: 0, lng: 0 }}
                >
                    <div className={styles.marker}></div>
                </OverlayView>
            </Map>
            {!MOBILE && !TABLET && <ExtraCallBtn isOpen={false} />}
        </div>
    );
};

export default GeolocationPage;
