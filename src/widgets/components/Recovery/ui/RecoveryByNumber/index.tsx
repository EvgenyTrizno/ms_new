import { FC, useState, ChangeEvent } from "react";

import { Input } from "@/shared/ui/Input";
import { Btn } from "@/shared/ui/Btn";
import { Rows } from "@/shared/ui/Rows";

export const RecoveryByNumber: FC = () => {
    const [number, setNumber] = useState<string>();

    return (
        <Rows gap={20} rows={["auto"]}>
            <Input
                type="text"
                placeholder="Введите тел.номер"
                border="1px solid #EBF3FF"
                padding="12px 16px"
                value={number}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setNumber(e.target.value)
                }
            />
            <Btn color="#0064FA" type="submit" disabled={true}>
                Продолжить
            </Btn>
        </Rows>
    );
};
