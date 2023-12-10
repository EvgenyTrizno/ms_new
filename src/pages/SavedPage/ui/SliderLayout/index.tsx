import { FC } from "react";
import { ISliderLayoutProps } from "./types";

import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Slider, SliderArrows } from "@/widgets";
import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";

export const SliderLayout: FC<ISliderLayoutProps> = ({
    sliderContent,
    text,
}) => {
    return (
        <WhiteContentBlock className={styles.container}>
            <Rows gap={16} rows={["auto"]}>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <Text type="h2" fz="17px">
                        {text}
                    </Text>
                    <SliderArrows />
                </Row>
                <Slider gap={10}>{sliderContent}</Slider>
            </Rows>
        </WhiteContentBlock>
    );
};
