import BoxWrapper from "@/entities/BoxWrapper";
import { Filter } from "@/shared/ui/Filter";
import { Input } from "@/shared/ui/Input";
import { FC, useEffect, useState } from "react";
import DoctorBlock from "./DoctorBlock";
import { instance } from "@/shared/config/axiosInstance";

interface ServiceBlockProps {
    i: number
    clinicId: number
}

const ServiceBlock: FC<ServiceBlockProps> = ({ i, clinicId }) => {
    const [show, setShow] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("Онлайн");

    const [svcName, setSvcName] = useState<string>("")
    const [svcDuration, setSvcDuration] = useState<string>("")
    const [svcDesc, setSvcDesc] = useState<string>("")
    const [svcPrice, setSvcPrice] = useState<string>("")
    useEffect(() => {
        if (clinicId !== 0) {

            instance.post("/services/",
                {
                    title: svcName,
                    online: filter === "Онлайн",
                    duration: parseInt(svcDuration),
                    description: svcDesc,
                    price: parseInt(svcPrice),
                    clinic: clinicId,
                    doctors: [1]
                }

            );
        }

    }, [clinicId])
    return (
        <>

            <BoxWrapper color="white" className="mx-12">
                <div className="w-full h-[1px] text-black border-solid border-[1px] mt-[30px]"></div>
                <div className="flex w-full bg-[#EBF3FF] px-12 flex-col rounded-[20px] mt-[20px]">
                    <div className="flex justify-between w-full mt-3" onClick={() => setShow(!show)}>
                        <h2 className="text-[16px] font-medium">Услуга {i + 1}</h2>
                        <img src={`${show ? "/assets/arrow-up.svg" : "/assets/arrow-down.svg"} `} alt="" />
                    </div>

                    <div className={`${!show ? 'hidden' : "grid grid-cols-2 gap-4 gap-x-8 mb-4 "}`}  >
                        <Filter
                            data={["Онлайн", "Оффлайн",]}
                            isSelect={filter}
                            setIsSelect={setFilter}
                            className=" w-full"
                        />

                        <Input type="text" placeholder="Название" value={svcName} onChange={(e) => setSvcName(e.currentTarget.value)} />
                        <Input type="text" placeholder="Длительность" value={svcDuration} onChange={(e) => setSvcDuration(e.currentTarget.value)} />
                        <Input type="text" placeholder="Описание" value={svcDesc} onChange={(e) => setSvcDesc(e.currentTarget.value)} />
                        <Input type="text" placeholder="Цена" value={svcPrice} onChange={(e) => setSvcPrice(e.currentTarget.value)} />
                        <Input type="text" placeholder="На ком данная услуга хорошо сказывается" />
                    </div>
                </div>
            </BoxWrapper >

        </>
    )

}
export default ServiceBlock;
