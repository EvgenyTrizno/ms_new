import { FC } from "react";

import { Member } from "../Member";
import { Rows } from "@/shared/ui/Rows";

export const Members: FC = () => {
    return (
        <Rows gap={8} rows={["auto"]}>
            {[1, 2, 3, 4].map((item) => (
                <Member
                    key={item}
                    name={"T"}
                    surname={"Михайлова"}
                    patronymic={"A"}
                    avatar={""}
                    role={"Администратор"}
                />
            ))}
        </Rows>
    );
};
