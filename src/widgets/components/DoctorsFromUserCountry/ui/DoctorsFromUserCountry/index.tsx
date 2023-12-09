import { FC } from "react";

import { Rows } from "@/shared/ui/Rows";
import { Row } from "@/shared/ui/Row";
import { Text } from "@/shared/ui/Text";
import { SliderArrows } from "@/widgets";
import { List } from "../List";
import { useAuth } from "@/shared/model/store/auth";

export const DoctorsFromUserCountry: FC = () => {
    const { user } = useAuth();

    return (
        <Rows gap={10} rows={["auto"]}>
            <Row gap={0} style={{ justifyContent: "space-between" }}>
                <Text type="p" color="#7D7F82" fz="14px">
                    {user && user.country.name
                        ? `Специалисты из ${user.country.name}`
                        : ""}
                </Text>
                <SliderArrows />
            </Row>
            <List />
        </Rows>
    );
};
