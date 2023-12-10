import { FC } from "react";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { Row } from "@/shared/ui/Row";
import { Slider, SliderArrows } from "@/widgets";
import { Text } from "@/shared/ui/Text";
import { CenterCard } from "../CenterCard";

import styles from "./styles.module.scss";

export const AdditionalCentersList: FC = () => {
    return (
        <WhiteContentBlock className={styles.wrapper}>
            <Rows gap={16} rows={["auto"]}>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <Text type="h4" fz="17px">
                        Дополнительные центры (3)
                    </Text>
                    <SliderArrows />
                </Row>
                <Slider gap={10}>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <CenterCard key={item} />
                    ))}
                </Slider>
            </Rows>
        </WhiteContentBlock>
    );
};
