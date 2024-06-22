import { FC, useEffect, useState } from "react";

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
import { Doctor, Note } from "@/shared/types";
import { formatDate, formatTime } from "@/shared/utils";
import { useCenters } from "@/shared/model/store/centers";
import { useDoctors } from "@/shared/model/store/useDoctors";

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
    const { centers } = useCenters();
    const { doctors: allDoctors } = useDoctors();

    const { user } = useAuth();
    const [startTime] = useState(startDate ? formatTime(startDate) : undefined);
    const [endTime] = useState(endDate ? formatTime(endDate) : undefined);

    const [center] = useState(centers?.find((el) => el.id === data.center));
    const [doctors, setDoctors] = useState<Doctor[]>();

    useEffect(() => {
        console.log(allDoctors)
        if (!data.doctors || !allDoctors) return;

        const doctors = [];

        for (let i = 0; i < data.doctors.length; i++) {
            const doctorId = data.doctors[i];

            const currentDoctor = allDoctors.find((el) => el.id === doctorId);

            if (!currentDoctor) return;

            doctors.push(currentDoctor);
        }

        setDoctors(doctors);
    }, [allDoctors, data.doctors]);

    return (
        <WhiteContentBlock className={`${styles.note}`}>
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
                        <Text type="p" fz="12px">
                            {center?.name}
                        </Text>
                    </Row>
                    <Row gap={10}>
                        <Text type="p" color="#B1B2B4" fz="12px">
                            Врачи:
                        </Text>
                        <Text type="p" fz="12px">
                            {doctors?.map((doctor) => {
                                return `${doctor.last_name} ${doctor.first_name} ${doctor.middle_name}`;
                            })}
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
