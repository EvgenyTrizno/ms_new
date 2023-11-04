import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { AnimatePresence, motion } from "framer-motion";

import { Routing } from "./providers/Routing";
import { routes } from "../pages";
import { PSuspense } from "./providers/Suspense";
import { ErrorBoundaryFallback } from "@/widgets";
import { ReactQuery } from "./providers/ReactQuery";

import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";

const App = () => {
    // useEffect(() => {
    //     !sick
    //         ? (document.body.style.backgroundColor = "#F5F8FC")
    //         : (document.body.style.backgroundColor = "#FFFAFA");
    // }, [sick]);

    return (
        <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
            <ReactQuery>
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
            </ReactQuery>
        </ErrorBoundary>
    );
};

export default App;
