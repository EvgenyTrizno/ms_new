import { IService } from "@/shared/types/services.interface";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { FC } from "react";
import { useNavigate } from "react-router";


interface ServiceProps {
    service: IService
    pos: number

}

const Service: FC<ServiceProps> = ({ service, pos }) => {
    const navigate = useNavigate();
    return (
        <>
            <WhiteContentBlock>
                <div className="flex gap-3 truncate cursor-pointer" onClick={() => navigate(`/services/${service.id}`, { state: { service: service } })}>

                    <div className="text-gray-500 font-semibold text-[18px]">{pos}</div>
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-[19px] ">{service.title}</h1>
                        <div className="flex ">
                            <h3 className="font-medium text-[#7D7F82] text-[16px]">Врачи(и):</h3>
                            <h3 className="font-medium text-[#262626] text-[16px] ml-2">{service.doctors.map(doctor => (`${doctor.first_name} ${doctor.middle_name}` + `${service.doctors.length > 1 ? "," : ""}`))}</h3>
                        </div>
                        <div className="flex truncate">
                            <h3 className="font-medium text-[#7D7F82] text-[16px]">Длительность:</h3>
                            <h3 className="font-medium text-[#262626] text-[16px] ml-2">{service.duration} минут</h3>
                        </div>
                        <div className="flex">
                            <h3 className="font-medium text-[#7D7F82] text-[16px]">Лечилось:</h3>
                            <h3 className="font-medium text-[#262626] text-[16px] ml-2">120 ебальничков</h3>
                        </div>
                        <div className="flex">
                            <h3 className="font-medium text-[#7D7F82] text-[16px]">Кол-во новостей:</h3>
                            <h3 className="font-medium text-[#262626] text-[16px] ml-2">12</h3>
                        </div>
                        <div className="h-[1px] w-screen bg-[#C8DBF6] mt-3"></div>
                        <div className="flex mt-3 gap-1">
                            <h3 className="font-medium text-[#262626] text-[16px] pt-[2px]">Цена:</h3>
                            <h1 className="font-semibold text-[19px] mb-2 ">{service.price} UZS</h1>
                        </div>
                    </div>
                </div >
            </WhiteContentBlock >
        </>
    )

}
export default Service;
