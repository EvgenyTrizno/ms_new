/* eslint-disable no-useless-catch */
import { TMethod } from "./types";

export const useHttp = () => {
    const request = async (
        url: string,
        method: TMethod = "GET",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        body: Record<string, any> | null = null,
        headers: Record<string, string> = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://127.0.0.1:8000",
            "Access-Control-Allow-Methods": "GET, PUT, PATCH, POST, DELETE",
            "Access-Control-Allow-Headers": "Content-Type",
        }
    ) => {
        try {
            const options: RequestInit = {
                method,
                headers,
            };

            if (body) {
                options.body = JSON.stringify(body);
            }

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(
                    `Не удалось выполнить запрос по адресу ${url}, статус ошибки: ${response.status}`
                );
            }

            const data = await response.json();

            return data;
        } catch (e) {
            throw e;
        }
    };

    return { request };
};
