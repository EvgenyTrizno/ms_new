import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { Routing } from "./providers/Routing";
import { routes } from "../pages";
import { PSuspense } from "./providers/Suspense";
import { Auth } from "@/shared/api/Auth";
import { setCookie, getRefreshTokenFromCookies } from "@/features";
import { ErrorBoundaryFallback } from "@/widgets";

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
                <Routing>
                    <Routes>
                        {routes.map((page) => (
                            <Route {...page} />
                        ))}
                    </Routes>
                </Routing>
            </PSuspense>
        </ErrorBoundary>
    );
};

export default App;
