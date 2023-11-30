import { FC } from "react";

import { Layout } from "../Layout";
import { Container } from "@/shared/ui/Container";
import { User } from "../Profile/ui/UserInfo";
import { MainCenter } from "./ui/MainCenter";
import { AdditionalCentersList } from "./ui/AdditionalCentersList";
import { LAPTOP, MOBILE, PC, SMALL_LAPTOP, TABLET } from "@/shared/utils";
import { CustomMobileHeader } from "@/widgets";

const MedicalCenter: FC = () => {
    return (
        <Layout>
            {(MOBILE || TABLET) && (
                <CustomMobileHeader back text="Медицинский центр" />
            )}
            <Container>
                {(PC || SMALL_LAPTOP || LAPTOP) && <User />}
                <MainCenter />
                <AdditionalCentersList />
            </Container>
        </Layout>
    );
};

export default MedicalCenter;
