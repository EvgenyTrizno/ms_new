import { FC } from "react";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { Row } from "@/shared/ui/Row";
import { Slider, SliderArrows } from "@/widgets";
import { Text } from "@/shared/ui/Text";
import { DoctorCard } from "../DoctorCard";

import styles from "./styles.module.scss";

export const EmployeesList: FC = () => {
    return (
        <WhiteContentBlock className={styles.wrapper}>
            <Rows gap={16} rows={["auto"]}>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <Text type="h4" fz="17px">
                        Все сотрудники центра (5)
                    </Text>
                    <SliderArrows />
                </Row>
                <Slider gap={10}>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <Rows gap={10} rows={["auto"]}>
                            <DoctorCard key={item} />
                            <DoctorCard key={item} />
                        </Rows>
                    ))}
                </Slider>
            </Rows>
        </WhiteContentBlock>
    );
};
