import { FC } from "react";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { MainText } from "@/shared/ui/MainText";
import { Slider } from "@/widgets";
import { UserReport } from "../UserReport";
import { BlueArrows } from "@/shared/ui/BlueArrows";

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
                <BlueArrows prev={() => ({})} next={() => ({})} />
            </Rows>
        </WhiteContentBlock>
    );
};
