import { FC } from "react";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { Image } from "@/shared/ui/Image";
import { Row } from "@/shared/ui/Row";
import { BlueBox } from "@/shared/ui/BlueBox";
import { Cols } from "@/shared/ui/Cols";
import { Slider, SliderArrows } from "@/widgets";
import { DoctorCard } from "../DoctorCard";
import { LAPTOP, MOBILE, PC, SMALL_LAPTOP, TABLET } from "@/shared/utils";

import more from "../../assets/more.svg";
import photo from "../../assets/photo.jpg";

import styles from "./styles.module.scss";

export const MainCenter: FC = () => {
    return (
        <WhiteContentBlock className={styles.wrapper}>
            <Rows gap={20} rows={["auto"]} style={{ height: "max-content" }}>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <Text type="h4" fz="17px">
                        Ведущий центр
                    </Text>
                    {!MOBILE && !TABLET && <Image src={more} alt="" />}
                </Row>
                <BlueBox className={styles.inner}>
                    <Cols
                        type="custom"
                        cols={SMALL_LAPTOP ? ["1fr"] : ["auto", "auto"]}
                        gap={32}
                    >
                        <Rows
                            gap={16}
                            rows={["auto"]}
                            className={styles.mainData}
                        >
                            <Row gap={16} style={{ alignItems: "flex-start" }}>
                                <Image
                                    src={photo}
                                    alt=""
                                    className={styles.avatar}
                                />
                                <Rows gap={6} rows={["auto"]}>
                                    <Text type="h4" fz="16px">
                                        Название центра
                                    </Text>
                                    <Text type="p" fz="12px" color="#7D7F82">
                                        Точность в расчетах - 39%
                                    </Text>
                                    <Text type="p" fz="12px" color="#7D7F82">
                                        Характеристики связанные с лечением
                                    </Text>
                                </Rows>
                            </Row>
                            <Rows
                                gap={6}
                                rows={["auto"]}
                                style={{ height: "max-content" }}
                            >
                                <Row gap={0}>
                                    <Text type="p" fz="12px" color="#7D7F82">
                                        Страна:
                                    </Text>
                                    &nbsp;
                                    <Text type="p" fz="12px">
                                        США
                                    </Text>
                                </Row>
                                <Row gap={0}>
                                    <Text type="p" fz="12px" color="#7D7F82">
                                        Город:
                                    </Text>
                                    &nbsp;
                                    <Text type="p" fz="12px">
                                        Нью-Йорк
                                    </Text>
                                </Row>
                                <Row gap={0}>
                                    <Text type="p" fz="12px" color="#7D7F82">
                                        Адрес:
                                    </Text>
                                    &nbsp;
                                    <Text type="p" fz="12px">
                                        Россия, Москва, Ленина 47
                                    </Text>
                                </Row>
                                <Row gap={0}>
                                    <Text type="p" fz="12px" color="#7D7F82">
                                        Номер:
                                    </Text>
                                    &nbsp;
                                    <Text type="p" fz="12px">
                                        +7 (988) 789-87-89
                                    </Text>
                                </Row>
                            </Rows>
                        </Rows>
                        {(PC || LAPTOP) && (
                            <Rows gap={26} rows={["auto"]}>
                                <Row
                                    gap={0}
                                    style={{ justifyContent: "space-between" }}
                                >
                                    <Text type="h4" fz="16px">
                                        Все сотрудники центра (5)
                                    </Text>
                                    <SliderArrows />
                                </Row>
                                <Slider gap={12}>
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <DoctorCard key={item} />
                                    ))}
                                </Slider>
                            </Rows>
                        )}
                    </Cols>
                </BlueBox>
            </Rows>
        </WhiteContentBlock>
    );
};
