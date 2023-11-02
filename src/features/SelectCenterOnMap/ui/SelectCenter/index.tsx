import { Rows } from "@/shared/ui/Rows";
import { FC } from "react";
import { DistanceText } from "../DistanceText";
import { SelectCenterMap } from "../Map";
import { SetCondition } from "../SetCondition";
import { Btn } from "@/shared/ui/Btn";

export const SelectCenter: FC = () => {
    return (
        <Rows gap={20} rows={["auto"]}>
            <DistanceText />
            <SelectCenterMap />
            <SetCondition />
            <Btn color="#0064FA">Продолжить</Btn>
        </Rows>
    );
};
