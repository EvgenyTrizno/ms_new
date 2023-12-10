import { FC } from "react";

import { Layout } from "../Layout";
import { Container } from "@/shared/ui/Container";
import { User } from "../Profile/ui/UserInfo";
import { MainCenter } from "./ui/MainCenter";
import { AdditionalCentersList } from "./ui/AdditionalCentersList";
import { LAPTOP, MOBILE, PC, SMALL_LAPTOP, TABLET } from "@/shared/utils";
import { CustomMobileHeader } from "@/widgets";
import { Btn } from "@/shared/ui/Btn";
import { EmployeesList } from "./ui/EmployeesList";

const MedicalCenter: FC = () => {
    return (
        <Layout>
            {(MOBILE || TABLET) && (
                <CustomMobileHeader back text="Медицинский центр" />
            )}
            <Container>
                {(PC || SMALL_LAPTOP || LAPTOP) && <User />}
                <MainCenter />
                {(MOBILE || TABLET) && <EmployeesList />}
                <AdditionalCentersList />
                <Btn
                    color="linear-gradient(94deg, #D64657 0%, #0064FA 100%)"
                    width="250px"
                    br="12px"
                >
                    Добавить доп. центр
                </Btn>
            </Container>
        </Layout>
    );
};

export default MedicalCenter;
