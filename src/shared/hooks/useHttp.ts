import { useCallback, useState } from "react";
/* eslint-disable no-useless-catch */
import { ICustomError, TMethod, TStatus } from "./types";

export const useHttp = () => {
    const [error, setError] = useState<boolean>(false);
    const [status, setStatus] = useState<TStatus>("idle");

    const request = useCallback(
        async (
            url: string,
            method: TMethod = "GET",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            body?: Record<string, any> | null,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            headers?: Record<string, any>
        ): Promise<any> => {
            setStatus("loading");

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

                console.log(options);

                if (
                    body !== undefined &&
                    (method === "POST" ||
                        method === "PUT" ||
                        method === "PATCH")
                ) {
                    options.body = JSON.stringify(body);
                }

                const response = await fetch(url, options);
                setStatus("succeseeded");

                if (!response.ok) {
                    const responseData = await response.json();
                    const axiosError: ICustomError = new Error(
                        `Неудалось выполнить запрос по адресу: ${url}, статут ошибки: ${response.status}`
                    );
                    axiosError.data = responseData;
                    setError(true);
                    throw axiosError;
                }

                const data = await response.json();

                return data;
            } catch (e) {
                setError(true);
                throw e;
            }
        },
        []
    );

    return { request, error, status };
};
