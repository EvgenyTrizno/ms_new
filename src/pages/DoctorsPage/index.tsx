import { FC, useEffect, useState } from "react"
import { Layout } from "../Layout";
import { CustomMobileHeader } from "@/widgets";
import { useDoctorsQuery } from "@/widgets/components/DoctorsFromUserCountry/lib/hooks/useDoctorsQuery";
import { useLocation } from "react-router";
import DoctorCol from "./ui/DoctorCol";

// interface DoctorPageProps {
//     count: number
// }


const DoctorsPage: FC = () => {
    const { data, refetch } = useDoctorsQuery();
    const { state, pathname } = useLocation();



    return (
        <>

            <Layout bgColor="blue">
                <CustomMobileHeader text={`Врачи (${state.count})`} />
                {data?.data.
                    filter((doctor) => doctor.clinic?.toString() === state.clinicId).
                    map((doctor, i) => (
                        <DoctorCol doctor={doctor} i={i} />
                    ))}


            </Layout >
        </>
    )
}
export default DoctorsPage;
