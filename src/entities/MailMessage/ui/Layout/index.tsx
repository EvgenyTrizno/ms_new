import { FC } from "react";
import { IMailHeaderProps } from "../../../../widgets/components/MailHeader/MailHeader";

import { Text } from "@/shared/ui/Text";
import { MailManage } from "../../../MailView/ui/MailManage";
import { LAPTOP, MOBILE, TABLET } from "@/shared/utils";

import styles from "./styles.module.scss";
import { Row } from "@/shared/ui/Row";

export const MailMessage: FC<IMailHeaderProps> = ({ date }) => {
    return (
        <div
            className={styles.message}
            style={{ gridTemplateColumns: !date ? "125px 1fr 125px" : "" }}
        >
            {!MOBILE && !TABLET ? (
                <>
                    <Text type="h4">hh.ru</Text>
                    <div className={styles.text}>
                        <Text type="h4" color="#787B86">
                            Ваше резюме просматривали&nbsp;
                        </Text>
                        <Text type="p" color="#AAAFBD">
                            -&nbsp;
                        </Text>
                        <Text type="p" color="#787B86">
                            {LAPTOP
                                ? "Ваше резюме вчера просматривали 3 компании".slice(
                                      0,
                                      4
                                  ) + "..."
                                : " Ваше резюме вчера просматривали 3 компании"}
                        </Text>
                    </div>
                    {date && (
                        <Text type="h4" color="#1D2226" position="center">
                            12:30
                        </Text>
                    )}
                </>
            ) : (
                <div className={styles.container}>
                    <Row gap={0} style={{ justifyContent: "space-between" }}>
                        <Text type="h4">hh.ru</Text>
                        {date && (
                            <Text type="h4" color="#1D2226" position="center">
                                12:30
                            </Text>
                        )}
                    </Row>
                    <Text type="p" color="#787B86">
                        {LAPTOP
                            ? "Ваше резюме вчера просматривали 3 компании".slice(
                                  0,
                                  4
                              ) + "..."
                            : MOBILE
                            ? "Ваше резюме вчера просматривали 3 компании".slice(
                                  0,
                                  4
                              ) + "..."
                            : " Ваше резюме вчера просматривали 3 компании"}
                    </Text>
                </div>
            )}
            {!MOBILE && !TABLET && <MailManage />}
        </div>
    );
};
