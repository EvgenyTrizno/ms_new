import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { IChatListProps } from "./types";

import { Rows } from "@/shared/ui/Rows";
import { ChatView } from "../ChatView";
import { useChatQuery } from "../../lib/hooks/useChatQuery";
import { useAuth } from "@/shared/model/store/auth";
import { IUserData } from "@/shared/types/user.interface";

import suprt from "./assets/support.svg";
// import suprtRed from "./assets/support-red.svg";
import styles from "./styles.module.scss";
import { useChat } from "@/shared/model/store/chat";

export const ChatList: FC<IChatListProps> = ({ search }) => {
    const { data: chats } = useChatQuery();
    const { user: currUser } = useAuth();
    const sick = currUser && currUser.disease.length;
    const navigate = useNavigate();
    const { id } = useParams();
    const { setUser, setChatId } = useChat();

    const handleClick = (uuid: string, user: IUserData, id: number) => {
        navigate(`/messages/chat/${uuid}/`);
        setUser(user);
        setChatId(id);
    };

    useEffect(() => {
        const extraBtn = document.querySelector("#extraBtn") as HTMLElement;

        extraBtn && (extraBtn.style.display = "none");

        return () => {
            extraBtn && (extraBtn.style.display = "block");
        };
    }, []);

    return (
        <Rows gap={0} rows={["auto"]}>
            <ChatView
                name="Тех.поддержка"
                time="2:23"
                message="Чем мы можем Вам помочь?"
                count={0}
                active={false}
                img={
                    <div
                        className={`${styles.supportAvatar} ${
                            sick && styles.sick
                        }`}
                    >
                        <img src={suprt} alt="" />
                    </div>
                }
                onClick={() => ({})}
            />
            <ChatView
                name="Ведущий центр"
                time="2:23"
                message="Чем мы можем Вам помочь?"
                count={0}
                active={false}
                img={currUser?.image}
                onClick={() => ({})}
            />
            {chats &&
                chats.data.map((item) => {
                    const user = item.users.filter(
                        (item) => item.id !== (currUser && currUser.id)
                    );

                    return (
                        <ChatView
                            key={item.id}
                            name={user[0].first_name}
                            time={""}
                            message={""}
                            count={0}
                            active={item.uuid === id}
                            img={user[0].image}
                            onClick={() =>
                                handleClick(item.uuid, user[0], item.id)
                            }
                        />
                    );
                })}
        </Rows>
    );
};
