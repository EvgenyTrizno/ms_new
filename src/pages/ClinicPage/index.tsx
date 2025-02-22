import { Layout } from "../Layout";
import styles from "./styles.module.scss";
import { Button } from "@/shared/ui/Button";
import { Links } from "./ui/Links/Links";
import { Characteristics } from "./ui/Characteristics/Characteristics";
import { News } from "./ui/News/News";
import { Gallery } from "./ui/Gallery/Gallery";
import { useEffect, useRef, useState } from "react";
import cn from "clsx";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getClinicById } from "@/shared/api";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { IClinic } from "@/shared/types";
import { useClinic } from "@/shared/model/store/clinic";
import { CustomMobileHeader } from "@/widgets";
import { getServices } from "@/shared/api/services";

const ClinicPage = () => {
    const [scrollY, setScrollY] = useState(0);
    const bannerRef = useRef<HTMLImageElement>(null);
    const { id } = useParams();
    const { getCookie } = useCookie();
    const { setCurrentClinic } = useClinic();
    const { data: serviceData, refetch } = useQuery(
        ["services"],
        () => getServices(getCookie("access_token") as string),
    );
    const { data: clinicDataApi } = useQuery(
        ["clinics"],
        () => getClinicById(getCookie("access_token") as string, Number(id)),
        {
            // keepPreviousData: true,
            // staleTime: 5 * 60 * 1000,
            // cacheTime: 30 * 60 * 1000,

            onSuccess: (data) => {
                setCurrentClinic(data.data);
            },
        }
    );

    const [clinicData, setClinicData] = useState<IClinic>();

    useEffect(() => {
        if (!clinicDataApi) return;

        setClinicData(clinicDataApi.data.clinic[0]);
    }, [clinicDataApi]);

    useEffect(() => {
        const updateScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", updateScroll);

        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    return (
        <Layout bgColor="white">
            <CustomMobileHeader back text={"Клиника"} />

            <div className={styles.bannerWrapper}>
                <img
                    className={cn(styles.banner, {
                        [styles.active]: scrollY > 0,
                    })}
                    src={clinicData?.image || "/assets/clinic-post.jpg"}
                    alt="clinic"
                    onClick={() => {
                        if (!bannerRef.current) return;
                        bannerRef.current.classList.add(styles.active);
                    }}
                    ref={bannerRef}
                />

                <Link className={styles.helpTextWrapper} to="/">
                    <p>Имеется запись на 24.01.24 / 09:00</p>

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M7.5 15L12.5 10L7.5 5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            </div>

            <h1 className={styles.title}>{clinicData?.name}</h1>

            <div className={styles.parameters}>
                <p>
                    Страна: <span>{clinicData?.country?.name || "-"}</span>
                </p>

                <p>
                    Город: <span>{clinicData?.city?.name || "-"}</span>
                </p>

                <p>
                    Адрес: <span>{clinicData?.address || "-"}</span>
                </p>
            </div>

            <div className={styles.btns}>
                <Button
                    title="Написать"
                    styleType="outline"
                    onClick={() => console.log("click")}
                />
                <Button title="Подписаться" onClick={() => console.log("click")} />
            </div>

            <Links
                onlineCount={serviceData?.data.filter((service) => service.clinic.id === clinicData?.id && service.online).length || 0}
                offlineCount={serviceData?.data.filter((service) => service.clinic.id === clinicData?.id && !service.online).length || 0}
                cooperationCount={clinicDataApi?.data.clinic[0].employees.length || 0}
                doctorsCount={clinicDataApi?.data.doctors.length || 0}
            />
            <Characteristics className={styles.characteristics} />

        </Layout>
    );
};

export default ClinicPage;
