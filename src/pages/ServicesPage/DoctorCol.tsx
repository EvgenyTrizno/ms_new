import { FC } from "react";
import { Doctor } from "@/shared/types"
import { useNavigate } from "react-router";

interface DoctorColProps {
    doctor: Doctor
    i: number
}

const DoctorCol: FC<DoctorColProps> = ({ doctor, i }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex gap-1 items-center px-3" >
                <div className="items-center">
                    {i + 1}
                </div>
                <img src={doctor.image} alt="" className="rounded-full w-10 h-10 m-3 cursor-pointer" onClick={() => navigate(`/doctor/${doctor.id}`)} />
                <div className="flex flex-col cursor-pointer" onClick={() => navigate(`/doctor/${doctor.id}`)}>
                    <h1 className="font-semibold text-[14px]">{doctor.first_name} {doctor.last_name}</h1>
                    <h3 className="font-medium text-[#7D7F82] text-[12px]">{doctor.specialization}</h3>
                </div>

                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 mr-2 mb-1" >
                    <path d="M14.0013 3.79102C15.1289 3.79102 16.043 4.7051 16.043 5.83268C16.043 6.96026 15.1289 7.87435 14.0013 7.87435C12.8737 7.87435 11.9596 6.96026 11.9596 5.83268C11.9596 4.7051 12.8737 3.79102 14.0013 3.79102Z" fill="#262626" />
                    <path d="M14.0013 11.9577C15.1289 11.9577 16.043 12.8718 16.043 13.9993C16.043 15.1269 15.1289 16.041 14.0013 16.041C12.8737 16.041 11.9596 15.1269 11.9596 13.9993C11.9596 12.8718 12.8737 11.9577 14.0013 11.9577Z" fill="#262626" />
                    <path d="M14.0013 20.1243C15.1289 20.1243 16.043 21.0384 16.043 22.166C16.043 23.2936 15.1289 24.2077 14.0013 24.2077C12.8737 24.2077 11.9596 23.2936 11.9596 22.166C11.9596 21.0384 12.8737 20.1243 14.0013 20.1243Z" fill="#262626" />
                </svg>

            </div >
            <div className="h-[1px] w-screen bg-[#C8DBF6] my-2 opacity-30"></div>
        </>
    )
}
export default DoctorCol;
