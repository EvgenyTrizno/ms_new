import { FC } from "react";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { MainText } from "@/shared/ui/MainText";
import { Slider } from "@/widgets";
import { Cols } from "@/shared/ui/Cols";
import { EmployeeInfo } from "../EmpoyeeInfo";

export const EmployeesList: FC = () => {
    return (
        <WhiteContentBlock>
            <Rows gap={16} rows={["auto"]}>
                <MainText text="Специалисты (127)" />
                <Slider>
                    <Cols
                        type="auto"
                        count={4}
                        gap={24}
                        style={{ justifyContent: "space-between" }}
                    >
                        <EmployeeInfo />
                        <EmployeeInfo />
                        <EmployeeInfo />
                        <EmployeeInfo />
                    </Cols>
                </Slider>
            </Rows>
        </WhiteContentBlock>
    );
};
