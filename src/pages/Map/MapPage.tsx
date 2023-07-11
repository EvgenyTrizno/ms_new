import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { Map } from "@/widgets";

const MapPage: FC = () => {
    return (
        <Layout>
            <div>
                <Map />
            </div>
        </Layout>
    );
};

export default MapPage;
