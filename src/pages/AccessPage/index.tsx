import { FC } from "react";

import { Layout } from "../Layout";
import { Container } from "@/shared/ui/Container";
import { CustomMobileHeader, ReminderBlock } from "@/widgets";
import { User } from "../Profile/ui/UserInfo";
import { Accepted } from "./ui/Accepted";
import { NoAccepted } from "./ui/NoAccepted";
import { LAPTOP, MOBILE, PC, SMALL_LAPTOP, TABLET } from "@/shared/utils";
import { AddBtn } from "./ui/AddBtn";

const AccessPage: FC = () => {
    return (
        <Layout>
            {(MOBILE || TABLET) && (
                <CustomMobileHeader back text="Доступ" btn={<AddBtn />} />
            )}
            <Container>
                {(PC || LAPTOP || SMALL_LAPTOP) && (
                    <>
                        <ReminderBlock
                            type="timer"
                            width={PC || LAPTOP ? "340px" : ""}
                        />
                        <User />
                    </>
                )}
                <Accepted />
                <NoAccepted />
            </Container>
        </Layout>
    );
};

export default AccessPage;
