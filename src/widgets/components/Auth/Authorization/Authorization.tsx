import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { MarkerF } from "@react-google-maps/api";
import { IPosition } from "../../Map/types";

import { useLocation } from "@/shared/hooks";
import { Btn, Filter, Text } from "@/shared";
import { Map } from "../../Map/Map";
import { useFilter } from "@/shared/model/store";

import styles from "./Authorization.module.scss";

export const Authorization: FC = () => {
    const [hasPermission, setHasPermission] = useState<boolean>(false);
    const [position, setPosition] = useState<IPosition>({ lat: 0, lng: 0 });

    const navigate = useNavigate();
    const { getLocation } = useLocation();
    const { isFilter } = useFilter();

    useEffect(() => {
        getLocation();

        const checkGeoLocationPermission = () => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    () => {
                        setHasPermission(true);
                        setPosition({
                            lat: getLocation().lat || 0,
                            lng: getLocation().lng || 0,
                        });
                    },
                    () => {
                        setHasPermission(false);
                    }
                );
            } else {
                setHasPermission(false);
            }
        };

        checkGeoLocationPermission();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = () => {
        if (isFilter === "Болен") {
            navigate("/virus-list");
        } else {
            navigate("/auth/registration");
        }
    };

    return (
        <div className={styles.authorization}>
            <Text color="#262626" type="h2" position="center" fz="28px">
                Регистрация
            </Text>
            {!hasPermission ? (
                <>
                    <div className={styles.box}>
                        <Text type="p" position="center" color="#262626">
                            Для того чтобы зарегестрироваться, вам необходимо
                            указать свое состояние на данный момент
                        </Text>
                        <Filter data={["Здоров", "Болен"]} />
                    </div>
                    <Btn color="#0064FA">Продолжить</Btn>
                </>
            ) : (
                <>
                    <div className={styles.box}>
                        <Text type="p" position="center" color="#262626">
                            Также в 5 км от вас находятся наши агенты но перед
                            этим вам необходимо указать свое состояние на данный
                            момент
                        </Text>
                        <Map
                            width="100%"
                            height="430px"
                            position={position}
                            zoom={14}
                        >
                            <MarkerF position={position} />
                        </Map>
                        <Filter width="100%" data={["Здоров", "Болен"]} />
                    </div>
                    <Btn onClick={() => handleClick()} color="#0064FA">
                        Продолжить
                    </Btn>
                </>
            )}
        </div>
    );
};
