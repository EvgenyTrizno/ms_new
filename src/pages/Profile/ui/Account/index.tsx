import { FC } from "react";

import { Input } from "@/shared/ui/Input";
import { useAuth } from "@/shared/model/store/auth";
import { Text } from "@/shared/ui/Text";
import { Rows } from "@/shared/ui/Rows";
import { Cols } from "@/shared/ui/Cols";
import { Row } from "@/shared/ui/Row";
import { ChangeBtn } from "../ChangeBtn";
import { Protection } from "@/widgets/components/Protection";

export const Account: FC = () => {
    // const [isShowValue, setIsShowValue] = useState<boolean>(false);
    // const [inputDateValue, setInputDateValue] = useState<string>("ГГГГ-ММ-ДД");

    const { user } = useAuth();

    return (
        <Rows gap={24} rows={["auto"]} style={{ marginTop: 24 }}>
            <Rows gap={12} rows={["auto"]}>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <Text type="p" color="#7D7F82" fz="14px">
                        Основная информация
                    </Text>
                    <ChangeBtn />
                </Row>
                <Cols type="auto" count={2} gap={16}>
                    <Rows gap={16} rows={["repeat(4, 49px)"]}>
                        <Input
                            type="text"
                            placeholder="Имя"
                            value={user?.first_name ?? ""}
                        />
                        <Input
                            type="text"
                            placeholder="Дата рождения"
                            value={user?.address ?? ""}
                        />
                        <Input type="text" placeholder="Логин" value={""} />
                        <Input
                            type="text"
                            placeholder="Город"
                            value={user?.city.name}
                        />
                    </Rows>
                    <Rows gap={16} rows={["repeat(4, 49px)"]}>
                        <Input
                            type="text"
                            placeholder="Фамилия"
                            value={user?.last_name ?? ""}
                        />
                        <Input
                            type="text"
                            placeholder="Пол"
                            value={user?.sex}
                        />
                        <Input
                            type="text"
                            placeholder="Страна"
                            value={user?.country.name}
                        />
                        <Input
                            type="text"
                            placeholder="Адрес"
                            value={user?.address ?? ""}
                        />
                    </Rows>
                </Cols>
            </Rows>
            <Rows gap={12} rows={["auto"]}>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <Text type="p" color="#7D7F82" fz="14px">
                        Интерес
                    </Text>
                    <ChangeBtn />
                </Row>
                <Input
                    type="text"
                    placeholder="Интерес"
                    value={user?.interest ?? ""}
                />
            </Rows>
            <Rows gap={12} rows={["auto"]}>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <Text type="p" color="#7D7F82" fz="14px">
                        Защита профиля
                    </Text>
                    <ChangeBtn />
                </Row>
                <Protection />
            </Rows>
        </Rows>
    );
};
