import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { Map } from "@/widgets";

export const MapPage: FC = () => {
    return (
        <Layout>
            <div>
                <Map />
            </div>
        </Layout>
    );
};
