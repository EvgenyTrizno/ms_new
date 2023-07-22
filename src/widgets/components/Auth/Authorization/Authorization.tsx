import { FC, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { MarkerF } from "@react-google-maps/api";
// import { IPosition } from "../../Map/types";

import { Btn, Filter, MobileFilter, MobileSearch, Text } from "@/shared";
import { Map } from "../../Map/Map";
import { useFilter } from "@/shared/model/store";
import { MOBILE_SCREEN } from "@/shared/utils";
import { MobileModal } from "../../MobileModal/MobileModal";
// import { useUserData } from "@/shared/model/store";

import styles from "./Authorization.module.scss";

export const Authorization: FC = () => {
    const [hasPermission, setHasPermission] = useState<boolean>(false);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const navigate = useNavigate();
    const { isFilter } = useFilter();
    // const { setPosition } = useUserData();

    useEffect(() => {
        const permission = "geolocation" in navigator;
        setHasPermission(permission);
        setIsOpenModal(true);

        if (permission) {
            navigator.geolocation.getCurrentPosition((pos) => {
                // const { latitude, longitude } = pos.coords;

                console.log(navigator.geolocation, pos);
                // setPosition(latitude, longitude);
            });
        }
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
                        {MOBILE_SCREEN ? (
                            <div>sdsdsd</div>
                        ) : (
                            <Filter width="100%" data={["Здоров", "Болен"]} />
                        )}
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
                        {MOBILE_SCREEN ? (
                            <MobileFilter data={["Здоров", "Болен"]} />
                        ) : (
                            <Filter width="100%" data={["Здоров", "Болен"]} />
                        )}
                    </div>
                    <Btn onClick={() => handleClick()} color="#0064FA">
                        Продолжить
                    </Btn>
                </>
            )}
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
                        <MobileSearch filterBtn={false} placeholder="Поиск" />
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
        </div>
    );
};
