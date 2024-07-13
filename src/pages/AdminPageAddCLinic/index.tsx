import BoxWrapper from "@/entities/BoxWrapper"
import { Input } from "@/shared/ui/Input"

import { FC, useState, ChangeEvent, FormEvent, useEffect, useRef } from "react";

import { Btn } from "@/shared/ui/Btn";
import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss"
import { Row } from "@/shared/ui/Row";
import { DayBtn } from "@/shared/ui/DayBtn";
import ServiceBlock from "./ServiceBlock";
import DoctorBlock from "./ServiceBlock/DoctorBlock";
import { useClinicRegistration } from "@/shared/model/store/clinicRegistration";
import { instance } from "@/shared/config/axiosInstance";
import { AxiosResponse } from "axios";
import { IClinic } from "@/shared/types";
const AdminPageAddClinic = () => {

    const [workTime, setWorkTime,] = useState<string>("")
    const { workdays } = useClinicRegistration();
    console.log(workTime)
    const [arrayService, setArrayService] = useState<string[]>([""]);
    const [arrayDoctor, setArrayDoctor] = useState<string[]>([""]);

    const [clinicName, setClinicName] = useState<string>("")
    const [adminNum, setAdminNum] = useState<string>("")
    const [clinicNum, setClinicNum] = useState<string>("")
    const [clinicAddress, setClinicAddress] = useState<string>("")
    const [clinicId, setClinicId] = useState<number>(0)

    console.log(workTime.slice(4, 8))

    useEffect(() => { console.log(workTime) }, [workTime])


    async function BtnClick() {
        const data: AxiosResponse<IClinic> = await instance.post("/clinic/",
            {
                name: clinicName,
                admin_number: adminNum,
                number: clinicNum,
                address: clinicAddress,
                start_time: parseInt(workTime.slice(0, 4)),
                end_time: parseInt(workTime.slice(4, 8)),
                workdays: workdays.join(",")
            }
        );
        setClinicId(data.data.id)

    }


    const codeRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    const handleCodeInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        i: number
    ) => {
        setWorkTime((workTime) => {
            const newCode = [...workTime];
            newCode[i] = e.target.value;
            return newCode.join("");
        });

        if (e.target.value.length > 0 && i < codeRefs.length - 1) {
            codeRefs[i + 1].current?.focus();
        }
    };

    const handleCodeInputKeyDown = (
        e: KeyboardEvent<HTMLInputElement>,
        i: number
    ) => {
        if (e.key === "Backspace" && i > 0 && !workTime[i]) {
            codeRefs[i - 1].current?.focus();
        }
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        e.target.classList.add(styles.active);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        e.target.classList.remove(styles.active);
    };

    return (
        <>
            <div className="w-[1000px] flex justify-center flex-col m-auto mt-10">
                <BoxWrapper color="white" className="flex mx-12 ">
                    <div className="flex flex-col my-auto px-4 w-full gap-4">

                        <h2 className="text-[16px] font-medium">Клиника</h2>

                        <Input type="text" placeholder="Название" value={clinicName} onChange={(e) => setClinicName(e.currentTarget.value)} />
                        <Input type="text" placeholder="Номер администратора" value={adminNum} onChange={(e) => setAdminNum(e.currentTarget.value)} />
                        <Input type="text" placeholder="Номер клиники" value={clinicNum} onChange={(e) => setClinicNum(e.currentTarget.value)} />
                        <Input type="text" placeholder="Адрес" value={clinicAddress} onChange={(e) => setClinicAddress(e.currentTarget.value)} />
                    </div>
                    <div className="flex flex-col my-auto px-4 w-full gap-4">

                        <div className={styles.block}>
                            <Text position="center" type="h3" fz={20} >Выберите время</Text>
                            <Row gap={20} style={{ justifyContent: "center", paddingTop: "20px" }}>
                                <Text fw={800} className="px-1" type="h1">c</Text>
                                <Input
                                    type="text"
                                    maxLength={1}
                                    className={styles.item}
                                    value={workTime[0 || ""]}
                                    onChange={(e) => handleCodeInputChange(e, 0)}
                                    onKeyDown={(e) => handleCodeInputKeyDown(e, 0)}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    ref={codeRefs[0]}
                                />
                                <Input
                                    type="text"
                                    maxLength={1}
                                    className={styles.item}
                                    value={workTime[1 || ""]}
                                    onChange={(e) => handleCodeInputChange(e, 1)}
                                    onKeyDown={(e) => handleCodeInputKeyDown(e, 1)}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    ref={codeRefs[1]}
                                />
                                <Text fw={800}>:</Text>
                                <Input
                                    type="text"
                                    maxLength={1}
                                    className={styles.item}
                                    value={workTime[2 || ""]}
                                    onChange={(e) => handleCodeInputChange(e, 2)}
                                    onKeyDown={(e) => handleCodeInputKeyDown(e, 2)}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                    ref={codeRefs[2]}
                                />
                                <Input
                                    type="text"
                                    maxLength={1}
                                    className={styles.item}
                                    value={workTime[3 || ""]}
                                    onChange={(e) => handleCodeInputChange(e, 3)}
                                    onKeyDown={(e) => handleCodeInputKeyDown(e, 3)}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                    ref={codeRefs[3]}
                                />
                            </Row>
                            <Row gap={20} style={{ justifyContent: "center", paddingTop: "20px" }}>
                                <Text fw={800} className="">до</Text>
                                <Input
                                    type="text"
                                    maxLength={1}
                                    className={styles.item}
                                    value={workTime[4 || ""]}
                                    onChange={(e) => handleCodeInputChange(e, 4)}
                                    onKeyDown={(e) => handleCodeInputKeyDown(e, 4)}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    ref={codeRefs[4]}
                                />
                                <Input
                                    type="text"
                                    maxLength={1}
                                    className={styles.item}
                                    value={workTime[5 || ""]}
                                    onChange={(e) => handleCodeInputChange(e, 5)}
                                    onKeyDown={(e) => handleCodeInputKeyDown(e, 5)}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    ref={codeRefs[5]}

                                />
                                <Text fw={800}>:</Text>
                                <Input
                                    type="text"
                                    maxLength={1}
                                    className={styles.item}
                                    value={workTime[6 || ""]}
                                    onChange={(e) => handleCodeInputChange(e, 6)}
                                    onKeyDown={(e) => handleCodeInputKeyDown(e, 6)}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                    ref={codeRefs[6]}
                                />
                                <Input
                                    type="text"
                                    maxLength={1}
                                    className={styles.item}
                                    value={workTime[7 || ""]}
                                    onChange={(e) => handleCodeInputChange(e, 7)}
                                    onKeyDown={(e) => handleCodeInputKeyDown(e, 7)}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                    ref={codeRefs[7]}
                                />
                            </Row>
                            <div className={styles.days_container}>
                                {
                                    days.map((day) => (
                                        <DayBtn day={day} />
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                    {/* <h1 className="font-medium text-[24px] m-auto">Введите свой ID</h1> */}
                    {/* <Input type="text" placeholder="Номер ID" /> */}


                </BoxWrapper >
                {

                    arrayService.map((val, i) => (
                        <>
                            <ServiceBlock i={i} clinicId={clinicId} />
                        </>
                    ))
                }
                <img src="/assets/Vector.svg" width={22} className="m-auto mt-[30px] hover:text-black cursor-pointer" onClick={() => { setArrayService([...arrayService, ""]) }} />

                <BoxWrapper color="white" className="mx-12 mt-10">
                    <h2 className="text-[16px] font-medium mb-4">Врачи</h2>
                    {

                        arrayDoctor.map((val, i) => (
                            <>

                                <DoctorBlock clinicId={clinicId} />
                            </>
                        ))
                    }

                </BoxWrapper>
                <img src="/assets/Vector.svg" width={22} className="m-auto mt-[30px] hover:text-black cursor-pointer" onClick={() => { setArrayDoctor([...arrayDoctor, ""]) }} />
                <Btn color="blue" width="500px" className="m-auto mt-5" onClick={() => BtnClick()}>Зарегистрировать</Btn>
            </div >

        </>
    )
}
export default AdminPageAddClinic
