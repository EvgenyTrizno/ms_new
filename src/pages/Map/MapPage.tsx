import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { Map } from "../../widgets";

import styles from "./MapPage.module.scss";

export const MapPage: FC = () => {
    return (
        <Layout>
            <div>
                <Map />
            </div>
        </Layout>
    );
};
