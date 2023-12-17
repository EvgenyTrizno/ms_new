import { FC } from "react";

import { Layout } from "../Layout";
import { ReminderBlock } from "@/widgets";
import { MOBILE, TABLET } from "@/shared/utils";
import { Container } from "@/shared/ui/Container";
import { User } from "./ui/UserInfo";
import { MainData } from "./ui/MainData";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import { MobileHeader } from "@/widgets/components/MobileHeader";

const ProfilePage: FC = () => {
    return (
        <Layout>
            {(MOBILE || TABLET) && <MobileHeader />}
            <Container height={MOBILE ? "calc(100% - 156px)" : ""}>
                <ReminderBlock
                    type="timer"
                    width={MOBILE ? "100%" : "max-content"}
                />
                {!MOBILE && !TABLET && <User />}
                <MainData />
            </Container>
            {MOBILE && <MobileMenu />}
        </Layout>
    );
};

export default ProfilePage;
