import { FC } from "react";

import { Layout } from "../Layout";
import { Container } from "@/shared/ui/Container";
import { User } from "../Profile/ui/UserInfo";
import { List } from "./ui/List";

const SettingsPage: FC = () => {
    return (
        <Layout>
            <Container>
                <User />
                <List />
            </Container>
        </Layout>
    );
};

export default SettingsPage;
