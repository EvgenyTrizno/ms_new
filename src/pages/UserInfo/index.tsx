import { FC } from "react";
import { useParams } from "react-router";

import { Layout } from "../Layout";
import { AdminPanelContainer, CustomMobileHeader } from "@/widgets";
import { Cols } from "@/shared/ui/Cols";
import { MedicalHistory } from "./ui/MedicalHistory";
import { UserInfo } from "./ui/UserInfo";
import { NotesList } from "./ui/NotesList";
import { useUserQuery } from "./lib/hooks/useUserQuery";
import { DiseasesHistory } from "./ui/DiseasesHistory";
import { Access } from "./ui/Accesss";
import { Container } from "@/shared/ui/Container";
import { MOBILE, TABLET } from "@/shared/utils";

const UserInfoPage: FC = () => {
    const { id } = useParams();
    const { data } = useUserQuery(id ? +id : 0);

    const user = data && data.data.user[0];
    
    return (
        <Layout>
            {MOBILE && <CustomMobileHeader text="Профиль пользователя" back />}
            <Container>
                <AdminPanelContainer>
                    <Cols
                        gap={10}
                        type="custom"
                        cols={MOBILE || TABLET ? [] : ["872px", "1fr"]}
                    >
                        <UserInfo
                            img={user?.image ?? ""}
                            name={user?.first_name ?? ""}
                            country={`${user?.country.name}, ${user?.city.name}`}
                            street={user?.address ?? ""}
                            email={user?.email ?? ""}
                            sex={user?.sex ?? ""}
                            mainCenter={user?.main_center.name ?? ""}
                            distanse={""}
                            createdAt={user?.created_at ?? ""}
                            centers={user?.centers ?? []}
                        />
                        <MedicalHistory />
                    </Cols>
                    <NotesList
                        missing={data?.data.miss_notes ?? []}
                        current={data?.data.curr_notes ?? []}
                        umounted={data?.data.process_notes ?? []}
                    />
                    <Cols
                        gap={10}
                        type="custom"
                        cols={MOBILE || TABLET ? [] : ["460px", "1fr"]}
                    >
                        <DiseasesHistory />
                    </Cols>
                    <Cols
                        type="custom"
                        gap={10}
                        cols={MOBILE || TABLET ? [] : ["734px", "400px", "1fr"]}
                    >
                        <Access data={data?.data.access ?? []} />
                    </Cols>
                </AdminPanelContainer>
            </Container>
        </Layout>
    );
};
export default UserInfoPage;
