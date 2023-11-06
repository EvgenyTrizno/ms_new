import { FC, useState } from "react";
import { TypeOfSelectedMethod } from "@/entities/RecoveryPassword/ui/SelectMethodOfRecovery/types";

import { SelectMethodOfRecovery } from "@/entities/RecoveryPassword";
import { RecoveryByEmail } from "../RecoveryByEmail";
import { RecoveryByNumber } from "../RecoveryByNumber";

export const Recovery: FC = () => {
    const [isSelect, setIsSelect] = useState<TypeOfSelectedMethod>("tel");

    return (
        <>
            <SelectMethodOfRecovery
                isSelect={isSelect}
                setIsSelect={setIsSelect}
            />
            {isSelect === "tel" ? <RecoveryByNumber /> : <RecoveryByEmail />}
        </>
    );
};
