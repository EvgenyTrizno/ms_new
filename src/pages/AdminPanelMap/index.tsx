import { FC } from "react";

import { WorldMap } from "./ui/WorldMap";
import { Container } from "@/shared/ui/Container";
import { Layout } from "../Layout";
import { MOBILE, TABLET } from "@/shared/utils";
import { CustomMobileHeader } from "@/widgets";

const AdminPanelMapPage: FC = () => {
    return (
        <Layout>
            {(MOBILE || TABLET) && <CustomMobileHeader back text="Карта" />}
            <Container>
                <WorldMap />
            </Container>
        </Layout>
    );
};

export default AdminPanelMapPage;
