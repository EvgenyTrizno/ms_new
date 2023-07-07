import { BASE_URL } from "@/shared/config";
import { useHttp } from "@/shared/hooks";
import { ISearchResult } from "./types";

export const SearchRes = () => {
    const { request } = useHttp();

    const getClinicsBySearch = async () => {
        const data: ISearchResult = await request(
            `${BASE_URL}/api/search/`,
            "GET"
        );

        return data.clinics;
    };

    const getCentersBySearch = async () => {
        const data: ISearchResult = await request(
            `${BASE_URL}/api/search/`,
            "GET"
        );

        return data.centers;
    };

    const getUsersBySearch = async () => {
        const data: ISearchResult = await request(
            `${BASE_URL}/api/search/`,
            "GET"
        );

        return data.users;
    };

    const getAllResult = async () => {
        const data: ISearchResult = await request(
            `${BASE_URL}/api/search/`,
            "GET"
        );

        return data;
    };

    return {
        getClinicsBySearch,
        getCentersBySearch,
        getUsersBySearch,
        getAllResult,
    };
};
