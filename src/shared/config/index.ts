type Libraries = (
    | "drawing"
    | "geometry"
    | "localContext"
    | "places"
    | "visualization"
)[];

export const BASE_URL = import.meta.env.VITE_BASE_URL as string;
export const ABSOLUTE_PATH = import.meta.env.VITE_ABSOLUTE_PATH as string;
export const MOBILE_SCREEN = window.screen.width <= 576;
export const GOOGLE_LIBRARIES: Libraries = ["places"];
