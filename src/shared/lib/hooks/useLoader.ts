import { instance } from "@/shared/config/axiosInstance";
import { useEffect, useState } from "react";

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let activeRequests = 0;

    const updateLoadingState = () => {
      setIsLoading(activeRequests > 0);
    };

    const requestInterceptor = instance.interceptors.request.use(
      (config) => {
        if (config.method?.toUpperCase() === "GET") {
          activeRequests++;
          updateLoadingState();
        }
        return config;
      },
      (error) => {
        if (error.config.method?.toUpperCase() === "GET") {
          activeRequests--;
          updateLoadingState();
        }
        return Promise.reject(error);
      }
    );

    const responseInterceptor = instance.interceptors.response.use(
      (response) => {
        if (response.config.method?.toUpperCase() === "GET") {
          activeRequests--;
          updateLoadingState();
        }
        return response;
      },
      (error) => {
        if (error.config.method.toUpperCase() === "GET") {
          activeRequests--;
          updateLoadingState();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return isLoading;
};
