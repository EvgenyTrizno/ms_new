import { FC, useState } from "react";

import { Row } from "@/shared/ui/Row";
import { Avatar } from "@/shared/ui/Avatar";

import { useAuth } from "@/shared/model/store/auth";
import { NotificationBtn, NotificationModal } from "@/entities/Notification/ui";
import { useNavigate } from "react-router";

export const UserData: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { user } = useAuth();

    const navigate = useNavigate();

    return (
        <Row gap={20}>
            {/* {group === "Врачи" && <Balance />} */}
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
