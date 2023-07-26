import { Route, Routes } from "react-router-dom";

import { Routing } from "./providers/Routing";
import { routes } from "../pages";
import { PSuspense } from "./providers/Suspense";

import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";

const App = () => {
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
