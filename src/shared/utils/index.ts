type Libraries = (
    | "drawing"
    | "geometry"
    | "localContext"
    | "places"
    | "visualization"
)[];

export const MOBILE_SCREEN = window.screen.width <= 576;
export const TABLET_SCREEN = window.screen.width <= 992;
export const GOOGLE_LIBRARIES: Libraries = ["places", "geometry"];
