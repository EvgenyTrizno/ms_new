import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { Routing } from "./providers/Routing";
import { routes } from "../pages";
import { PSuspense } from "./providers/Suspense";
import { Auth } from "@/shared/api/Auth";
import { setCookie, getRefreshTokenFromCookies } from "@/features";
import { ErrorBoundaryFallback } from "@/widgets";
import { AnimatePresence, motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";

const App = () => {
    const { tokenСomparison } = Auth();

    useEffect(() => {
        if (getRefreshTokenFromCookies()) {
            const token = getRefreshTokenFromCookies();

            if (token) {
                tokenСomparison(token).then((res) => {
                    setCookie("access_token", res.access, 1);
                });
            }
        }
    }, [tokenСomparison]);

    return (
        <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
            <PSuspense>
                <AnimatePresence initial={true}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Routing>
                            <Routes>
                                {routes.map((page) => (
                                    <Route {...page} />
                                ))}
                            </Routes>
                        </Routing>
                    </motion.div>
                </AnimatePresence>
            </PSuspense>
        </ErrorBoundary>
    );
};

export default App;
