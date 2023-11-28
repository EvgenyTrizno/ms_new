import { FC } from "react";

import { Layout } from "../Layout";
import { Container } from "@/shared/ui/Container";
import { User } from "../Profile/ui/UserInfo";
import { CentersList } from "./ui/CentersList";
import { ClinicsList } from "./ui/ClinicsList";
import { DoctorsList } from "./ui/DoctorsList";

const SubsPage: FC = () => {
    return (
        <Layout>
            <Container>
                <User />
                <CentersList />
                <ClinicsList />
                <DoctorsList />
            </Container>
        </Layout>
    );
};

export default SubsPage;
