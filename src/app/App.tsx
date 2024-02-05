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

const App = () => {
  const { getCookie } = useCookie();

  useEffect(() => {
    getUser(getCookie("access_token") as string);
  }, []);

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
