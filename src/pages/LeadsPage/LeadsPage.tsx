import { FC } from "react";

import { Layout } from "../Layout/Layout";
import {
    AdminPanelContainer,
    BlueSliderArrows,
    WhiteContentBlock,
    Cols,
    Row,
    Inner,
    Rows,
    BlueBox,
} from "@/widgets";
import { Text } from "@/shared";

import hospital from "/assets/hospital.svg";
import check from "/assets/check-in-circle.svg";
import clock from "/assets/clock.svg";

const LeadsPage: FC = () => {
    return (
        <Layout>
            <AdminPanelContainer>
                <Cols type="auto" gap={10} count={3}>
                    <WhiteContentBlock>
                        <Inner>
                            <Text type="h2" fz="18px">
                                Всего клиник на сайте
                            </Text>
                            <Row gap={16} style={{ justifyContent: "center" }}>
                                <img src={hospital} alt="" />
                                <Row gap={8}>
                                    <Text type="h2" fz="36px">
                                        2138
                                    </Text>
                                    <Text type="h3" fz="20px" color="#7D7F82">
                                        клиник
                                    </Text>
                                </Row>
                            </Row>
                        </Inner>
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        <Inner>
                            <Text type="h2" fz="18px">
                                Клиники вошедшие в аккаунт
                            </Text>
                            <Row gap={16} style={{ justifyContent: "center" }}>
                                <img src={check} alt="" />
                                <Row gap={8}>
                                    <Text type="h2" fz="36px">
                                        1344
                                    </Text>
                                    <Text type="h3" fz="20px" color="#7D7F82">
                                        клиник
                                    </Text>
                                </Row>
                            </Row>
                        </Inner>
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        <Inner>
                            <Text type="h2" fz="18px">
                                Среднее время пребывания в аккаунте
                            </Text>
                            <Row gap={16} style={{ justifyContent: "center" }}>
                                <img src={clock} alt="" />
                                <Row gap={8}>
                                    <Text type="h2" fz="36px">
                                        6.7
                                    </Text>
                                    <Text type="h3" fz="20px" color="#7D7F82">
                                        часов
                                    </Text>
                                </Row>
                            </Row>
                        </Inner>
                    </WhiteContentBlock>
                </Cols>
                <Cols type="auto" gap={10} count={2}>
                    <WhiteContentBlock>
                        <Rows rows={["1fr", "1fr", "1fr"]} gap={16}>
                            <Inner>
                                <Text type="h2" fz="18px">
                                    Обзвон клиник за сутки
                                </Text>
                                <Row gap={0}>
                                    <Text type="p" fz="14px" color="#7D7F82">
                                        В базе было найдено 43 номера. Указали
                                        диапазон
                                    </Text>
                                    &nbsp;
                                    <Text type="p" color="#0064FA" fz="14px">
                                        4 пациента
                                    </Text>
                                </Row>
                                <></>
                            </Inner>
                            <Inner>
                                <Text type="h2" fz="18px">
                                    Клиники вошедшие в неполный аккаунт (37)
                                </Text>
                                <Cols type="auto" gap={10} count={4}>
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                        <BlueBox key={item}>
                                            <Rows rows={["1fr", "1fr"]} gap={5}>
                                                <Text type="h4" fz="14px">
                                                    Горизонт Здоровья
                                                </Text>
                                                <Text type="p" fz="14px">
                                                    +9089089076
                                                </Text>
                                                <Text
                                                    type="p"
                                                    fz="14px"
                                                    color="#0064FA"
                                                >
                                                    id2321324
                                                </Text>
                                            </Rows>
                                        </BlueBox>
                                    ))}
                                </Cols>
                                <BlueSliderArrows />
                            </Inner>
                            <Inner>
                                <Text type="h2" fz="18px">
                                    Клиники вошедшие в полный аккаунт (112)
                                </Text>
                            </Inner>
                        </Rows>
                    </WhiteContentBlock>
                </Cols>
                <WhiteContentBlock>
                    <Row gap={12} style={{ width: "100%" }}>
                        <Inner>
                            <Text type="h2" fz="16px">
                                Тохир
                            </Text>
                            <BlueBox>+998-(977)-777-77-87</BlueBox>
                        </Inner>
                        <Inner>
                            <Row gap={0}>
                                <Text type="p" fz="14px" color="#7D7F82">
                                    Всего
                                </Text>
                                &nbsp;
                                <Text type="p" fz="14px" color="#0064FA">
                                    341 вызов
                                </Text>
                            </Row>
                            <BlueBox style={{ width: "100%" }}>
                                <Cols type="auto" count={4} gap={16}>
                                    {[1, 2, 3, 4, 5, 6].map((item) => (
                                        <Rows
                                            gap={3}
                                            rows={["1fr", "1fr"]}
                                            key={item}
                                        >
                                            <Text type="h3" fz="14px">
                                                +998-(977)-777-77-87
                                            </Text>
                                            <Text>
                                                предлагает сотрудничество
                                            </Text>
                                        </Rows>
                                    ))}
                                </Cols>
                            </BlueBox>
                        </Inner>
                    </Row>
                </WhiteContentBlock>
            </AdminPanelContainer>
        </Layout>
    );
};

export default LeadsPage;
