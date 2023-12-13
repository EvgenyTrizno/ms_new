import { FC } from "react";
import { useParams } from "react-router";

import { Layout } from "../Layout";
import {
    AdminPanelContainer,
    CustomMobileHeader,
    IncomeBlock,
} from "@/widgets";
import { LAPTOP, MOBILE, PC, TABLET } from "@/shared/utils";
import { Text } from "@/shared/ui/Text";
import { Search } from "@/features/Search";
import { Container } from "@/shared/ui/Container";
import { Cols } from "@/shared/ui/Cols";
import { BlueBox } from "@/shared/ui/BlueBox";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { EmployeesList } from "./ui/EmployeesList";
import { Row } from "@/shared/ui/Row";
import { Chart } from "./ui/Chart";
import { useClinicQuery } from "./lib/hooks/useClinicQuery";
import { MedicalCenterinfoLayout } from "@/entities/MedicalCenterInfoCard";
import { Btn } from "@/shared/ui/Btn";
import { MedicalCenterView } from "@/entities/MedicalCenterView";
import { StatusInfo } from "@/entities/StatsInfoBlock";
import { Rows } from "@/shared/ui/Rows";
import { AdminInfo } from "@/entities/AdminInfo";

const ClinicProfile: FC = () => {
    const { id } = useParams();
    const { data } = useClinicQuery(id ? +id : 0);

    const incomeData = [
        {
            title: "За день",
            sum: 1567,
        },
        {
            title: "Вся сумма",
            sum: 42567,
        },
    ];

    const clinic = data && data.data.clinic[0];

    return (
        <Layout>
            {MOBILE && (
                <CustomMobileHeader
                    back
                    text="Профиль клиники"
                ></CustomMobileHeader>
            )}
            <Container>
                <AdminPanelContainer>
                    <Cols
                        gap={LAPTOP ? 8 : 10}
                        type="custom"
                        cols={
                            PC
                                ? ["312px", "350px", "1fr"]
                                : LAPTOP
                                ? ["288px", "330px", "1fr"]
                                : MOBILE
                                ? ["auto"]
                                : ["256px", "269px", "1fr"]
                        }
                    >
                        <MedicalCenterView
                            img={clinic?.image ?? ""}
                            report={function (): void {
                                throw new Error("Function not implemented.");
                            }}
                            contact={function (): void {
                                throw new Error("Function not implemented.");
                            }}
                            verify={false}
                            date={"неизвестно"}
                        />
                        <MedicalCenterinfoLayout
                            btn={<Btn color="#0064FA">Полный перечень</Btn>}
                            text="Клиника"
                            name={clinic?.name ?? ""}
                            type={clinic?.description ?? ""}
                            country={`${clinic?.country.name}, ${clinic?.city.name}`}
                            street={clinic?.address ?? ""}
                            peoples={`${clinic?.employees.length} человек`}
                            number={clinic?.number ?? ""}
                        />
                        <Rows gap={10} rows={["auto"]}>
                            <AdminInfo
                                name={`${
                                    clinic?.admin && clinic?.admin.last_name
                                } ${
                                    clinic?.admin && clinic?.admin.first_name
                                } ${clinic?.admin && clinic?.admin.surname}`}
                                number={
                                    (clinic?.admin && clinic.admin.number) ?? ""
                                }
                            />
                            <StatusInfo
                                name="Количество посещений за день"
                                content={
                                    <>
                                        <BlueBox>
                                            <Row gap={10}>
                                                <Text type="h2" fz="28px">
                                                    {clinic?.visit_online}
                                                </Text>
                                                <Text type="h5" fz="16x">
                                                    Онлайн
                                                </Text>
                                            </Row>
                                        </BlueBox>
                                        <BlueBox>
                                            <Row gap={10}>
                                                <Text type="h2" fz="28px">
                                                    {clinic?.visit_offline}
                                                </Text>
                                                <Text type="h5" fz="16x">
                                                    Оффлайн
                                                </Text>
                                            </Row>
                                        </BlueBox>
                                    </>
                                }
                            />
                            <StatusInfo
                                name="Записи"
                                content={
                                    <>
                                        <BlueBox>
                                            <Row gap={10}>
                                                <Text type="h2" fz="28px">
                                                    {clinic?.online_notes}
                                                </Text>
                                                <Rows gap={0} rows={["auto"]}>
                                                    <Text type="h5" fz="16x">
                                                        Онлайн
                                                    </Text>
                                                    <Text
                                                        type="p"
                                                        fz="14x"
                                                        color="#3C3D3E"
                                                    >
                                                        Записей
                                                    </Text>
                                                </Rows>
                                            </Row>
                                        </BlueBox>
                                        <BlueBox>
                                            <Row gap={10}>
                                                <Text type="h2" fz="28px">
                                                    {clinic?.offline_notes}
                                                </Text>
                                                <Rows gap={0} rows={["auto"]}>
                                                    <Text type="h5" fz="16x">
                                                        Оффлайн
                                                    </Text>
                                                    <Text
                                                        type="p"
                                                        fz="14x"
                                                        color="#3C3D3E"
                                                    >
                                                        Записей
                                                    </Text>
                                                </Rows>
                                            </Row>
                                        </BlueBox>
                                    </>
                                }
                            />
                        </Rows>
                    </Cols>
                    <Cols
                        type="custom"
                        gap={LAPTOP ? 8 : 10}
                        cols={MOBILE ? [] : ["360px", "1fr"]}
                    >
                        <IncomeBlock
                            title="Баланс на счету"
                            data={incomeData}
                        />
                        <Chart />
                    </Cols>
                    <Row gap={10}>
                        <Search
                            placeholder="Поиск специалиста или пациента"
                            height={LAPTOP ? "37px" : ""}
                        />
                        <FilterBtn
                            onClick={() => ({})}
                            type={MOBILE || TABLET ? "small" : "big"}
                        />
                    </Row>
                    <EmployeesList />
                </AdminPanelContainer>
            </Container>
        </Layout>
    );
};

export default ClinicProfile;
