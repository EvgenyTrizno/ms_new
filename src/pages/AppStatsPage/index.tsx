import { FC } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from "chart.js";

import { Cols } from "@/shared/ui/Cols";
import { Layout } from "../Layout";
import { PatientDiseases } from "./ui/PatientDiseases";
import { AgeStats } from "./ui/AgeStats";
import { SiteVisit } from "./ui/SiteVisit";
import { UserReports } from "./ui/UserReports";
import { AppDownload } from "./ui/AppDownload";
import { ServerStats } from "./ui/ServerStats";
import { ExtraCalls } from "./ui/ExtraCalls";
import { DownloadsChart } from "./ui/DownloadsChart";
import { Questions } from "./ui/Questions";
import { Sms } from "./ui/Sms";
import { TimeOnSite } from "./ui/TimeOnSite";
import { Container } from "@/shared/ui/Container";
import { MOBILE, TABLET } from "@/shared/utils";
import { CustomMobileHeader } from "@/widgets";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    PointElement,
    LineElement
);

const AppStatsPage: FC = () => {
    return (
        <Layout>
            {(MOBILE || TABLET) && (
                <CustomMobileHeader text="Сайт и приложение" back />
            )}
            <Container>
                <Cols
                    type="custom"
                    gap={10}
                    cols={MOBILE || TABLET ? [] : ["470px", "1fr"]}
                >
                    <PatientDiseases />
                    <TimeOnSite />
                </Cols>
                <Cols
                    type="custom"
                    gap={10}
                    cols={MOBILE || TABLET ? [] : ["1fr", "333px"]}
                >
                    <AgeStats />
                    <SiteVisit />
                </Cols>
                <Cols
                    type="custom"
                    gap={10}
                    cols={MOBILE || TABLET ? [] : ["500px", "1fr"]}
                >
                    <ExtraCalls />
                    <DownloadsChart />
                </Cols>
                <Cols
                    gap={10}
                    type="custom"
                    cols={MOBILE || TABLET ? [] : ["250px", "1fr"]}
                >
                    <AppDownload />
                    <UserReports />
                </Cols>
                <Questions />
                <Sms />
                <ServerStats />
            </Container>
        </Layout>
    );
};

export default AppStatsPage;
