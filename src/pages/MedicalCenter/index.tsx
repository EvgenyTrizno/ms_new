import { FC } from "react";

import { Layout } from "../Layout";
import { Container } from "@/shared/ui/Container";
import { User } from "../Profile/ui/UserInfo";
import { MainCenter } from "./ui/MainCenter";
import { AdditionalCentersList } from "./ui/AdditionalCentersList";

const MedicalCenter: FC = () => {
    return (
        <Layout>
            <Container>
                <User />
                <MainCenter />
                <AdditionalCentersList />
            </Container>
        </Layout>
    );
};

export default MedicalCenter;
