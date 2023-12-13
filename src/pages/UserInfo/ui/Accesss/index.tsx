import { FC, useEffect, useState } from "react";
import { IAccessData } from "./types";

import { Cols } from "@/shared/ui/Cols";
import { Rows } from "@/shared/ui/Rows";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Text } from "@/shared/ui/Text";
import { Row } from "@/shared/ui/Row";
import { InfoText } from "@/shared/ui/InfoText";
import { Btn } from "@/shared/ui/Btn";
import { Image } from "@/shared/ui/Image";
import { useAccessMutate } from "../../lib/hooks/useAccessMutate";
import { Avatar } from "@/shared/ui/Avatar";

import icon from "./assets/x.svg";
import { MOBILE, TABLET } from "@/shared/utils";

export const Access: FC<IAccessData> = ({ data }) => {
    const [id, setId] = useState<number>(0);
    const { mutate } = useAccessMutate(id, "accept");

    useEffect(() => {
        id && mutate();
    }, [id]);

    return (
        <Cols
            type="custom"
            gap={10}
            cols={MOBILE || TABLET ? [] : ["362px", "362px"]}
        >
            <WhiteContentBlock>
                <Rows gap={16} rows={["auto"]}>
                    <Text type="h5" fz="16px">
                        Предоставлен:
                    </Text>
                    {data[0] &&
                        data[0]?.access_accept.map((item) => (
                            <Row gap={10} key={item.id}>
                                <Avatar size="S" type="user" img={item.image} />
                                <Rows
                                    gap={10}
                                    rows={["auto"]}
                                    style={{ width: "100%" }}
                                >
                                    <Text type="h6" fz="14px">
                                        {`${item.last_name} ${item.first_name} ${item.surname}`}
                                    </Text>
                                    <Row
                                        gap={0}
                                        style={{
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <InfoText text="Профиль" />
                                        <Btn
                                            onClick={() => setId(item.id)}
                                            width="101px"
                                            br="50px"
                                            padding="4px 10px"
                                            height="15px"
                                            color="#D64657"
                                            fz="12px"
                                        >
                                            <Row gap={3}>
                                                Запретить
                                                <Image src={icon} alt="" />
                                            </Row>
                                        </Btn>
                                    </Row>
                                </Rows>
                            </Row>
                        ))}
                </Rows>
            </WhiteContentBlock>
            <WhiteContentBlock>
                <Rows gap={16} rows={["auto"]}>
                    <Text type="h5" fz="16px">
                        Запрошен:
                    </Text>
                    {data[0] &&
                        data[0]?.access_unaccept.map((item) => (
                            <Row gap={10} key={item.id}>
                                <Avatar size="S" type="user" img={item.image} />
                                <Rows
                                    gap={10}
                                    rows={["auto"]}
                                    style={{ width: "100%" }}
                                >
                                    <Text type="h6" fz="14px">
                                        {`${item.last_name} ${item.first_name} ${item.surname}`}
                                    </Text>
                                    <Row
                                        gap={0}
                                        style={{
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <InfoText text="Профиль" />
                                        <Btn
                                            width="101px"
                                            br="50px"
                                            padding="4px 10px"
                                            height="15px"
                                            color="#D64657"
                                            fz="12px"
                                            onClick={() => setId(item.id)}
                                        >
                                            <Row gap={3}>
                                                Отменить
                                                <Image src={icon} alt="" />
                                            </Row>
                                        </Btn>
                                    </Row>
                                </Rows>
                            </Row>
                        ))}
                </Rows>
            </WhiteContentBlock>
        </Cols>
    );
};
