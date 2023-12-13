import { FC } from "react";

import { BlueBox } from "@/shared/ui/BlueBox";
import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";
import { MainText } from "@/shared/ui/MainText";
import { Text } from "@/shared/ui/Text";
import { Image } from "@/shared/ui/Image";

import question from "../../assets/question.svg";
import styles from "./styles.module.scss";
import { formatNumberToCurrensy } from "@/shared/lib/helpers/formatNumberToCurrensy";
import { IStepProps } from "./types";

export const Step: FC<IStepProps> = ({ text }) => {
    return (
        <BlueBox>
            <Rows gap={16} rows={["auto"]}>
                <Row gap={16} style={{ alignItems: "initial" }}>
                    <Rows gap={12} rows={["auto"]}>
                        <MainText text={text} />
                        <Text type="p" fz="14px" color="#7D7F82">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam
                        </Text>
                    </Rows>
                    <div className={styles.info}>
                        <Image src={question} alt="question" />
                    </div>
                </Row>
                <Row gap={5} style={{ alignItems: "baseline" }}>
                    <Text type="h4" fz="18px">
                        Бонус:
                    </Text>
                    <Text type="h2" fz="24px">
                        {formatNumberToCurrensy(15)}
                    </Text>
                </Row>
            </Rows>
        </BlueBox>
    );
};
