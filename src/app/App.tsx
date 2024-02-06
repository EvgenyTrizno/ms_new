import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { AnimatePresence, motion } from "framer-motion";

import { routes } from "../pages";
import { PSuspense } from "./providers/Suspense";
import { ErrorBoundaryFallback } from "@/widgets";

import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";
import { useEffect } from "react";
import { getUser } from "@/shared/api/getUser";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { useQuery } from "react-query";
import { useAuth } from "@/shared/model/store/auth";

const App = () => {
  const { setUser } = useAuth();
  const { getCookie } = useCookie();
  const { data: userData } = useQuery(
    ["user"],
    () => getUser(getCookie("access_token") as string),
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
    }
  );

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
          </motion.div>
        </AnimatePresence>
      </PSuspense>
    </ErrorBoundary>
  );
};

export default App;
