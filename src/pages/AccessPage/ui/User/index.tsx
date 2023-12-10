import { FC, useState, MouseEvent } from "react";

import { Avatar } from "@/shared/ui/Avatar";
import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Text } from "@/shared/ui/Text";
import { UserRank } from "@/entities/User";
import { Image } from "@/shared/ui/Image";

import more from "./assets/more.svg";
import { PopUp } from "@/shared/ui/PopUp";
import { MOBILE } from "@/shared/utils";

export const User: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [top, setTop] = useState<number>(0);

    const handleClick = (e: MouseEvent<HTMLImageElement>) => {
        setTop(e.clientY + 10);
        setIsOpen((prev) => !prev);
    };

    return (
        <WhiteContentBlock>
            <Row gap={0} style={{ justifyContent: "space-between" }}>
                <Row gap={16}>
                    <Avatar
                        type={MOBILE ? "custom" : "user"}
                        size={MOBILE ? 52 : "L"}
                        img=""
                    />
                    <Rows gap={5} rows={["auto"]}>
                        <Text type="h4" fz="16px">
                            Михайлова Т. А.
                        </Text>
                        <UserRank rank="Хирург" />
                    </Rows>
                </Row>
                <Image src={more} alt={""} onClick={handleClick} />
            </Row>
            {isOpen && (
                <PopUp top={`${top}px`} right="30px">
                    <li>Подробнее</li>
                    <li style={{ color: "#D64657" }}>Удалить</li>
                </PopUp>
            )}
        </WhiteContentBlock>
    );
};
