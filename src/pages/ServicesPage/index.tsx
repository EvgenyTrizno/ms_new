import { FC, useEffect, useState } from "react"
import { Layout } from "../Layout";
import { CustomMobileHeader } from "@/widgets";
import { useDoctorsQuery } from "@/widgets/components/DoctorsFromUserCountry/lib/hooks/useDoctorsQuery";
import { useLocation } from "react-router";
import DoctorCol from "./ui/DoctorCol";
import { useQuery } from "react-query";
import { getServices } from "@/shared/api/services";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import Service from "../DoctorPage/ui/Service";



const ServicesPage: FC = () => {
    const { getCookie } = useCookie();
    const { data: serviceData, refetch } = useQuery(
        ["services"],
        () => getServices(getCookie("access_token") as string),
    );
    const { state, pathname } = useLocation();
    const clinicId = state.clinicId





    return (
        <>

            <Layout bgColor="white">
                <CustomMobileHeader text={`${state.online ? "Онлайн" : "Офлайн"} услуги (${state.count})`} />
                {
                    serviceData?.data
                        .filter((service) => service.clinic.id == clinicId)
                        .filter((service) => state.online ? service.online : !service.online)
                        .map((service, i) => (
                            <Service service={service} pos={i + 1} />

                        ))
                }


            </Layout >
        </>
    )
}
export default ServicesPage;
