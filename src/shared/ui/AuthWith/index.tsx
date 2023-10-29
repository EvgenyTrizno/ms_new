import { FC } from "react";
import { IAuthWithProps } from "./types";

import { BlueBox } from "@/shared/ui/BlueBox";
import { Row } from "@/shared/ui/Row";
import { Text } from "@/shared/ui/Text";
import { Image } from "@/shared/ui/Image";

export const AuthWith: FC<IAuthWithProps> = ({ img, text }) => {
    return (
        <BlueBox
            style={{
                padding: 16,
                borderColor: "#D6E7FF",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Row gap={10}>
                <Image src={img} alt="auth icon" width={24} height={24} />
                <Text type="p">{text}</Text>
            </Row>
        </BlueBox>
    );
};
