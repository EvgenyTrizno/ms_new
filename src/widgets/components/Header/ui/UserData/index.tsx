import { FC } from "react";

import { Row } from "@/shared/ui/Row";
import { Avatar } from "@/shared/ui/Avatar";

import { useAuth } from "@/shared/model/store/auth";

export const UserData: FC = () => {
    const { user } = useAuth();

    return (
        <Row gap={20}>
            {/* {group === "Врачи" && <Balance />} */}
            {/* <Image
                src={notification}
                alt=""
                onClick={(e) => {
                    e.stopPropagation();
                    // setIsNotification(!isNotification);
                }}
            /> */}
            <Avatar img={(user && user.image) ?? ""} type="custom" size={40} />
        </Row>
    );
};
