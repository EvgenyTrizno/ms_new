import { BASE_URL } from "@/shared/config";
import { useHttp } from "@/shared/hooks";
import { IVirusListData } from "./types";

export const Virus = () => {
    const { request } = useHttp();

    const getVirusList = async () => {
        const data: IVirusListData[] = await request(
            `${BASE_URL}/api/create/user/get_diseases/`
        );

        return data;
    };

    return { getVirusList };
};
