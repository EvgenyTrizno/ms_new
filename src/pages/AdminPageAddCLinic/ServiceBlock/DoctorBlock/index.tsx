
import BoxWrapper from "@/entities/BoxWrapper";
import { instance } from "@/shared/config/axiosInstance";
import { Filter } from "@/shared/ui/Filter";
import { Input } from "@/shared/ui/Input";
import { FC, useEffect, useState } from "react";

interface DoctorBlockProps {
    clinicId: number
}

const DoctorBlock: FC<DoctorBlockProps> = ({ clinicId }) => {
    const [show, setShow] = useState<boolean>(false);
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [spec, setSpec] = useState<string>("")
    useEffect(() => {
        if (clinicId !== 0) {

            instance.post("/doctor/",
                {
                    first_name: firstName,
                    last_name: lastName,
                    clinic: clinicId,
                    specialization: spec
                }

            );
        }

    }, [clinicId])
    return (
        <>

            <div className="flex w-full bg-[#EBF3FF]  px-12 flex-col rounded-[20px]">
                <div className="flex justify-between w-full mt-3" onClick={() => setShow(!show)}>
                    <h2 className="text-[16px] font-medium">Врач</h2>
                    <img src={`${show ? "/assets/arrow-up.svg" : "/assets/arrow-down.svg"} `} alt="" />
                </div>
                <div className={`${!show ? 'hidden' : "flex flex-col gap-5 mb-4"}`}  >
                    <Input type="text" placeholder="Имя" value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} />
                    <Input type="text" placeholder="Фамилия" value={lastName} onChange={(e) => setLastName(e.currentTarget.value)} />
                    <Input type="text" placeholder="Специальность" value={spec} onChange={(e) => setSpec(e.currentTarget.value)} />
                </div>
            </div>

        </>
    )

}
export default DoctorBlock;
