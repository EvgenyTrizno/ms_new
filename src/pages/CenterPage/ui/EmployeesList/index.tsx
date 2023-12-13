import { FC } from "react";
import { IEmployeesList } from "./types";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { MainText } from "@/shared/ui/MainText";
import { Slider } from "@/widgets";
import { Cols } from "@/shared/ui/Cols";
import { EmployeeInfo } from "../EmpoyeeInfo";

export const EmployeesList: FC<IEmployeesList> = ({ data }) => {
    return (
        <WhiteContentBlock>
            <Rows gap={16} rows={["auto"]}>
                <MainText text="Специалисты (127)" />
                <Slider>
                    <Cols
                        type="auto"
                        count={4}
                        gap={24}
                        style={{
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        {data &&
                            data.map((item) => (
                                <EmployeeInfo
                                    avatar={item.image}
                                    name={`${item.last_name} ${item.first_name} ${item?.surname}`}
                                    rating={item.rating}
                                    key={item.id}
                                />
                            ))}
                    </Cols>
                </Slider>
            </Rows>
        </WhiteContentBlock>
    );
};
