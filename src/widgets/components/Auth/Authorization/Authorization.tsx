import { FC, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { MarkerF } from "@react-google-maps/api";
import { IPosition } from "../../Map/types";

import { Btn, Filter, Text } from "@/shared";
import { Map } from "../../Map/Map";
import { useFilter } from "@/shared/model/store";

import styles from "./Authorization.module.scss";

export const Authorization: FC = () => {
    const [hasPermission, setHasPermission] = useState<boolean>(false);

    const navigate = useNavigate();
    const { isFilter } = useFilter();

    useEffect(() => {
        const permission = "geolocation" in navigator;
        setHasPermission(permission);
    }, []);

    const handleClick = useCallback(() => {
        if (isFilter === "Болен") {
            navigate("/virus-list");
        }
    }, [isFilter, navigate]);

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
                        <Filter width="100%" data={["Здоров", "Болен"]} />
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
                            position={{ lat: 0, lng: 0 }}
                            zoom={14}
                        >
                            <MarkerF position={{ lat: 0, lng: 0 }} />
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
