import { FC } from "react";

import { Layout } from "../Layout";
import { Container } from "@/shared/ui/Container";
import { User } from "../Profile/ui/UserInfo";
import { FilesList } from "./ui/FilesList";
import { FoldersList } from "./ui/FoldersList";
import { LAPTOP, MOBILE, PC, SMALL_LAPTOP, TABLET } from "@/shared/utils";
import { CustomMobileHeader } from "@/widgets";

const SavedPage: FC = () => {
    return (
        <Layout>
            {(MOBILE || TABLET) && (
                <CustomMobileHeader back text="Сохраненное" />
            )}
            <Container>
                {PC || SMALL_LAPTOP || (LAPTOP && <User />)}
                <FilesList />
                <FoldersList />
            </Container>
        </Layout>
    );
};

export default SavedPage;
