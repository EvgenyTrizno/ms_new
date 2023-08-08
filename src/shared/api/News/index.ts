import { BASE_URL } from "@/shared/config";
import { useHttp } from "@/shared/hooks";

export const News = () => {
    const { request } = useHttp();

    const getNews = async (token: string) => {
        return await request(`${BASE_URL}/api/news/`, "GET", null, {
            Authorization: `Bearer ${token}`,
        });
    };

    return { getNews };
};
