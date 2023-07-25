import { BASE_URL } from "@/shared/config";
import { useHttp } from "@/shared/hooks";
import { ICentersData } from "./types";

export const Centers = () => {
    const { request } = useHttp();

    const getCentersByCity = async (city: string): Promise<ICentersData[]> => {
        const data: ICentersData[] = await request(
            `${BASE_URL}/api/users/centers/${city}/`,
            "GET"
        );

        return data;
    };

    return {
        getCentersByCity,
    };
};
