import { FC } from "react";
import { Text } from "@/shared/ui/Text";
import { Row } from "@/shared/ui/Row";

import center from "/assets/center-avatar.jpg";
import styles from "./CenterView.module.scss";
import { Rating } from "../../../features/Rating/ui";
import { InfoText } from "../../../shared/ui/InfoText";
import { Cols } from "../../../shared/ui/Cols";
import { SMALL_LAPTOP } from "@/shared/utils";

export const CenterView: FC = () => {
    return (
        <Row gap={10}>
            <img src={center} alt="" className={styles.avatar} />
            <div className={styles.data}>
                <Cols gap={10} type="auto" count={1}>
                    <div>
                        <Text type="h2" fz={SMALL_LAPTOP ? "13px" : "14px"}>
                            Горизонт Здоровья
                        </Text>
                        <Text type="h2" fz="12px">
                            Общая медицинская клиника
                        </Text>
                    </div>
                    <Row gap={0} style={{ justifyContent: "space-between" }}>
                        <Rating defaultValue={5} width="20" height="20" />
                        <InfoText text="Профиль" />
                    </Row>
                </Cols>
            </div>
        </Row>
    );
};
