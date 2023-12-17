import { FC } from "react";
import { useNavigate } from "react-router";

import { MailView as Mail } from "@/entities/MailView";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Row } from "@/shared/ui/Row";
import { MainText } from "@/shared/ui/MainText";
import { InfoText } from "@/shared/ui/InfoText";
import { MailMessage } from "@/entities/MailMessage";
import { MOBILE, TABLET } from "@/shared/utils";

import styles from "./styles.module.scss";

export const MailView: FC = () => {
    const navigate = useNavigate();

    return (
        <WhiteContentBlock>
            <Row gap={0} className={styles.nav}>
                <MainText text="Последние сообщения с почты" />
                <InfoText text="Вся почта" onClick={() => navigate("/mail")} />
            </Row>
            <Mail
                messages={
                    <>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <MailMessage
                                key={item}
                                date={MOBILE || TABLET ? true : false}
                            />
                        ))}
                    </>
                }
                withHeader={MOBILE || TABLET ? false : true}
                gap={24}
                date={false}
            />
        </WhiteContentBlock>
    );
};
