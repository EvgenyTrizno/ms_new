import { FC } from "react";

import { Btn } from "@/shared/ui/Btn";

export const AddBtn: FC = () => {
    return (
        <Btn
            color="linear-gradient(94deg, #D64657 0%, #0064FA 100%)"
            width="250px"
            br="12px"
        >
            Добавить доп. центр
        </Btn>
    );
};
