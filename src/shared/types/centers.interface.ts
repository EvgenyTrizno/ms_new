import { IClinic } from "./clinic.types";

export type ICenter = Exclude<IClinic, "lng" | "lat">;
