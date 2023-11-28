import { FC } from "react";

import { Layout } from "../Layout";
import { Container } from "@/shared/ui/Container";
import { ReminderBlock } from "@/widgets";
import { User } from "../Profile/ui/UserInfo";
import { Accepted } from "./ui/Accepted";
import { NoAccepted } from "./ui/NoAccepted";

const AccessPage: FC = () => {
    return (
        <Layout>
            <Container>
                <ReminderBlock type="timer" />
                <User />
                <Accepted />
                <NoAccepted />
            </Container>
        </Layout>
    );
};

export default AccessPage;
