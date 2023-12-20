import { FC } from "react";

import { Layout } from "../Layout";
import {
    AdminPanelContainer,
    // Inner,
    CenterView,
} from "@/widgets";
import { Text } from "@/shared/ui/Text";
import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { LAPTOP, PC, SMALL_LAPTOP } from "@/shared/utils";
import { Cols } from "@/shared/ui/Cols";
import { BlueBox } from "@/shared/ui/BlueBox";
import { MainText } from "@/shared/ui/MainText";
import { BlueArrows } from "@/shared/ui/BlueArrows";

import hospital from "/assets/hospital.svg";
import check from "/assets/check-in-circle.svg";
import clock from "/assets/clock.svg";
import styles from "./styles.module.scss";

const LeadsPage: FC = () => {
    return (
        <Layout>
            <AdminPanelContainer>
                <Cols type="auto" gap={10} count={3}>
                    <WhiteContentBlock>
                        {/* <Inner> */}
                        <MainText text="Всего клиник на сайте" />
                        <Row
                            gap={LAPTOP ? 12 : 16}
                            style={{ justifyContent: "center" }}
                        >
                            <img
                                src={hospital}
                                alt=""
                                className={styles.icon}
                            />
                            <Row gap={LAPTOP ? 6 : 8}>
                                <Text
                                    type="h2"
                                    fz={
                                        LAPTOP
                                            ? "28px"
                                            : SMALL_LAPTOP
                                            ? "30px"
                                            : "36px"
                                    }
                                >
                                    2138
                                </Text>
                                <Text
                                    type="h3"
                                    fz={
                                        LAPTOP || SMALL_LAPTOP ? "18px" : "20px"
                                    }
                                    color="#7D7F82"
                                >
                                    клиник
                                </Text>
                            </Row>
                        </Row>
                        {/* </Inner> */}
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        {/* <Inner> */}
                        <MainText text="Клиники вошедшие в аккаунт" />
                        <Row
                            gap={LAPTOP ? 12 : 16}
                            style={{ justifyContent: "center" }}
                        >
                            <img src={check} alt="" className={styles.icon} />
                            <Row gap={LAPTOP ? 6 : 8}>
                                <Text
                                    type="h2"
                                    fz={
                                        LAPTOP
                                            ? "28px"
                                            : SMALL_LAPTOP
                                            ? "30px"
                                            : "36px"
                                    }
                                >
                                    1344
                                </Text>
                                <Text
                                    type="h3"
                                    fz={
                                        LAPTOP || SMALL_LAPTOP ? "18px" : "20px"
                                    }
                                    color="#7D7F82"
                                >
                                    клиник
                                </Text>
                            </Row>
                        </Row>
                        {/* </Inner> */}
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        {/* <Inner> */}
                        <MainText
                            text={
                                PC
                                    ? "Среднее время пребывания в аккаунте"
                                    : "Среднее время пребывания"
                            }
                        />
                        <Row
                            gap={LAPTOP ? 12 : 16}
                            style={{ justifyContent: "center" }}
                        >
                            <img src={clock} alt="" className={styles.icon} />
                            <Row gap={LAPTOP ? 6 : 8}>
                                <Text
                                    type="h2"
                                    fz={
                                        LAPTOP
                                            ? "28px"
                                            : SMALL_LAPTOP
                                            ? "30px"
                                            : "36px"
                                    }
                                >
                                    6.7
                                </Text>
                                <Text
                                    type="h3"
                                    fz={
                                        LAPTOP || SMALL_LAPTOP ? "18px" : "20px"
                                    }
                                    color="#7D7F82"
                                >
                                    часов
                                </Text>
                            </Row>
                        </Row>
                        {/* </Inner> */}
                    </WhiteContentBlock>
                </Cols>
                <Cols type="auto" gap={10} count={2}>
                    <WhiteContentBlock>
                        <Rows rows={["auto", "auto", "auto"]} gap={16}>
                            {/* <Inner> */}
                            <MainText text="Обзвон клиник за сутки" />
                            <Row gap={0}>
                                <Text
                                    type="p"
                                    fz={SMALL_LAPTOP ? "12px" : "14px"}
                                    color="#7D7F82"
                                >
                                    В базе было найдено 43 номера. Указали
                                    диапазон
                                </Text>
                                &nbsp;
                                <Text
                                    type="p"
                                    color="#0064FA"
                                    fz={SMALL_LAPTOP ? "12px" : "14px"}
                                >
                                    4 пациента
                                </Text>
                            </Row>
                            <></>
                            {/* </Inner> */}
                            {/* <Inner> */}
                            <MainText text="Клиники вошедшие в неполный аккаунт (37)" />
                            <Cols
                                type="auto"
                                gap={10}
                                count={LAPTOP ? 3 : SMALL_LAPTOP ? 2 : 4}
                            >
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                    <BlueBox key={item}>
                                        <Rows rows={["auto", "auto"]} gap={5}>
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
                            <BlueArrows
                                prev={function (): void {
                                    throw new Error(
                                        "Function not implemented."
                                    );
                                }}
                                next={function (): void {
                                    throw new Error(
                                        "Function not implemented."
                                    );
                                }}
                            />
                            {/* </Inner> */}
                            {/* <Inner> */}
                            <MainText text="Клиники вошедшие в полный аккаунт (112)" />
                            <Cols
                                type="auto"
                                gap={16}
                                count={SMALL_LAPTOP ? 1 : 2}
                            >
                                <CenterView />
                                <CenterView />
                                <CenterView />
                                <CenterView />
                            </Cols>
                            <BlueArrows
                                prev={function (): void {
                                    throw new Error(
                                        "Function not implemented."
                                    );
                                }}
                                next={function (): void {
                                    throw new Error(
                                        "Function not implemented."
                                    );
                                }}
                            />
                        </Rows>
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        <Rows rows={["auto", "auto", "auto"]} gap={16}>
                            <MainText text="Обзвон клиник за сутки" />
                            <Row gap={0}>
                                <Text
                                    type="p"
                                    fz={SMALL_LAPTOP ? "12px" : "14px"}
                                    color="#7D7F82"
                                >
                                    В базе было найдено 43 номера. Указали
                                    диапазон
                                </Text>
                                &nbsp;
                                <Text
                                    type="p"
                                    color="#0064FA"
                                    fz={SMALL_LAPTOP ? "12px" : "14px"}
                                >
                                    4 пациента
                                </Text>
                            </Row>
                            <></>
                            <MainText text="Клиники вошедшие в неполный аккаунт (37)" />
                            <Cols
                                type="auto"
                                gap={10}
                                count={LAPTOP ? 3 : SMALL_LAPTOP ? 2 : 4}
                            >
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                    <BlueBox key={item}>
                                        <Rows rows={["auto", "auto"]} gap={5}>
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
                            <BlueArrows
                                prev={function (): void {
                                    throw new Error(
                                        "Function not implemented."
                                    );
                                }}
                                next={function (): void {
                                    throw new Error(
                                        "Function not implemented."
                                    );
                                }}
                            />
                            <MainText text="Клиники вошедшие в полный аккаунт (112)" />
                            <Cols
                                type="auto"
                                gap={16}
                                count={SMALL_LAPTOP ? 1 : 2}
                            >
                                <CenterView />
                                <CenterView />
                                <CenterView />
                                <CenterView />
                            </Cols>
                            <BlueArrows
                                prev={function (): void {
                                    throw new Error(
                                        "Function not implemented."
                                    );
                                }}
                                next={function (): void {
                                    throw new Error(
                                        "Function not implemented."
                                    );
                                }}
                            />
                        </Rows>
                    </WhiteContentBlock>
                </Cols>
                <WhiteContentBlock>
                    <Row
                        gap={12}
                        style={{ width: "100%", alignItems: "initial" }}
                    >
                        <Text type="h2" fz="16px">
                            Тохир
                        </Text>
                        <BlueBox>+998-(977)-777-77-87</BlueBox>
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
                            <Cols
                                type="auto"
                                count={LAPTOP || SMALL_LAPTOP ? 2 : 4}
                                gap={16}
                            >
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                    <Rows gap={0} rows={["auto"]} key={item}>
                                        <Text type="h3" fz="14px">
                                            +998-(977)-777-77-87
                                        </Text>
                                        <Text type="p" fz="14px">
                                            предлагает сотрудничество
                                        </Text>
                                    </Rows>
                                ))}
                            </Cols>
                            <BlueArrows
                                prev={function (): void {
                                    throw new Error(
                                        "Function not implemented."
                                    );
                                }}
                                next={function (): void {
                                    throw new Error(
                                        "Function not implemented."
                                    );
                                }}
                            />
                        </BlueBox>
                    </Row>
                </WhiteContentBlock>
            </AdminPanelContainer>
        </Layout>
    );
};

export default LeadsPage;
