import { FC } from "react";

import { Layout } from "../Layout";
import { Container } from "@/shared/ui/Container";
import { User } from "../Profile/ui/UserInfo";
import { FilesList } from "./ui/FilesList";
import { FoldersList } from "./ui/FoldersList";

const SavedPage: FC = () => {
    return (
        <Layout>
            <Container>
                <User />
                <FilesList />
                <FoldersList />
            </Container>
        </Layout>
    );
};

export default SavedPage;
