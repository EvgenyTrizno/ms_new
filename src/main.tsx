import ReactDOM from "react-dom/client";
import App from "./app/App";
import { ReactQuery } from "./app/providers/ReactQuery";
import { Routing } from "./app/providers/Routing";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Routing>
        <ReactQuery>

            <App />
        </ReactQuery>
    </Routing>
);
