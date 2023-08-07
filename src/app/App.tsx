import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { AnimatePresence, motion } from "framer-motion";

import { Routing } from "./providers/Routing";
import { routes } from "../pages";
import { PSuspense } from "./providers/Suspense";
import { Auth } from "@/shared/api/Auth";
import { Account } from "@/shared/api/Account";
import {
    setCookie,
    getRefreshTokenFromCookies,
    getAccessTokenFromCookies,
} from "@/features";
import { ErrorBoundaryFallback } from "@/widgets";
import { useUserData } from "@/shared/model/store";

import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";

const App = () => {
    const { setImg } = useUserData();
    const { tokenСomparison } = Auth();
    const { getUserData } = Account();

    const token = getRefreshTokenFromCookies();
    const accessToken = getAccessTokenFromCookies();

    useEffect(() => {
        if (token) {
            tokenСomparison(token).then((res) => {
                setCookie("access_token", res.access, 1);
            });
        }
    }, [token, tokenСomparison]);

    useEffect(() => {
        accessToken &&
            getUserData(accessToken).then((res) => {
                setImg(res.image);
                console.log(res);
            });
    }, [accessToken, getUserData, setImg]);

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
