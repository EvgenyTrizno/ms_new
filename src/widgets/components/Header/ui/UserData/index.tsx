import { FC, useState } from "react";
import { useNavigate } from "react-router";

import { Row } from "@/shared/ui/Row";
import { Avatar } from "@/shared/ui/Avatar";
import { useAuth } from "@/shared/model/store/auth";
import { NotificationBtn, NotificationModal } from "@/entities/Notification/ui";
import { Balance } from "../Balance";

import noImageBlue from "/assets/noimage.svg";
import noImageRed from './assets/noImageRed.svg';

export const UserData: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { user } = useAuth();

    const navigate = useNavigate();
    const group = user && user.group.name;
    const sick = user && user.disease.length;

    return (
        <Row gap={20}>
            {group === "Врачи" && <Balance />}
            {group !== "Администраторы" && (
                <NotificationBtn onClick={() => setIsOpen((prev) => !prev)} />
            )}
            <Avatar
                img={
                    !user || (user && !user.image)
                            ? sick ? noImageRed : noImageBlue
                            : user && user.image
                }
                // img={
                //     (user && user.image)
                //     ? sick ? noImageRed : noImageBlue 
                //     : user && user.image || ""
                // }
                type="custom"
                size={40}
                onClick={() => navigate("/profile")}
            />
            <NotificationModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </Row>
    );
};
