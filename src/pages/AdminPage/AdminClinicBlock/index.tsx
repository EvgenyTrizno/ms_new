import BoxWrapper from "@/entities/BoxWrapper"
import { IClinic } from "@/shared/types";
import { FC } from "react";


interface AdminClinicBlockProps {
    clinic: IClinic
    doctors: number;
    services: number;

}

const AdminClinicBlock: FC<AdminClinicBlockProps> = ({ clinic, doctors, services }) => {
    const startTime = `${clinic.start_time?.toString().slice(0, 2)}:${clinic.start_time?.toString().slice(2, 4)} - ${clinic.end_time?.toString().slice(0, 2)}:${clinic.end_time?.toString().slice(2, 4)}`
    return (
        <BoxWrapper color="white" className="relative">
            <div className="flex">
                <div className="flex flex-col gap-1">
                    <p className="text-[12px] font-medium text-[#B1B2B4]">Название:</p>
                    <h2 className="text-[16px] font-semibold">{clinic.name}</h2>
                    <div className="flex mt-3">
                        <p className="text-[12px] font-medium text-[#B1B2B4]">Рабочее время:</p>
                        <p className="text-[12px] font-medium text-[#262626] ml-1 mb-1">{startTime}</p>
                    </div>
                    <div className="flex ">
                        <p className="text-[12px] font-medium text-[#B1B2B4]">Врачей:</p>
                        <p className="text-[12px] font-medium text-[#262626] ml-1 mb-1">{doctors}</p>
                    </div>
                    <div className="flex">
                        <p className="text-[12px] font-medium text-[#B1B2B4]">Услуг:</p>
                        <p className="text-[12px] font-medium text-[#262626] ml-1 mb-1">{services}</p>
                    </div>
                    <div className="flex">
                        <p className="text-[12px] font-medium text-[#B1B2B4]">Клиника добавлена:</p>
                        <p className="text-[12px] font-medium text-[#262626] ml-1 mb-1">02.06.2024</p>
                    </div>
                </div>
                <img src="/assets/clinic.jpg" className="w-[130px] h-[90px] absolute right-0 mx-3" alt="" />
            </div>
        </BoxWrapper>

    )
}
export default AdminClinicBlock;
