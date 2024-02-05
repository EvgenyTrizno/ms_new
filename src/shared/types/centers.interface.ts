import { IClinic } from "./clinic.interface";

export type ICenter = Exclude<IClinic, "lng" | "lat">;
