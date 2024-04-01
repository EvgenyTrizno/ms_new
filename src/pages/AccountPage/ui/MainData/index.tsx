import { FC } from "react";

import { Input } from "@/shared/ui/Input";
import { Rows } from "@/shared/ui/Rows";
import { UseFormRegister } from "react-hook-form";
import { AccountMoreDetailedFormData } from "@/shared/types/formsTypes";

type Props = {
  register: UseFormRegister<AccountMoreDetailedFormData>;
};

export const MainData: FC<Props> = ({ register }) => {
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
