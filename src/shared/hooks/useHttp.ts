import { useCallback } from "react";
/* eslint-disable no-useless-catch */
import { TMethod } from "./types";

export const useHttp = () => {
    const request = useCallback(
        async (
            url: string,
            method: TMethod = "GET",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            body?: Record<string, any> | null,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            headers?: Record<string, any>
        ): Promise<any> => {
            try {
                const options: RequestInit = {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://127.0.0.1:8000",
                        "Access-Control-Allow-Methods":
                            "GET, PUT, PATCH, POST, DELETE",
                        "Access-Control-Allow-Headers": "Content-Type",
                        ...headers,
                    },
                };

                if (
                    body !== undefined &&
                    (method === "POST" ||
                        method === "PUT" ||
                        method === "PATCH")
                ) {
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
        },
        []
    );

    return { request };
};
