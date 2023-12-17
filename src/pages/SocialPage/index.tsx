import { FC } from "react";

import { Layout } from "../Layout";
import { CustomMobileHeader, IncomeBlock } from "@/widgets";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { LAPTOP, MOBILE, SMALL_LAPTOP, TABLET } from "@/shared/utils";
import { Cols } from "@/shared/ui/Cols";
import { SocialNetworks } from "./ui/SocialNetworks";
import { SubsChart } from "./ui/SubsChart";
import { MailView } from "./ui/MailView";
import { MainText } from "@/shared/ui/MainText";
import { Container } from "@/shared/ui/Container";
import { ShareSocialNetworks } from "./ui/ShareSocilaNetworks";
import { SocialInfo } from "./ui/SocialInfo";

const SocialPage: FC = () => {
    const incomeData = [
        { title: "Расходы", sum: 1567 },
        { title: "Вся сумма", sum: 42567 },
    ];

    return (
        <Layout>
            {MOBILE && <CustomMobileHeader text="Соц.сети и почта" back />}
            <Container>
                <Cols type="auto" gap={10} count={MOBILE || TABLET ? 1 : 2}>
                    <SocialNetworks />
                    <SubsChart />
                </Cols>
                <Cols
                    type="custom"
                    gap={10}
                    cols={
                        LAPTOP
                            ? ["1fr", "523px"]
                            : SMALL_LAPTOP || MOBILE || TABLET
                            ? []
                            : ["1fr", "615px"]
                    }
                >
                    <MailView />
                    <ShareSocialNetworks />
                </Cols>
                <SocialInfo />
                <Cols
                    type="custom"
                    gap={10}
                    cols={MOBILE || TABLET ? [] : ["352px", "1fr"]}
                >
                    <IncomeBlock title="Деньги на рекламу" data={incomeData} />
                    <WhiteContentBlock>
                        <MainText text="Реклама и расходы" />
                    </WhiteContentBlock>
                </Cols>
            </Container>
        </Layout>
    );
};

export default SocialPage;
