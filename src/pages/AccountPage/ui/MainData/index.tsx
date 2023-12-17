import { ChangeEvent, FC, useState } from "react";

import { Input } from "@/shared/ui/Input";
import { Rows } from "@/shared/ui/Rows";

export const MainData: FC = () => {
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [brthday, setBrthday] = useState<string>("");
    const [sex, setSex] = useState<string>("");
    const [login, setLogin] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [adress, setAdress] = useState<string>("");

    const data = [
        { name: "Имя", value: name },
        { name: "Фамилия", value: surname },
        { name: "Дата рождения", value: brthday },
        { name: "Пол", value: sex },
        { name: "Логин", value: login },
        { name: "Страна", value: country },
        { name: "Город", value: city },
        { name: "Адрес", value: adress },
    ] as const;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        switch (e.target.placeholder) {
            case data[0].name:
                setName(value);
                break;
            case data[1].name:
                setSurname(value);
                break;
            case data[2].name:
                setBrthday(value);
                break;
            case data[3].name:
                setSex(value);
                break;
            case data[4].name:
                setLogin(value);
                break;
            case data[5].name:
                setCountry(value);
                break;
            case data[6].name:
                setCity(value);
                break;
            case data[7].name:
                setAdress(value);
                break;
        }
    };

    return (
        <Rows gap={10} rows={["auto"]}>
            {data.map((item) => (
                <Input
                    type="text"
                    key={item.name}
                    placeholder={item.name}
                    borderRadius="12px"
                    padding="16px"
                    onChange={(e) => handleChange(e)}
                />
            ))}
        </Rows>
    );
};
