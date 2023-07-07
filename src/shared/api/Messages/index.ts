import { BASE_URL } from "@/shared/config";
import { useHttp } from "@/shared/hooks";

export const Messages = () => {
    const { request } = useHttp();

    const getUserChatById = async (id: number) => {
        const messages = await request(`${BASE_URL}/api/chat/${id}`);

        return messages;
    };

    return { getUserChatById };
};
