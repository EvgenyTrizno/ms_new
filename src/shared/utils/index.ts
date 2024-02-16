export * from "./mediaQueries";
export * from "./formatTime";
export * from "./formatDate";
export * from "./formatRelativeDate";
type Libraries = (
    | "drawing"
    | "geometry"
    | "localContext"
    | "places"
    | "visualization"
)[];

export const GOOGLE_LIBRARIES: Libraries = ["places", "geometry"];