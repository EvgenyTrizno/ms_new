import { FC, useState } from "react";

import { Layout } from "../Layout";
// import { BackArrow } from "@/shared";
import { Text } from "@/shared/ui/Text";
import { CustomMobileHeader, SelectCenterMap } from "@/widgets";
import { MOBILE } from "@/shared/utils";
import { Container } from "@/shared/ui/Container";
import { NoteParams } from "@/entities/Note/ui/NoteParams";
import { NoteCalendar } from "@/entities/Note/ui/NoteCalendar";
import { Cols } from "@/shared/ui/Cols";
import { Row } from "@/shared/ui/Row";
import { Image } from "@/shared/ui/Image";
import { Rows } from "@/shared/ui/Rows";
import { Btn } from "@/shared/ui/Btn";
import { SelectFormatOfNote } from "@/entities/Note/ui/SelectFormatOfNote";
import { SelectTypeOfNotify } from "@/entities/Note/ui/SelectTypeOfNotify";

import info from "/assets/info-circle.svg";

const CreateEventPage: FC = () => {
    const [map, setMap] = useState<boolean>(true);

    const onHandleClick = () => {
        setMap(false);
    };

    return (
        <>
            {map ? (
                <SelectCenterMap setMap={onHandleClick} />
            ) : (
                <Layout>
                    {MOBILE && (
                        <CustomMobileHeader back text="Создать запись" />
                    )}
                    <Container>
                        <Text type="h2" fz={MOBILE ? "22px" : "24px"}>
                            Создать событие
                        </Text>
                        <Cols type="custom" gap={16} cols={["470px", "1fr"]}>
                            <Rows gap={10} rows={["auto"]}>
                                <Row gap={10}>
                                    <Text
                                        type="p"
                                        color="#7D7F82"
                                        fz={MOBILE ? "15px" : ""}
                                    >
                                        Выберите формат записи
                                    </Text>
                                    <Image src={info} alt="warning circle" />
                                </Row>
                                <SelectFormatOfNote />
                                <Row gap={10}>
                                    <Text
                                        type="p"
                                        color="#7D7F82"
                                        fz={MOBILE ? "15px" : ""}
                                    >
                                        Выберите тип оповещения
                                    </Text>
                                    <Image src={info} alt="warning circle" />
                                </Row>
                                <SelectTypeOfNotify />
                                <NoteCalendar />
                            </Rows>
                            <Rows
                                gap={10}
                                rows={["max-content"]}
                                style={{ justifyContent: "flex-start" }}
                            >
                                <Text
                                    type="p"
                                    color="#7D7F82"
                                    fz={MOBILE ? "12px" : ""}
                                >
                                    Выберите формат записи
                                </Text>
                                <NoteParams />
                                <Btn color="#0064FA">Записаться</Btn>
                            </Rows>
                        </Cols>
                    </Container>
                </Layout>
            )}
        </>
    );
};

export default CreateEventPage;
