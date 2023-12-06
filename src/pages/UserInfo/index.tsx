import { FC } from "react";
import { useParams } from "react-router";

import { Layout } from "../Layout";
import { AdminPanelContainer } from "@/widgets";
import { Cols } from "@/shared/ui/Cols";
import { MedicalHistory } from "./ui/MedicalHistory";
import { UserInfo } from "./ui/UserInfo";
import { NotesList } from "./ui/NotesList";
import { useUserQuery } from "./lib/hooks/useUserQuery";

const UserInfoPage: FC = () => {
    const { id } = useParams();
    const { data } = useUserQuery(id ? +id : 0);

    return (
        <Layout>
            <AdminPanelContainer>
                <Cols gap={10} type="custom" cols={["872px", "1fr"]}>
                    <UserInfo />
                    <MedicalHistory />
                </Cols>
                <NotesList />
            </AdminPanelContainer>
        </Layout>
    );
};
export default UserInfoPage;
