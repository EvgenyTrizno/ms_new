import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Routing } from "./providers/Routing";
import { routes } from "../pages";
import { PSuspense } from "./providers/Suspense";
import { MOBILE_SCREEN } from "@/shared/utils";

import "./index.scss";

const App = () => {
    const [isRedirected, setIsRedirected] = useState(false);
    const [isMobileScreen, setIsMobileScreen] = useState(MOBILE_SCREEN);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.innerWidth <= 576);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobileScreen && !isRedirected) {
            setIsRedirected(true);

            window.location.pathname !== "/m/"
                ? window.location.assign("http://localhost:3000/m/")
                : null;
        } else if (!isMobileScreen && window.location.pathname === "/m/") {
            window.location.assign("http://localhost:3000");
        }
    }, [isMobileScreen, isRedirected]);

    return (
        <PSuspense>
            <Routing>
                <Routes>
                    {routes.map((page) => (
                        <Route {...page} />
                    ))}
                </Routes>
            </Routing>
        </PSuspense>
    );
};

export default App;
