import { FC, useState } from "react";
import { useNavigate } from "react-router";

import { Row } from "@/shared/ui/Row";
import { Avatar } from "@/shared/ui/Avatar";
import { useAuth } from "@/shared/model/store/auth";
import { NotificationBtn, NotificationModal } from "@/entities/Notification/ui";
import { Balance } from "../Balance";
import { Image } from "@/shared/ui/Image";

import download from "../../assets/download.svg";

export const UserData: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { user } = useAuth();

    const navigate = useNavigate();

    return (
        <Row gap={20}>
            {user && user.group.name === "Врачи" && (
                <Image src={download} width={20} height={20} alt="download" />
            )}
            {user && user.group.name === "Врачи" && <Balance />}
            <NotificationBtn onClick={() => setIsOpen((prev) => !prev)} />
            <Avatar
                img={(user && user.image) ?? ""}
                type="custom"
                size={40}
                onClick={() => navigate("/profile")}
            />
            <NotificationModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </Row>
    );
};
