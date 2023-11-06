import { FC } from "react";
import { IConfirmationFormProps } from "./types";

import { Rows } from "@/shared/ui/Rows";
import { CodeInputs } from "../CodeInputs";
import { Timer } from "../Timer";

export const ConfirmationForm: FC<IConfirmationFormProps> = ({
    btn,
    text,
    setCode,
}) => {
    return (
        <Rows gap={20} rows={["auto"]}>
            {text}
            <Rows gap={16} rows={["auto"]}>
                <CodeInputs setCode={setCode} />
                <Timer />
            </Rows>
            {btn}
        </Rows>
    );
};
