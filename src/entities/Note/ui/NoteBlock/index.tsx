import { FC, useState } from "react";

import { Text } from "@/shared/ui/Text";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { Row } from "@/shared/ui/Row";
import { Image } from "@/shared/ui/Image";
import { useAuth } from "@/shared/model/store/auth";

import calendar from "./assets/calendar.svg";
import alarm from "./assets/alarm-clock.svg";
// import clock from "./assets/clock-fast-forward.svg";
import styles from "./styles.module.scss";
import { Note } from "@/shared/types";
import { formatDate, formatTime } from "@/shared/utils";

type Props = {
  data: Note;
};

export const NoteBlock: FC<Props> = ({ data }) => {
  const [startDate] = useState(
    data.time_start ? new Date(data.time_start) : undefined
  );
  const [endDate] = useState(
    data.time_end ? new Date(data.time_end) : undefined
  );

  const { user } = useAuth();
  const [startTime] = useState(startDate ? formatTime(startDate) : undefined);
  const [endTime] = useState(endDate ? formatTime(endDate) : undefined);

  const sick = user && user.disease.length;

  return (
    <WhiteContentBlock className={`${styles.note} ${sick && styles.sick}`}>
      <Rows gap={20} rows={["auto"]}>
        <Rows gap={7} rows={["auto", "auto"]}>
          <Text type="p" color="#9B9B9B" fz="12px">
            {data.title}
          </Text>
          <Text type="h2" color="#000" fz="17px">
            {data.problem}
          </Text>
        </Rows>
        <Rows gap={10} rows={["auto"]}>
          <Row gap={10}>
            <Text type="p" color="#B1B2B4" fz="12px">
              Формат:
            </Text>
            <Text
              type="p"
              color={data.online ? "#00CC5E" : "#d64657"}
              fz="12px"
            >
              {data.online ? "Online" : "Offline"}
            </Text>
          </Row>
          <Row gap={10}>
            <Text type="p" color="#B1B2B4" fz="12px">
              Центр:
            </Text>
            <Text
              type="p"
              fz="12px"
            >Доделать</Text>
          </Row>
          <Row gap={10}>
            <Text type="p" color="#B1B2B4" fz="12px">
              Врач:
            </Text>
            <Text type="p" fz="12px">
              Доделать
            </Text>
          </Row>
        </Rows>
        <div className={styles.line}></div>
        <Row gap={16} style={{ justifyContent: "center" }}>
          <Row gap={6}>
            <Image src={calendar} alt="" width={20} height={20} />
            <Text type="p" fz="12px">
              {startDate ? formatDate(startDate) : "-"}
            </Text>
          </Row>
          <Row gap={6}>
            <Image src={alarm} alt="" width={20} height={20} />
            <Text type="p" fz="12px">
              {startTime} - {endTime}
            </Text>
          </Row>
          {/* <Row gap={6}>
            <Image src={clock} alt="" width={20} height={20} />
            <Text type="p" fz="12px">
              40 минут
            </Text>
          </Row> */}
        </Row>
        <Text type="p" fz="12px" position="center">
          Доступно в групповом чате
        </Text>
      </Rows>
    </WhiteContentBlock>
  );
};
