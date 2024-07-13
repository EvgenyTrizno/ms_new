import { Layout } from "../Layout";
import styles from "./styles.module.scss";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import BoxWrapper from "@/entities/BoxWrapper";
import { SearchWithFilter } from "@/features/SearchWithFilter";
import { Search } from "@/features/Search";
import { useState } from "react";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { Filter } from "@/shared/ui/Filter";
import AdminClinicBlock from "./AdminClinicBlock";
import { useLocation, useNavigate } from "react-router";
import { useResultsQuery } from "@/entities/SearchResultsList/lib/hooks/useResultsQuery";

const AdminPage = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("Все");
    const navigiate = useNavigate();
    const { pathname } = useLocation()
    const { data } = useResultsQuery();

    return (
        <div className="w-[1000px] flex justify-center flex-col m-auto">
            <BoxWrapper color="white" className="flex mx-12">
                <div className="flex flex-col rounded-[25px] border-[2px] border-[#0064FA] transition duration-850 justify-center hover:opacity-40 cursor-pointer w-[560px]" onClick={() => navigiate(`${pathname}/add`)}>
                    <img src="/assets/Vector.svg" width={42} className="m-auto mt-[30px] hover:text-black" />
                    <h1 className="font-semibold text-[16px] text-[#0064FA] m-auto mt-[20px] pb-[20px]">Добавить клинику</h1>
                </div>
                <div className="flex flex-col my-auto px-4 w-full">
                    <Search height="48px" placeholder="Введите запрос"
                        value={search}
                        onChange={(e) => setSearch(e.currentTarget.value)}
                        showSearchByScroll={false}
                        className="my-auto px-4"
                    />
                    <Filter
                        data={["Все", "Согласились", "Отказались"]}
                        isSelect={filter}
                        setIsSelect={setFilter}
                        className="mt-4"
                    />
                </div>
                {/* <h1 className="font-medium text-[24px] m-auto">Введите свой ID</h1> */}
                {/* <Input type="text" placeholder="Номер ID" /> */}
            </BoxWrapper >
            <div className="grid grid-cols-2 mx-12 gap-1">
                {
                    data?.data.clinics.map(clinic => (

                        <AdminClinicBlock
                            clinic={clinic}
                            doctors={data?.data.doctors.filter(doctor => doctor.clinic == clinic.id).length}
                            services={data?.data.services.filter(service => service.clinic.id == clinic.id).length} />
                    ))
                }
            </div>
        </div >
    );
};

export default AdminPage;
