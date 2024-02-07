import { instance } from "@/shared/config/axiosInstance";
import { useEffect, useState } from "react";

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let activeRequests = 0;

    const updateLoadingState = () => {
      setIsLoading(activeRequests > 0);
    };

    // Добавляем интерцепторы к экземпляру axios, а не к глобальному axios
    const requestInterceptor = instance.interceptors.request.use(
      (config) => {
        activeRequests++;
        updateLoadingState();
        return config;
      },
      (error) => {
        activeRequests--;
        updateLoadingState();
        return Promise.reject(error);
      }
    );

    const responseInterceptor = instance.interceptors.response.use(
      (response) => {
        activeRequests--;
        updateLoadingState();
        return response;
      },
      (error) => {
        activeRequests--;
        updateLoadingState();
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
