import { FC } from "react";

import { Layout } from "../Layout";
import { Map } from "@/widgets/components/Map";

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
