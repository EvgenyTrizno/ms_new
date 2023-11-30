import { FC } from "react";

import { Layout } from "../Layout";
import { Container } from "@/shared/ui/Container";
import { User } from "../Profile/ui/UserInfo";
import { CentersList } from "./ui/CentersList";
import { ClinicsList } from "./ui/ClinicsList";
import { DoctorsList } from "./ui/DoctorsList";
import { LAPTOP, MOBILE, PC, SMALL_LAPTOP, TABLET } from "@/shared/utils";
import { CustomMobileHeader } from "@/widgets";

const SubsPage: FC = () => {
    return (
        <Layout>
            {(MOBILE || TABLET) && <CustomMobileHeader back text="Подписки" />}
            <Container>
                {(PC || SMALL_LAPTOP || LAPTOP) && <User />}
                <CentersList />
                <ClinicsList />
                <DoctorsList />
            </Container>
        </Layout>
    );
};

export default SubsPage;
