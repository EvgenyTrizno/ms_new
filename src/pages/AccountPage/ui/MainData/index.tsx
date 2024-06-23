import { Dispatch, FC, SetStateAction, useState } from "react";

import { Input } from "@/shared/ui/Input";
import { Rows } from "@/shared/ui/Rows";
import { UseFormRegister } from "react-hook-form";
import { AccountMoreDetailedFormData } from "@/shared/types/formsTypes";
import { Dropdown } from "primereact/dropdown";
import inputStyle from "@/shared/ui/Input/styles.module.scss"
import { useCountriesQuery } from "@/shared/lib/hooks";
import { useAuth } from "@/shared/model/store/auth";


type Props = {
    register: UseFormRegister<AccountMoreDetailedFormData>;
    setCountry: Dispatch<SetStateAction<number>>;
    setSex: Dispatch<SetStateAction<string>>;
};

export const MainData: FC<Props> = ({ register, setCountry, setSex }) => {
    const { data: countries } = useCountriesQuery();
    const { user } = useAuth();
    const data: {
        name: string;
        registerName: keyof AccountMoreDetailedFormData;
    }[] = [
            { name: "Имя", registerName: "name" },
            { name: "Фамилия", registerName: "surname" },
            { name: "Дата рождения", registerName: "birthdate" },
            { name: "Пол", registerName: "sex" },
            { name: "Логин", registerName: "login" },
            { name: "Страна", registerName: "country" },
            { name: "Город", registerName: "city" },
            { name: "Адрес", registerName: "address" },
        ];

    return (
        <Rows gap={10} rows={["auto"]}>
            {data.map((item) => {
                return (
                    item.name === "Страна" ? <>

                        <select name="" id="" className={inputStyle.input} onChange={(e) => setCountry(parseInt(e.target.value))}>
                            <option value={user?.country?.id}>{user?.country?.name}</option>
                            {countries?.data.map(country => (
                                <option value={country.id}>{country.name}</option>
                            ))}
                        </select>
                    </> : item.name === "Пол" ? <>
                        <select name="" id="" className={inputStyle.input} onChange={(e) => setSex(e.target.value)}>
                            <option value={user?.sex?.toString()}>{user?.sex}</option>
                            {user?.sex !== "Мужчина" && <option value={"Мужчина"}>Мужчина</option>}
                            {user?.sex !== "Женщина" && <option value={"Женщина"}>Женщина</option>}
                            {user?.sex !== "Гомосексуал" && <option value={"Гомосексуал"}>Гомосексуал</option>}
                        </select>
                    </> :
                        <Input
                            type="text"
                            key={item.name}
                            placeholder={item.name}
                            borderRadius="12px"
                            padding="16px"
                            hookFormData={{
                                register,
                                registerName: item.registerName,
                            }}
                        />
                );
            })}
        </Rows>
    );
};
