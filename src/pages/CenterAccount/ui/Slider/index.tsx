import { FC } from "react";
import { ISliderProps } from "./types";

import { Rows } from "@/shared/ui/Rows";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Row } from "@/shared/ui/Row";
import { Image } from "@/shared/ui/Image";
import { Text } from "@/shared/ui/Text";
import { BlueSliderArrows } from "@/widgets";
import { ClinicSlide } from "../ClinicSlide";
import { Slider as Courusel } from "@/widgets";

export const Slider: FC<ISliderProps> = ({ image, text, addBtn }) => {
    return (
        <WhiteContentBlock>
            <Rows gap={16} rows={["auto"]}>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <Row gap={10}>
                        <Image src={image} alt="icon" />
                        <Text type="p">{text}</Text>
                    </Row>
                    {addBtn}
                </Row>
                <Courusel>
                    <ClinicSlide />
                    <ClinicSlide />
                    <ClinicSlide />
                    <ClinicSlide />
                    <ClinicSlide />
                </Courusel>
                <BlueSliderArrows />
            </Rows>
        </WhiteContentBlock>
    );
};
