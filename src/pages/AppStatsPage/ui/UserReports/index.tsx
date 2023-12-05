import { FC } from "react";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { MainText } from "@/shared/ui/MainText/MainText";
import { BlueSliderArrows, Slider } from "@/widgets";
import { UserReport } from "../UserReport";

export const UserReports: FC = () => {
    return (
        <WhiteContentBlock>
            <Rows gap={10} rows={["auto"]} style={{ height: "100%" }}>
                <MainText text="Жалобы пользователей" />
                <Slider gap={40}>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <UserReport key={item} />
                    ))}
                </Slider>
                <BlueSliderArrows />
            </Rows>
        </WhiteContentBlock>
    );
};
