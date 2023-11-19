import { FC } from "react";

import { Layout } from "../Layout";
import {
    AdminPanelContainer,
    MailHeader,
    MailLayout,
    MailMessage,
    SocialNetworkInfoBlock,
    SocialNetworkInfoLayout,
    Indicator,
    BlueSliderArrows,
    IncomeBlock,
} from "@/widgets";
import { Text } from "@/shared/ui/Text";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { InfoText } from "@/shared/ui/InfoText";
import { LAPTOP, SMALL_LAPTOP } from "@/shared/utils";
import { Cols } from "@/shared/ui/Cols";
import { BlueBox } from "@/shared/ui/BlueBox";

import telegram from "/assets/telegram-icon.svg";
import users from "/assets/users-black.svg";
import read from "/assets/read-blue.svg";
import styles from "./styles.module.scss";

const SocialPage: FC = () => {
    const incomeData = [
        { title: "Расходы", sum: 1567 },
        { title: "Вся сумма", sum: 42567 },
    ];

    return (
        <Layout>
            <AdminPanelContainer>
                <Cols type="auto" gap={10} count={2}>
                    <Cols type="auto" gap={10} count={2}>
                        <SocialNetworkInfoBlock>
                            <SocialNetworkInfoLayout
                                unreadedMessages={100}
                                icon={telegram}
                                subs={1000}
                            />
                        </SocialNetworkInfoBlock>
                        <SocialNetworkInfoBlock>
                            <SocialNetworkInfoLayout
                                unreadedMessages={100}
                                icon={telegram}
                                subs={1000}
                            />
                        </SocialNetworkInfoBlock>
                        <SocialNetworkInfoBlock>
                            <SocialNetworkInfoLayout
                                unreadedMessages={100}
                                icon={telegram}
                                subs={1000}
                            />
                        </SocialNetworkInfoBlock>
                        <SocialNetworkInfoBlock>
                            <SocialNetworkInfoLayout
                                unreadedMessages={100}
                                icon={telegram}
                                subs={1000}
                            />
                        </SocialNetworkInfoBlock>
                    </Cols>
                    <WhiteContentBlock>
                        <Text type="h2" fz={SMALL_LAPTOP ? "15px" : "18px"}>
                            Количество подписчиков
                        </Text>
                    </WhiteContentBlock>
                </Cols>
                <Cols
                    type="custom"
                    gap={10}
                    cols={
                        LAPTOP
                            ? ["1fr", "523px"]
                            : SMALL_LAPTOP
                            ? []
                            : ["1fr", "615px"]
                    }
                >
                    <WhiteContentBlock>
                        <div className={styles.nav}>
                            <Text type="h2" fz={SMALL_LAPTOP ? "15px" : "18px"}>
                                Последние сообщения с почты
                            </Text>
                            <InfoText text="Вся почта" />
                        </div>
                        <MailLayout>
                            <MailHeader date={false} />
                            <div className={styles.list}>
                                {[1, 2, 3, 4].map((item) => (
                                    <MailMessage date={false} key={item} />
                                ))}
                            </div>
                        </MailLayout>
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        <Text type="h2" fz={SMALL_LAPTOP ? "15px" : "18px"}>
                            Доля социальных сетей
                        </Text>
                    </WhiteContentBlock>
                </Cols>
                <WhiteContentBlock>
                    <div className={styles.nav}>
                        <Text type="h2" fz={SMALL_LAPTOP ? "15px" : "18px"}>
                            Telegram
                        </Text>
                        <Indicator type="up" value="Работает" />
                    </div>
                    <Cols type="custom" gap={10} cols={["360px", "1fr"]}>
                        <BlueBox>
                            <Text type="h2" fz={SMALL_LAPTOP ? "15px" : "18px"}>
                                Количество подписчиков
                            </Text>
                            <div className={styles.data}>
                                <img src={telegram} alt="" />
                                <div className={styles.stats}>
                                    <div className={styles.item}>
                                        <Text
                                            type="h2"
                                            fz={SMALL_LAPTOP ? "22px" : "24px"}
                                            color="#00CC5E"
                                        >
                                            +1145 /
                                        </Text>
                                        <Text
                                            type="h4"
                                            fz={SMALL_LAPTOP ? "12px" : "14px"}
                                            color="#7D7F82"
                                        >
                                            за сутки
                                        </Text>
                                    </div>
                                    <div className={styles.item}>
                                        <Text
                                            type="h2"
                                            fz={SMALL_LAPTOP ? "22px" : "24px"}
                                            color="#D64657"
                                        >
                                            -195 /
                                        </Text>
                                        <Text
                                            type="h4"
                                            fz={SMALL_LAPTOP ? "12px" : "14px"}
                                            color="#7D7F82"
                                        >
                                            за сутки
                                        </Text>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.bottom}>
                                <Text
                                    type="p"
                                    fz={SMALL_LAPTOP ? "15px" : "18px"}
                                >
                                    Прирост 6525
                                </Text>
                                <img src={users} alt="" />
                                <Text
                                    type="p"
                                    fz={SMALL_LAPTOP ? "15px" : "18px"}
                                >
                                    за неделю
                                </Text>
                            </div>
                        </BlueBox>
                        <BlueBox>
                            <div className={styles.nav}>
                                <Text
                                    type="h2"
                                    fz={SMALL_LAPTOP ? "15px" : "18px"}
                                >
                                    Сбои в работе
                                </Text>
                            </div>
                        </BlueBox>
                    </Cols>
                    <Cols
                        type="custom"
                        cols={SMALL_LAPTOP ? ["1fr", "1fr"] : ["600px", "1fr"]}
                        gap={10}
                    >
                        <BlueBox
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                flexDirection: "column",
                                marginTop: 10,
                            }}
                        >
                            <div className={styles.nav}>
                                <Text
                                    type="h2"
                                    fz={SMALL_LAPTOP ? "15px" : "18px"}
                                >
                                    Последний пост
                                </Text>
                                <InfoText text="Все записи" />
                            </div>
                            <Text
                                type="p"
                                fz={SMALL_LAPTOP ? "14px" : "15px"}
                                color="#3C3D3E"
                            >
                                Сообщаем вам, что в связи с проведением
                                запланированных технических работ наш сайт и
                                мобильное приложение будут временно недоступны с
                                13.10.23 до 15.10.23. В это время мы будем
                                проводить необходимые обновления и улучшения,
                                чтобы обеспечить вам более стабильный и удобный
                                опыт пользования нашими услугами. Приносим
                                извинения за возможные неудобства, вызванные
                                этой временной недоступностью.
                            </Text>
                            <div className={styles.info}>
                                <Text
                                    type="p"
                                    fz={SMALL_LAPTOP ? "12px" : "14px"}
                                    color="#B1B2B4"
                                >
                                    01/07/2023
                                </Text>
                                <div className={styles.views}>
                                    <Text
                                        type="p"
                                        color="#0064FA"
                                        fz={SMALL_LAPTOP ? "12px" : "14px"}
                                    >
                                        Просмотрело 1312 человек
                                    </Text>
                                    <img src={read} alt="" />
                                </div>
                            </div>
                        </BlueBox>
                        <BlueBox
                            style={{
                                marginTop: 10,
                                gridGap: 16,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Text type="h2" fz={SMALL_LAPTOP ? "15px" : "18px"}>
                                История таргета
                            </Text>
                            <Cols gap={10} type="auto" count={2}>
                                <BlueBox style={{ padding: "30px 20px" }}>
                                    <Text
                                        type="p"
                                        fz={SMALL_LAPTOP ? "13px" : "18px"}
                                        color="#7D7F82"
                                        position="center"
                                    >
                                        История запуска таргета
                                    </Text>
                                </BlueBox>
                                <BlueBox style={{ padding: "30px 20px" }}>
                                    <Text
                                        type="p"
                                        fz={SMALL_LAPTOP ? "13px" : "18px"}
                                        color="#7D7F82"
                                        position="center"
                                    >
                                        История запуска таргета
                                    </Text>
                                </BlueBox>
                                <BlueBox style={{ padding: "30px 20px" }}>
                                    <Text
                                        type="p"
                                        fz={SMALL_LAPTOP ? "13px" : "18px"}
                                        color="#7D7F82"
                                        position="center"
                                    >
                                        История запуска таргета
                                    </Text>
                                </BlueBox>
                                <BlueBox style={{ padding: "30px 20px" }}>
                                    <Text
                                        type="p"
                                        fz={SMALL_LAPTOP ? "13px" : "18px"}
                                        color="#7D7F82"
                                        position="center"
                                    >
                                        История запуска таргета
                                    </Text>
                                </BlueBox>
                            </Cols>
                            <BlueSliderArrows />
                        </BlueBox>
                    </Cols>
                </WhiteContentBlock>
                <Cols type="custom" gap={10} cols={["352px", "1fr"]}>
                    <IncomeBlock title="Деньги на рекламу" data={incomeData} />
                    <WhiteContentBlock>
                        <Text type="h2" fz={SMALL_LAPTOP ? "15px" : "18px"}>
                            Реклама и расходы
                        </Text>
                    </WhiteContentBlock>
                </Cols>
            </AdminPanelContainer>
        </Layout>
    );
};

export default SocialPage;
