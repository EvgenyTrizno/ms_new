import { FC, useEffect, useState } from "react"
import { useParams } from "react-router"
import { useDoctorQuery } from "./lib/useDoctorQuery";
import { Layout } from "../Layout";
import { CustomMobileHeader } from "@/widgets";
import { DoctorMore } from "@/entities";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { HelpersStat, ProgressBar } from "@/widgets/components";
import { Progress } from "@/widgets/components/Recognition/ui/Progress";
import { Search } from "@/features/Search";
import { Filter } from "@/shared/ui/Filter";
import { DataListWrapper } from "@/widgets/components/DataListWrapper";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { useQuery } from "react-query";
import { getServices } from "@/shared/api/services";
import Service from "./ui/Service";

const DoctorPage: FC = () => {
    const { id } = useParams();
    const { data } = useDoctorQuery(id);
    useEffect(() => console.log(data))
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("Онлайн услуги");

    const { getCookie } = useCookie();
    const { data: serviceData } = useQuery(
        ["services"],
        () => getServices(getCookie("access_token") as string),
    );

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    return (
        <>

            <Layout bgColor="white">
                <CustomMobileHeader back text="Онлайн врач" />

                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 font-semibold">
                        <img src={data?.data.image} alt="" className="rounded-full w-14 h-14" />
                        <h4>{`${data?.data.first_name} ${data?.data.last_name}`}</h4>

                    </div>
                    <div className="flex mt-3">
                        <h3 className="font-medium text-[#7D7F82] text-[12px]">Страна:</h3>
                        <h3 className="font-medium text-[#262626] text-[12px] ml-2">{data?.data.country?.name}</h3>
                    </div>
                    <div className="flex">
                        <h3 className="font-medium text-[#7D7F82] text-[12px]">Город:</h3>
                        <h3 className="font-medium text-[#262626] text-[12px] ml-2">{data?.data.city?.name}</h3>
                    </div>
                    <div className="flex">
                        <h3 className="font-medium text-[#7D7F82] text-[12px]">Адрес:</h3>
                        <h3 className="font-medium text-[#262626] text-[12px] ml-2">{data?.data.address}</h3>
                    </div>

                    <h1 className="font-semibold text-[16px] mt-[20px]">Лечилось всего</h1>
                    <h2 className="m-auto mt-[15px] text-[32px] font-medium">3245</h2>
                    {/* <ProgressBar /> */}
                    <Progress value={20} />
                    <h1 className="font-semibold text-[16px] mt-[40px]">Помогло на:</h1>
                    <HelpersStat />
                    <Filter
                        data={["Онлайн услуги", "Офлайн услуги"]}
                        isSelect={filter}
                        setIsSelect={setFilter}
                    />
                    <DataListWrapper
                        listIsUndefined={!serviceData?.data ? true : false}
                        listLength={serviceData?.data.length || 0}
                        emptyText="Нет услуг"
                    >
                        <div >
                            {filter == "Онлайн услуги" ?
                                <>
                                    {serviceData?.data.
                                        filter((service) => service.doctors.filter(doctor => doctor.id.toString() === id)).
                                        filter((service) => service.online).
                                        map((service, i) => (
                                            <div className="mt-3">
                                                <Service service={service} key={service.id} pos={i + 1} />
                                            </div>
                                        ))}
                                </> : <>
                                    {serviceData?.data.
                                        filter((service) => service.doctors.filter(doctor => doctor.id.toString() === id)).
                                        filter((service) => !service.online).
                                        map((service, i) => (
                                            <div className="mt-3">
                                                <Service service={service} key={service.id} pos={i + 1} />
                                            </div>
                                        ))}

                                </>

                            }

                        </div>
                    </DataListWrapper>

                </div>

            </Layout >
            DoctorPage
        </>
    )
}
export default DoctorPage;
