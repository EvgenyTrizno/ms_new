import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { AnimatePresence, motion } from "framer-motion";

import { routes } from "../pages";
import { PSuspense } from "./providers/Suspense";
import { ErrorBoundaryFallback, PageLoader } from "@/widgets";

import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";
import { useEffect } from "react";
import { getUser } from "@/shared/api/getUser";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { useQuery } from "react-query";
import { useAuth } from "@/shared/model/store/auth";
import { useLoader } from "@/shared/lib/hooks";
import { getCenters } from "@/shared/api";
import { useCenters } from "@/shared/model/store/centers";
import { useDoctors } from "@/shared/model/store/useDoctors";
import { getDoctors } from "@/widgets/components/DoctorsFromUserCountry/api/getDoctors";

const App = () => {
  const { setUser } = useAuth();
  const { getCookie } = useCookie();
  const { setCenters } = useCenters();
  const { setDoctors } = useDoctors();
  const { data: userData } = useQuery(
    ["user"],
    () => getUser(getCookie("access_token") as string),
    {
      enabled: !!getCookie("access_token"),
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
    }
  );
  useQuery(["centers"], () => getCenters(getCookie("access_token") as string), {
    enabled: !!getCookie("access_token"),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    onSuccess: (data) => {
      setCenters(data.data.center);
    },
  });

  useQuery(["doctors"], () => getDoctors(getCookie("access_token") as string), {
    enabled: !!getCookie("access_token"),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    retry: false,
    onSuccess: (data) => {
      setDoctors(data.data);
    },
  });

  const isLoading = useLoader();

  useEffect(() => {
    if (!userData) return;

    setUser(userData.data);
  }, [setUser, userData]);

  return (
    <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
      <PSuspense>
        <AnimatePresence initial={true}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              {routes.map((page, i) => (
                <Route key={i} {...page} />
              ))}
            </Routes>
            {isLoading && <PageLoader />}
          </motion.div>
        </AnimatePresence>
      </PSuspense>
    </ErrorBoundary>
  );
};

export default App;
