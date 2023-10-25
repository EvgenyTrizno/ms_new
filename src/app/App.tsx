import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { AnimatePresence, motion } from "framer-motion";

import { Routing } from "./providers/Routing";
import { routes } from "../pages";
import { PSuspense } from "./providers/Suspense";

import { ErrorBoundaryFallback } from "@/widgets";
import { useUserCondition } from "@/shared/model/store";

import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";

const App = () => {
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    useEffect(() => {
        !sick
            ? (document.body.style.backgroundColor = "#F5F8FC")
            : (document.body.style.backgroundColor = "#FFFAFA");
    }, [sick]);

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
