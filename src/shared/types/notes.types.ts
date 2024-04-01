import { IClinic } from "./clinic.types";
import { IUserData } from "./user.types";

export interface Note {
  id?: number;
  title: string;
  online: boolean;
  time_start?: string | null;
  time_end?: string | null;
  notify?: string | null;
  problem?: string | null;
  duration_note?: number | null;
  file?: string | null;
  special_check: boolean;
  updated_at?: string | null;
  status: string;
  user?: number | null;
  center?: number | null;
  clinic?: number | null;
  doctors: number[];
}

export interface INote {
  center: IClinic;
  clinic: IClinic;
  created_at: Date;
  doctor: IUserData;
  duration_note: number;
  file: File | null;
  id: number;
  notify: null;
  online: boolean;
  problem: string;
  special_check: boolean;
  status: string;
  time_end: Date;
  time_start: Date;
  title: string;
  updated_at: Date;
}

export enum Statuses {
  PASSED = "Passed",
  IN_PROCESSING = "In processing",
  REJECTED = "Rejected",
}
