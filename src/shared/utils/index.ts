type Libraries = (
    | "drawing"
    | "geometry"
    | "localContext"
    | "places"
    | "visualization"
)[];

export const MOBILE_SCREEN = window.screen.width <= 576;
export const MOBILE = window.matchMedia("(max-width: 576px)").matches;
export const TABLET = window.matchMedia(
    "(min-width: 576px) and (max-width: 992px)"
).matches;
export const SMALL_LAPTOP = window.matchMedia(
    "(min-width: 992px) and (max-width: 1200px)"
).matches;
export const PC = window.matchMedia("(min-width: 1200px)").matches;
export const GOOGLE_LIBRARIES: Libraries = ["places", "geometry"];
